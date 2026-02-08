import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { getOrCreateUser } from "@/lib/auth-utils";
import { awardPoints } from "@/lib/points";

export async function POST(req: Request) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { caption, imageUrl } = await req.json();

        if (!caption || !imageUrl) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const dbUser = await getOrCreateUser(user);

        const meme = await db.meme.create({
            data: {
                caption,
                imageUrl,
                authorId: dbUser.id
            }
        });

        // Award points for meme
        await awardPoints(dbUser.id, "MEME_PUBLISHED", { memeId: meme.id });

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
