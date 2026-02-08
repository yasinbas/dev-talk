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

        const { title, description, audioUrl } = await req.json();

        if (!title || !audioUrl) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const dbUser = await getOrCreateUser(user);

        const podcast = await db.podcast.create({
            data: {
                title,
                description,
                audioUrl,
                hostId: dbUser.id
            }
        });

        await awardPoints(dbUser.id, "PODCAST_PUBLISHED", { podcastId: podcast.id });

        return NextResponse.json(podcast);
    } catch (_error) {
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
    } catch (_error) {
        return NextResponse.json({ error: "Failed to fetch podcasts" }, { status: 500 });
    }
}
