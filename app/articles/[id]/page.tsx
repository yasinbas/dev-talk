import { notFound } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { MarkAsReadButton } from "./_components/MarkAsReadButton";
import { LikeButton } from "./_components/LikeButton";
import { ShareButton } from "./_components/ShareButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar } from "lucide-react";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: Props) {
    const { id } = await params;
    const user = await currentUser();

    const article = await db.article.findUnique({
        where: { id },
        include: {
            author: {
                select: { firstName: true, lastName: true, imageUrl: true }
            },
            readers: user ? {
                where: { user: { clerkId: user.id } }
            } : false,
            likes: user ? {
                where: { user: { clerkId: user.id } }
            } : false,
        }
    });

    if (!article) return notFound();

    const authorName = [article.author.firstName, article.author.lastName]
        .filter(Boolean)
        .join(" ") || "Anonymous";

    const hasRead = user && article.readers && article.readers.length > 0;
    const hasLiked = user && article.likes && article.likes.length > 0;

    return (
        <div className="container max-w-3xl py-8">
            <article className="prose prose-invert max-w-none">
                <div className="not-prose mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="gap-1">
                                <BookOpen className="h-3 w-3" />
                                Article
                            </Badge>
                            {hasRead && (
                                <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                                    ✓ Read
                                </Badge>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            <LikeButton
                                articleId={article.id}
                                initialLikes={article.likesCount}
                                initialLiked={!!hasLiked}
                                isLoggedIn={!!user}
                            />
                            <ShareButton title={article.title} articleId={article.id} />
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

                    <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={article.author.imageUrl || undefined} />
                                <AvatarFallback>{authorName[0]}</AvatarFallback>
                            </Avatar>
                            <span>{authorName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{article.createdAt.toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>

                {article.summary && (
                    <p className="lead text-xl text-muted-foreground mb-8">
                        {article.summary}
                    </p>
                )}

                <div className="whitespace-pre-wrap">{article.content}</div>
            </article>

            <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center justify-between p-4 border rounded-lg bg-card/50">
                    <div className="flex items-center gap-4">
                        <LikeButton
                            articleId={article.id}
                            initialLikes={article.likesCount}
                            initialLiked={!!hasLiked}
                            isLoggedIn={!!user}
                        />
                        <span className="text-sm text-muted-foreground">
                            Did you enjoy this article?
                        </span>
                    </div>
                    <ShareButton title={article.title} articleId={article.id} />
                </div>

                {user && !hasRead && (
                    <div className="p-4 bg-accent/50 rounded-lg flex items-center justify-between">
                        <div>
                            <p className="font-medium">Finished reading?</p>
                            <p className="text-sm text-muted-foreground">
                                Mark as read to earn +5 points!
                            </p>
                        </div>
                        <MarkAsReadButton articleId={article.id} />
                    </div>
                )}
            </div>
        </div>
    );
}
