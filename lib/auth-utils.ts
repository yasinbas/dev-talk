import { db } from "@/lib/db";
import { User } from "@clerk/nextjs/server";

/**
 * Get existing user or create/update from Clerk data
 * Using Upsert to prevent race conditions
 */
export async function getOrCreateUser(clerkUser: User) {
    return db.user.upsert({
        where: { clerkId: clerkUser.id },
        update: {
            email: clerkUser.emailAddresses[0].emailAddress,
            firstName: clerkUser.firstName,
            lastName: clerkUser.lastName,
            imageUrl: clerkUser.imageUrl,
            lastLoginAt: new Date() // Update login time
        },
        create: {
            clerkId: clerkUser.id,
            email: clerkUser.emailAddresses[0].emailAddress,
            firstName: clerkUser.firstName,
            lastName: clerkUser.lastName,
            imageUrl: clerkUser.imageUrl,
        }
    });
}
