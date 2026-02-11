/* eslint-disable no-console */
import 'dotenv/config'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient, Role, ParticipantRole, LobbyStatus, PointActionType } from '@prisma/client'

const connectionString = process.env.DATABASE_URL
console.log("SEED: DATABASE_URL:", connectionString);

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

const techStacks = [
    ['React', 'Next.js', 'TypeScript'],
    ['Vue', 'Nuxt', 'Node.js'],
    ['Rust', 'Wasm', 'Tokio'],
    ['Go', 'Gin', 'Docker'],
    ['Python', 'Django', 'FastAPI'],
    ['Svelte', 'SvelteKit', 'Tailwind'],
    ['C#', '.NET', 'Azure'],
    ['Java', 'Spring Boot', 'Kafka'],
    ['Elixir', 'Phoenix', 'LiveView'],
    ['PHP', 'Laravel', 'MySQL']
]

const developers = [
    { firstName: 'Sarah', lastName: 'Jenkins', bio: 'Full-stack wizard loving everything JS.', role: Role.ADMIN },
    { firstName: 'Alex', lastName: 'Code', bio: 'Rustacean since 2018. Memory safety is my passion.', role: Role.DEVELOPER },
    { firstName: 'Michael', lastName: 'Chen', bio: 'DevOps engineer turned backend developer.', role: Role.DEVELOPER },
    { firstName: 'Emily', lastName: 'Davis', bio: 'UI/UX enthusiast and CSS pixel perfectionist.', role: Role.DEVELOPER },
    { firstName: 'David', lastName: 'Wilson', bio: 'Building scalable systems with Go.', role: Role.DEVELOPER },
    { firstName: 'Jessica', lastName: 'Taylor', bio: 'Pythonista and AI hobbyist.', role: Role.DEVELOPER },
    { firstName: 'Chris', lastName: 'Brown', bio: 'Java veteran, exploring modern cloud patterns.', role: Role.DEVELOPER },
    { firstName: 'Start', lastName: 'Bootstrap', bio: 'Just shipping code.', role: Role.DEVELOPER },
    { firstName: 'Max', lastName: 'Power', bio: 'Performance optimization guru.', role: Role.DEVELOPER },
    { firstName: 'Lisa', lastName: 'Wong', bio: 'Open source contributor and maintainer.', role: Role.DEVELOPER },
    { firstName: 'Tom', lastName: 'Hanks', bio: 'Not the actor, just a humble coder.', role: Role.DEVELOPER },
    { firstName: 'Julia', lastName: 'Robert', bio: 'Frontend architect.', role: Role.DEVELOPER },
    { firstName: 'Kevin', lastName: 'Space', bio: 'Database administrator.', role: Role.DEVELOPER },
    { firstName: 'Laura', lastName: 'Craft', bio: 'Game dev switching to web.', role: Role.DEVELOPER },
    { firstName: 'Peter', lastName: 'Parker', bio: 'Web slinger... I mean web developer.', role: Role.DEVELOPER },
    { firstName: 'Bruce', lastName: 'Wayne', bio: 'Night time coder.', role: Role.DEVELOPER },
    { firstName: 'Clark', lastName: 'Kent', bio: 'Journalist learning to code.', role: Role.DEVELOPER },
    { firstName: 'Diana', lastName: 'Prince', bio: 'Wonder woman of DevOps.', role: Role.DEVELOPER },
    { firstName: 'Barry', lastName: 'Allen', bio: 'Fastest typer alive.', role: Role.DEVELOPER },
    { firstName: 'Tony', lastName: 'Stark', bio: 'I am Iron... Coder.', role: Role.DEVELOPER },
]

const articleTemplates = [
    {
        title: "Why I switched from React to Svelte",
        content: "## The Epiphany\n\nI used to love React hooks, but the complexity was getting to me. Svelte's compiler approach just makes sense...",
        summary: "A deep dive into the DX differences between React and Svelte."
    },
    {
        title: "10 Tips for cleaner TypeScript",
        content: "## 1. Use unknowns instead of any\n\nIt forces you to check types before using them.\n\n## 2. Utility types are your friend...",
        summary: "Level up your TS game with these practical tips."
    },
    {
        title: "Understanding Docker Networking",
        content: "Docker networking can be confusing. Let's break down bridge, host, and overlay networks...",
        summary: "A comprehensive guide to container communication."
    },
    {
        title: "The state of WebAssembly in 2026",
        content: "Wasm is everywhere now. From browser image processing to server-side sandboxing...",
        summary: "Is it finally the year of Wasm on the server?"
    },
    {
        title: "My journey into Rust",
        content: "The borrow checker fought me, and I won (eventually). Here is what I learned...",
        summary: "A personal retrospective on learning Rust."
    },
    {
        title: "CSS Subgrid is a game changer",
        content: "Finally, we can align nested grids with their parents. Here is how it works...",
        summary: "Modern CSS layout techniques explained."
    },
    {
        title: "Building a CI/CD pipeline with Jenkins",
        content: "Stop deploying manually. Here is a robust pipeline setup for Node.js apps...",
        summary: "Automate your deployments like a pro."
    }
]

const memeCaptions = [
    "When the code works but you don't know why",
    "Deploying to production on Friday",
    "It works on my machine",
    "Git merge conflict: The Movie",
    "Backend vs Frontend interactions",
    "Senior dev watching junior dev code",
    "Documentation? We don't do that here.",
    "Trying to exit Vim",
    "CSS centering in 2015 vs 2025",
    "When the tests pass on the first try"
]

const lobbyTopics = [
    "React vs Vue vs Angular - The eternal war",
    "Is AI going to replace us?",
    "Best VS Code extensions 2026",
    "Debugging horror stories",
    "Junior dev mentorship session",
    "Remote work challenges"
]

const imageUrls = [
    "https://avatar.vercel.sh/1",
    "https://avatar.vercel.sh/2",
    "https://avatar.vercel.sh/3",
    "https://avatar.vercel.sh/4",
    "https://avatar.vercel.sh/5"
]

function getRandomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)]
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

async function main() {
    console.log('Start seeding ...')

    const createdUsers = []

    // 1. Create Users
    for (let i = 0; i < developers.length; i++) {
        const dev = developers[i]
        const techStack = getRandomItem(techStacks)

        // Generate a consistent pseudo-random clerkId based on email
        const email = `${dev.firstName.toLowerCase()}.${dev.lastName.toLowerCase()}@example.com`
        const clerkId = `user_seed_${i}_${dev.firstName.toLowerCase()}`

        const user = await prisma.user.upsert({
            where: { email },
            update: {},
            create: {
                clerkId,
                email,
                firstName: dev.firstName,
                lastName: dev.lastName,
                bio: dev.bio,
                role: dev.role,
                points: getRandomInt(100, 5000),
                techStack: techStack,
                imageUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${dev.firstName}`,
            },
        })
        createdUsers.push(user)
        console.log(`Created user: ${user.firstName} ${user.lastName}`)
    }

    // 2. Create Content (Articles & Memes)
    for (const user of createdUsers) {
        // Determine post count (1-3 articles, 0-2 memes)
        const articleCount = getRandomInt(1, 3)
        const memeCount = getRandomInt(0, 2)

        // Create Articles
        for (let j = 0; j < articleCount; j++) {
            const template = getRandomItem(articleTemplates)
            const article = await prisma.article.create({
                data: {
                    title: `${template.title} (${user.firstName}'s take)`,
                    content: template.content,
                    summary: template.summary,
                    authorId: user.id,
                    readCount: getRandomInt(10, 500),
                    likesCount: getRandomInt(5, 100),
                    createdAt: new Date(Date.now() - getRandomInt(0, 1000000000)) // Random time in past
                }
            })

            // Add fake reads
            const readerCount = getRandomInt(0, 5)
            for (let r = 0; r < readerCount; r++) {
                const reader = getRandomItem(createdUsers)
                if (reader.id !== user.id) {
                    try {
                        await prisma.articleRead.create({
                            data: {
                                userId: reader.id,
                                articleId: article.id
                            }
                        })
                    } catch { } // Ignore unique constraint violations
                }
            }
        }

        // Create Memes
        for (let k = 0; k < memeCount; k++) {
            await prisma.meme.create({
                data: {
                    caption: getRandomItem(memeCaptions),
                    imageUrl: `https://dummyimage.com/600x400/000/fff&text=${encodeURIComponent(getRandomItem(memeCaptions))}`,
                    authorId: user.id,
                    likes: getRandomInt(10, 200),
                    createdAt: new Date(Date.now() - getRandomInt(0, 1000000000))
                }
            })
        }
    }

    // 3. Create Lobbies
    const lobbyCount = 4
    for (let i = 0; i < lobbyCount; i++) {
        const host = getRandomItem(createdUsers)
        const topic = getRandomItem(lobbyTopics)

        const lobby = await prisma.lobby.create({
            data: {
                title: topic,
                topic: "Tech Talk",
                status: i === 0 ? LobbyStatus.LIVE : LobbyStatus.WAITING, // One live lobby
                ownerId: host.id,
                maxParticipants: 10,
                startedAt: i === 0 ? new Date() : null
            }
        })

        // Add participants
        const participantCount = getRandomInt(2, 6)
        for (let p = 0; p < participantCount; p++) {
            const participant = getRandomItem(createdUsers)
            if (participant.id !== host.id) {
                try {
                    await prisma.lobbyParticipant.create({
                        data: {
                            lobbyId: lobby.id,
                            userId: participant.id,
                            role: ParticipantRole.LISTENER
                        }
                    })
                } catch { }
            }
        }
    }

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
