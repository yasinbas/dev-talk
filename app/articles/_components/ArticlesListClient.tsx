"use client";

import { useEffect, useState } from "react";
import { pusherClient } from "@/lib/pusher-client";
import { ArticleCard } from "./ArticleCard";

interface Article {
    id: string;
    title: string;
    summary: string | null;
    createdAt: Date;
    author: {
        id: string;
        firstName: string | null;
        lastName: string | null;
        imageUrl: string | null;
    };
    _count: { readers: number };
    hasRead: boolean;
}

interface ArticlesListClientProps {
    initialArticles: Article[];
    currentClerkId: string | null;
}

export function ArticlesListClient({ initialArticles, currentClerkId }: ArticlesListClientProps) {
    const [articles, setArticles] = useState(initialArticles);

    useEffect(() => {
        const channel = pusherClient.subscribe("articles");

        channel.bind("article:read", (data: { articleId: string; readersCount: number; clerkId: string }) => {
            setArticles((prev) =>
                prev.map((article) => {
                    if (article.id === data.articleId) {
                        return {
                            ...article,
                            _count: { ...article._count, readers: data.readersCount },
                            hasRead: article.hasRead || (currentClerkId === data.clerkId)
                        };
                    }
                    return article;
                })
            );
        });

        return () => {
            pusherClient.unsubscribe("articles");
        };
    }, [currentClerkId]);

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
}
