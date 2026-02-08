import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { CreateArticleDialog } from "./_components/CreateArticleDialog";
import { ArticlesListClient } from "./_components/ArticlesListClient";

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
    const user = await currentUser();

    const articles = await db.article.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            author: {
                select: { id: true, firstName: true, lastName: true, imageUrl: true }
            },
            _count: { select: { readers: true } },
            readers: user ? {
                where: { user: { clerkId: user.id } },
                select: { userId: true }
            } : false
        }
    });

    const transformedArticles = articles.map(a => ({
        ...a,
        hasRead: user ? (a.readers?.length ?? 0) > 0 : false
    }));

    return (
        <div className="container py-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Articles</h1>
                    <p className="text-muted-foreground">
                        Read articles to earn points and unlock lobby creation!
                    </p>
                </div>
                <CreateArticleDialog />
            </div>

            {transformedArticles.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                    No articles yet. Be the first to publish!
                </div>
            ) : (
                <ArticlesListClient
                    initialArticles={transformedArticles}
                    currentClerkId={user?.id || null}
                />
            )}
        </div>
    );
}
