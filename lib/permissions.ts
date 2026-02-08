import { db } from "./db";

// Points required to create a lobby
export const LOBBY_CREATE_THRESHOLD = 100;

/**
 * Check if user can create a lobby
 */
export async function canCreateLobby(userId: string): Promise<boolean> {
    const user = await db.user.findUnique({
        where: { id: userId },
        select: { points: true },
    });
    return (user?.points ?? 0) >= LOBBY_CREATE_THRESHOLD;
}

/**
 * Get permission status with details
 */
export async function getPermissionStatus(userId: string) {
    const user = await db.user.findUnique({
        where: { id: userId },
        select: { points: true },
    });

    const currentPoints = user?.points ?? 0;
    const canCreate = currentPoints >= LOBBY_CREATE_THRESHOLD;
    const pointsNeeded = canCreate ? 0 : LOBBY_CREATE_THRESHOLD - currentPoints;

    return {
        currentPoints,
        threshold: LOBBY_CREATE_THRESHOLD,
        canCreateLobby: canCreate,
        pointsNeeded,
    };
}
