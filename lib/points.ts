import { db } from "./db";
import type { PointActionType } from "@prisma/client";

// Point values for earning
export const POINT_VALUES = {
    ARTICLE_READ: 5,
    ARTICLE_PUBLISHED: 20,
    PODCAST_PUBLISHED: 15,
    MEME_PUBLISHED: 5,
    LOBBY_HOSTED: 10,
} as const;

// Decay configuration
export const DECAY_PER_WEEK = 5;
export const DECAY_THRESHOLD_DAYS = 7;

/**
 * Award points to a user and log the action
 */
export async function awardPoints(
    userId: string,
    action: PointActionType,
    metadata?: Record<string, unknown>
) {
    const points = POINT_VALUES[action as keyof typeof POINT_VALUES];

    if (!points) {
        throw new Error(`Unknown action: ${action}`);
    }

    await db.$transaction([
        db.user.update({
            where: { id: userId },
            data: { points: { increment: points } },
        }),
        db.pointAction.create({
            data: {
                userId,
                action,
                points,
                metadata: (metadata as any) ?? undefined,
            },
        }),
    ]);

    return points;
}

/**
 * Calculate and apply point decay based on login inactivity
 */
export async function applyPointDecay(userId: string) {
    const user = await db.user.findUnique({
        where: { id: userId },
        select: { lastLoginAt: true, points: true },
    });

    if (!user) return 0;

    const now = new Date();
    const lastLogin = new Date(user.lastLoginAt);
    const daysSinceLogin = Math.floor(
        (now.getTime() - lastLogin.getTime()) / (1000 * 60 * 60 * 24)
    );

    const weeksInactive = Math.floor(daysSinceLogin / DECAY_THRESHOLD_DAYS);

    if (weeksInactive <= 0) return 0;

    const decayAmount = weeksInactive * DECAY_PER_WEEK;
    const newPoints = Math.max(0, user.points - decayAmount);

    await db.$transaction([
        db.user.update({
            where: { id: userId },
            data: { points: newPoints, lastLoginAt: now },
        }),
        db.pointAction.create({
            data: {
                userId,
                action: "DECAY",
                points: -decayAmount,
                metadata: { weeksInactive, daysSinceLogin } as any,
            },
        }),
    ]);

    return -decayAmount;
}

/**
 * Update last login time (call on user activity)
 */
export async function updateLastLogin(userId: string) {
    await db.user.update({
        where: { id: userId },
        data: { lastLoginAt: new Date() },
    });
}

/**
 * Get user's current points
 */
export async function getUserPoints(userId: string): Promise<number> {
    const user = await db.user.findUnique({
        where: { id: userId },
        select: { points: true },
    });
    return user?.points ?? 0;
}
