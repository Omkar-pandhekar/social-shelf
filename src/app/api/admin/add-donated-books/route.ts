import { ConnectDB } from "@/dbConfig/dbConfig";
import Book from "@/models/Book.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await ConnectDB();

    const body = await request.json();
    const { title, author, donorName, donorEmail } = body;

    // Validate required fields
    if (!title || !author || !donorName || !donorEmail) {
      return NextResponse.json(
        { error: "Title, author, donor name and email are required" },
        { status: 400 }
      );
    }

    // Create new book entry with basic information
    const newBook = await Book.create({
      title,
      author,
      donorName,
      donorEmail,
      available: true,
      addedAt: new Date(),
      needsReview: true, // Flag to indicate admin needs to review and add more details
    });

    return NextResponse.json({
      message: "Book added successfully, pending admin review",
      success: true,
      book: newBook,
    });
  } catch (error: any) {
    console.error("Error adding donated book:", error);
    return NextResponse.json(
      { error: error.message || "Error adding book" },
      { status: 500 }
    );
  }
}
