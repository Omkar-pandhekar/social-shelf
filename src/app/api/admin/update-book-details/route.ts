import { ConnectDB } from "@/dbConfig/dbConfig";
import Book from "@/models/Book.model";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    await ConnectDB();

    const body = await request.json();
    const { bookId, category, condition, description, imageUrl } = body;

    // Validate required fields
    if (!bookId || !category || !condition) {
      return NextResponse.json(
        { error: "Book ID, category and condition are required" },
        { status: 400 }
      );
    }

    // Update book details
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      {
        category,
        condition,
        description,
        imageUrl,
        needsReview: false, // Mark as reviewed by admin
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!updatedBook) {
      return NextResponse.json({ error: "Book not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Book details updated successfully",
      success: true,
      book: updatedBook,
    });
  } catch (error: any) {
    console.error("Error updating book details:", error);
    return NextResponse.json(
      { error: error.message || "Error updating book details" },
      { status: 500 }
    );
  }
}
