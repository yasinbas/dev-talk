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

        const { title, description, audioUrl } = await req.json();

        const podcast = await db.podcast.create({
            data: {
                title,
                description,
                audioUrl,
                hostId: dbUser.id
            }
        });

        return NextResponse.json(podcast);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create podcast" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const podcasts = await db.podcast.findMany({
            include: { host: true },
            orderBy: { createdAt: "desc" }
        });
        return NextResponse.json(podcasts);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch podcasts" }, { status: 500 });
    }
}
