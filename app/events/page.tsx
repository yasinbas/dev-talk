import { db } from "@/lib/db";
import { EventCard } from "./_components/EventCard";
import { CreateEventDialog } from "./_components/CreateEventDialog";

export const dynamic = "force-dynamic";

export default async function EventsPage() {
    const events = await db.event.findMany({
        include: { organizer: true },
        orderBy: { scheduledFor: "asc" },
        where: { scheduledFor: { gte: new Date() } }
    });

    return (
        <div className="container py-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Events</h1>
                    <p className="text-muted-foreground">Upcoming developer events and meetups.</p>
                </div>
                <CreateEventDialog />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.length === 0 ? (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No upcoming events. Create one!
                    </div>
                ) : (
                    events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))
                )}
            </div>
        </div>
    );
}
