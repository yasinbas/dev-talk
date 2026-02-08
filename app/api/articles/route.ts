import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { awardPoints } from "@/lib/points";
import { getOrCreateUser } from "@/lib/auth-utils";

export async function GET() {
    try {
        const articles = await db.article.findMany({
            orderBy: { createdAt: "desc" },
            include: {
                author: {
                    select: { firstName: true, lastName: true, imageUrl: true }
                },
                _count: { select: { readers: true } }
            }
        });
        return NextResponse.json(articles);
    } catch (error) {
        console.error("Failed to fetch articles:", error);
        return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { title, summary, content } = await req.json();

        if (!title || !content) {
            return NextResponse.json(
                { error: "Title and content are required" },
                { status: 400 }
            );
        }

        // Find or create user
        const dbUser = await getOrCreateUser(user);

        // Create article
        const article = await db.article.create({
            data: {
                title,
                summary: summary || null,
                content,
                authorId: dbUser.id,
            },
        });

        // Award points for publishing
        await awardPoints(dbUser.id, "ARTICLE_PUBLISHED", { articleId: article.id });

        return NextResponse.json(article);
    } catch (error) {
        console.error("Failed to create article:", error);
        return NextResponse.json({ error: "Failed to create article" }, { status: 500 });
    }
}
