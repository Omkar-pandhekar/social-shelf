import { ConnectDB } from "@/dbConfig/dbConfig";
import RentedBook from "@/models/RentedBooks.model";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export async function GET() {
  try {
    await ConnectDB();

    // Get session
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Find all rented books for the user by email
    const rentedBooks = await RentedBook.find({
      renterEmail: session.user.email,
      status: { $in: ["active", "overdue"] }, // Only get active and overdue books
    }).sort({ dueDate: 1 }); // Sort by due date

    // Calculate days remaining for each book
    const booksWithDetails = rentedBooks.map((book) => {
      const today = new Date();
      const dueDate = new Date(book.dueDate);
      const daysRemaining = Math.ceil(
        (dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );

      return {
        ...book.toObject(),
        daysRemaining,
        isOverdue: daysRemaining < 0,
      };
    });

    return NextResponse.json({
      success: true,
      rentedBooks: booksWithDetails,
    });
  } catch (error: unknown) {
    console.error("Error fetching rented books:", error);
    return NextResponse.json(
      { error: "Failed to fetch rented books" },
      { status: 500 }
    );
  }
}
