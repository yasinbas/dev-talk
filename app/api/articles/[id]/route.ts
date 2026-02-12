import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { getOrCreateUser } from "@/lib/auth-utils";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const article = await db.article.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        imageUrl: true,
                    },
                },
            },
        });

        if (!article) {
            return NextResponse.json({ error: "Article not found" }, { status: 404 });
        }

        return NextResponse.json(article);
    } catch (error) {
        console.error("Failed to fetch article:", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await params;
        const { title, content, summary } = await req.json();

        const article = await db.article.findUnique({
            where: { id },
        });

        if (!article) {
            return NextResponse.json({ error: "Article not found" }, { status: 404 });
        }

        const dbUser = await getOrCreateUser(user);

        // Only author can edit
        if (article.authorId !== dbUser.id) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const updatedArticle = await db.article.update({
            where: { id },
            data: {
                title,
                content,
                summary,
            },
        });

        return NextResponse.json(updatedArticle);
    } catch (error) {
        console.error("Failed to update article:", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await params;
        const article = await db.article.findUnique({
            where: { id },
        });

        if (!article) {
            return NextResponse.json({ error: "Article not found" }, { status: 404 });
        }

        const dbUser = await getOrCreateUser(user);

        // Only author can delete
        if (article.authorId !== dbUser.id) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        await db.article.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Article deleted" });
    } catch (error) {
        console.error("Failed to delete article:", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
