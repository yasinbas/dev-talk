import { db } from "@/lib/db";
import { ArticleCard } from "./_components/ArticleCard";
import { CreateArticleDialog } from "./_components/CreateArticleDialog";

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
    const articles = await db.article.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            author: {
                select: { firstName: true, lastName: true, imageUrl: true }
            },
            _count: { select: { readers: true } }
        }
    });

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

            {articles.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                    No articles yet. Be the first to publish!
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            )}
        </div>
    );
}
