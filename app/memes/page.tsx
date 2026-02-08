import { db } from "@/lib/db";
import { MemeCard } from "./_components/MemeCard";
import { UploadMemeDialog } from "./_components/UploadMemeDialog";

export default async function MemesPage() {
    const memes = await db.meme.findMany({
        include: { author: true },
        orderBy: { createdAt: "desc" },
        take: 20
    });

    return (
        <div className="container py-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Meme Feed</h1>
                    <p className="text-muted-foreground">Share and enjoy dev humor.</p>
                </div>
                <UploadMemeDialog />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {memes.length === 0 ? (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No memes yet. Be the first to post!
                    </div>
                ) : (
                    memes.map((meme: any) => (
                        <MemeCard key={meme.id} meme={meme} />
                    ))
                )}
            </div>
        </div>
    );
}
