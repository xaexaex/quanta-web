import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, walletAddress, role } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    
    // Check if email already exists
    const existingUser = await db.collection("tge_signups").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "This email is already registered." },
        { status: 409 }
      );
    }

    const result = await db.collection("tge_signups").insertOne({
      email,
      walletAddress: walletAddress || null,
      role: role || "General Interest",
      createdAt: new Date(),
      status: "pending", // Can be used to track KYC or allocation later
    });

    return NextResponse.json(
      { message: "Registration successful!", id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("TGE Signup Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
