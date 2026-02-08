import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { awardPoints } from "@/lib/points";

export async function POST(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: articleId } = await params;
        const user = await currentUser();

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Get or create user
        let dbUser = await db.user.findUnique({ where: { clerkId: user.id } });
        if (!dbUser) {
            dbUser = await db.user.create({
                data: {
                    clerkId: user.id,
                    email: user.emailAddresses[0].emailAddress,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    imageUrl: user.imageUrl,
                },
            });
        }

        // Check if article exists
        const article = await db.article.findUnique({ where: { id: articleId } });
        if (!article) {
            return NextResponse.json({ error: "Article not found" }, { status: 404 });
        }

        // Check if already read
        const existingRead = await db.articleRead.findUnique({
            where: {
                userId_articleId: { userId: dbUser.id, articleId }
            }
        });

        if (existingRead) {
            return NextResponse.json({ error: "Already read" }, { status: 400 });
        }

        // Create read record and update count
        await db.$transaction([
            db.articleRead.create({
                data: { userId: dbUser.id, articleId }
            }),
            db.article.update({
                where: { id: articleId },
                data: { readCount: { increment: 1 } }
            })
        ]);

        // Award points
        await awardPoints(dbUser.id, "ARTICLE_READ", { articleId });

        return NextResponse.json({ success: true, points: 5 });
    } catch (error) {
        console.error("Failed to mark as read:", error);
        return NextResponse.json({ error: "Failed to mark as read" }, { status: 500 });
    }
}
