import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

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

        // Check if already liked
        const existingLike = await db.articleLike.findUnique({
            where: {
                userId_articleId: { userId: dbUser.id, articleId },
            },
        });

        if (existingLike) {
            // Unlike
            await db.$transaction([
                db.articleLike.delete({
                    where: { id: existingLike.id },
                }),
                db.article.update({
                    where: { id: articleId },
                    data: { likesCount: { decrement: 1 } },
                }),
            ]);
            return NextResponse.json({ liked: false });
        } else {
            // Like
            await db.$transaction([
                db.articleLike.create({
                    data: { userId: dbUser.id, articleId },
                }),
                db.article.update({
                    where: { id: articleId },
                    data: { likesCount: { increment: 1 } },
                }),
            ]);
            return NextResponse.json({ liked: true });
        }
    } catch (error) {
        console.error("Failed to toggle like:", error);
        return NextResponse.json(
            { error: "Failed to toggle like" },
            { status: 500 }
        );
    }
}
