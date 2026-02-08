import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const dbUser = await db.user.findUnique({ where: { clerkId: user.id } });
        if (!dbUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const { title, description, scheduledFor } = await req.json();

        const event = await db.event.create({
            data: {
                title,
                description,
                scheduledFor: new Date(scheduledFor),
                organizerId: dbUser.id
            }
        });

        return NextResponse.json(event);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const events = await db.event.findMany({
            include: { organizer: true },
            where: { scheduledFor: { gte: new Date() } },
            orderBy: { scheduledFor: "asc" }
        });
        return NextResponse.json(events);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
    }
}
