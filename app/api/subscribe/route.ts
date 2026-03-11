import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    // Connects to the database provided in the connection string
    const db = client.db();
    const collection = db.collection('email_subscribers');

    // Check if email already exists
    const existingEmail = await collection.findOne({ email: email.toLowerCase() });

    if (existingEmail) {
      return NextResponse.json(
        { message: 'You are already subscribed!' },
        { status: 200 }
      );
    }

    // Insert new email
    const newSubscriber = {
      email: email.toLowerCase(),
      subscribed_at: new Date().toISOString(),
      source: 'website',
    };

    const result = await collection.insertOne(newSubscriber);

    return NextResponse.json(
      { message: 'Successfully subscribed!', data: { ...newSubscriber, _id: result.insertedId } },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
