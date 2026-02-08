import Pusher from "pusher";

export const pusherServer = new Pusher({
    appId: process.env.PUSHER_APP_ID!,
    key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: "eu", // Default cluster, can be changed via env if needed
    useTLS: true,
});
