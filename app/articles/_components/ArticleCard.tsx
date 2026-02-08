import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Eye } from "lucide-react";

interface ArticleCardProps {
    article: {
        id: string;
        title: string;
        summary: string | null;
        createdAt: Date;
        author: {
            firstName: string | null;
            lastName: string | null;
            imageUrl: string | null;
        };
        _count: { readers: number };
    };
}

export function ArticleCard({ article }: ArticleCardProps) {
    const authorName = [article.author.firstName, article.author.lastName]
        .filter(Boolean)
        .join(" ") || "Anonymous";

    return (
        <Link href={`/articles/${article.id}`}>
            <Card className="h-full hover:bg-accent/50 transition-colors cursor-pointer">
                <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-xs text-muted-foreground">
                            +5 points to read
                        </span>
                    </div>
                    <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {article.summary && (
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                            {article.summary}
                        </p>
                    )}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src={article.author.imageUrl || undefined} />
                                <AvatarFallback>{authorName[0]}</AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">{authorName}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Eye className="h-3 w-3" />
                            {article._count.readers}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
