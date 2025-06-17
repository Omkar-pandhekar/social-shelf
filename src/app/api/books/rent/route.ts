import { ConnectDB } from "@/dbConfig/dbConfig";
import Book from "@/models/Book.model";
import RentedBook from "@/models/RentedBooks.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await ConnectDB();
    const body = await req.json();
    console.log("Received rental request:", body);

    const { bookId, userId, userName, userEmail } = body;

    // Validate required fields
    if (!bookId || !userId || !userName || !userEmail) {
      console.log("Missing fields:", { bookId, userId, userName, userEmail });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Find the book
    const book = await Book.findOne({ bookId });
    if (!book) {
      console.log("Book not found:", bookId);
      return NextResponse.json({ error: "Book not found" }, { status: 404 });
    }

    // Check if book is available
    if (book.stock <= 0) {
      console.log("Book out of stock:", bookId);
      return NextResponse.json(
        { error: "Book is out of stock" },
        { status: 400 }
      );
    }

    // Check if user has already rented this book
    const existingRental = await RentedBook.findOne({
      bookId,
      renterId: userId,
      status: "active",
    });

    if (existingRental) {
      console.log("User already rented this book:", { bookId, userId });
      return NextResponse.json(
        { error: "You have already rented this book" },
        { status: 400 }
      );
    }

    // Calculate due date (14 days from now)
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);

    // Create rental record
    const newRental = new RentedBook({
      bookId,
      renterId: userId,
      renterName: userName,
      renterEmail: userEmail,
      bookTitle: book.title,
      dueDate,
      status: "active",
    });

    // Update book stock
    book.stock -= 1;
    await book.save();
    await newRental.save();

    console.log("Book rented successfully:", {
      bookId,
      userId,
      rentalId: newRental._id,
    });

    return NextResponse.json({
      message: "Book rented successfully",
      rental: {
        id: newRental._id,
        bookTitle: book.title,
        dueDate: newRental.dueDate,
        status: newRental.status,
      },
      remainingStock: book.stock,
    });
  } catch (error: any) {
    console.error("Error renting book:", error);
    return NextResponse.json({ error: "Failed to rent book" }, { status: 500 });
  }
}
