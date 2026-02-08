import { db } from "@/lib/db";
import { PodcastCard } from "./_components/PodcastCard";
import { UploadPodcastDialog } from "./_components/UploadPodcastDialog";

export default async function PodcastsPage() {
    const podcasts = await db.podcast.findMany({
        include: { host: true },
        orderBy: { createdAt: "desc" }
    });

    return (
        <div className="container py-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Podcasts</h1>
                    <p className="text-muted-foreground">Listen to developer discussions.</p>
                </div>
                <UploadPodcastDialog />
            </div>

            <div className="space-y-4">
                {podcasts.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                        No podcasts yet. Be the first to publish!
                    </div>
                ) : (
                    podcasts.map((podcast: any) => (
                        <PodcastCard key={podcast.id} podcast={podcast} />
                    ))
                )}
            </div>
        </div>
    );
}
