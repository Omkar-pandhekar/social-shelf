import { ConnectDB } from "@/dbConfig/dbConfig";
import Donate from "@/models/Donate.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Connect to database first
    await ConnectDB();

    const donationsArray = await Donate.find();

    return NextResponse.json({
      message: "Donations fetched successfully",
      success: true,
      donationsArray,
    });
  } catch (error: any) {
    console.error("Donations fetching error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
