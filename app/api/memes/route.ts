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

        const { caption, imageUrl } = await req.json();

        const meme = await db.meme.create({
            data: {
                caption,
                imageUrl,
                authorId: dbUser.id
            }
        });

        return NextResponse.json(meme);
    } catch (_error) {
        return NextResponse.json({ error: "Failed to create meme" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const memes = await db.meme.findMany({
            include: { author: true },
            orderBy: { createdAt: "desc" },
            take: 50
        });
        return NextResponse.json(memes);
    } catch (_error) {
        return NextResponse.json({ error: "Failed to fetch memes" }, { status: 500 });
    }
}
