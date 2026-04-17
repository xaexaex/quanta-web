import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection('contact_messages');

        // Insert new message
        const newMessage = {
            name,
            email: email.toLowerCase(),
            message,
            submitted_at: new Date().toISOString(),
            source: 'services_page',
        };

        const result = await collection.insertOne(newMessage);

        return NextResponse.json(
            { message: 'Successfully submitted message!', data: { ...newMessage, _id: result.insertedId } },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
