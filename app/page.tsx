import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight, Code2, MessageSquare, Mic } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center space-y-8">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Where Developers <span className="text-primary">Talk Logic</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Join the community of developers sharing memes, discussing tech stacks,
          hosting lobbies, and publishing podcasts.
        </p>
      </div>

      <div className="flex gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            <Button size="lg" variant="outline">Sign In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button size="lg">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <Link href="/lobbies">
            <Button size="lg">
              Enter Lobbies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </SignedIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
        <FeatureCard
          icon={<MessageSquare className="h-10 w-10 text-primary" />}
          title="Real-time Lobbies"
          description="Join temporary voice & chat lobbies to discuss specific topics or debug together."
        />
        <FeatureCard
          icon={<Code2 className="h-10 w-10 text-primary" />}
          title="Tech Stack Analysis"
          description="Showcase your stack, get rated, and discover new tools used by the community."
        />
        <FeatureCard
          icon={<Mic className="h-10 w-10 text-primary" />}
          title="Micro Podcasts"
          description="Record and share short audio clips about your dev journey or hot takes."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
