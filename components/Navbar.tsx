import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MessageSquare, Calendar, Mic, Hash, User, BookOpen } from "lucide-react";

export function Navbar() {
    return (
        <nav className="border-b bg-background">
            <div className="container flex h-16 items-center px-4">
                {/* Logo */}
                <Link href="/" className="mr-8 flex items-center space-x-2">
                    <Hash className="h-6 w-6" />
                    <span className="text-xl font-bold">devTalk</span>
                </Link>

                {/* Main Nav Links */}
                <div className="flex items-center space-x-4 md:space-x-6 flex-1">
                    <Link href="/articles" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Articles
                    </Link>
                    <Link href="/lobbies" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Lobbies
                    </Link>
                    <Link href="/memes" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Memes
                    </Link>
                    <Link href="/podcasts" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
                        <Mic className="h-4 w-4" />
                        Podcasts
                    </Link>
                    <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Events
                    </Link>
                    <Link href="/profile" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Profile
                    </Link>
                </div>

                {/* Right Side Actions */}
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </nav>
    );
}
