import {getallPosts} from "@/src/actions/actions"
import { auth } from "@/src/lib/auth"
import { NextResponse } from "next/server"
type Post = {
    id: String
    title: String
    body: String
    createdAt: String // Change type from Date to string
    updatedAt: String // Change type from Date to string
    username: String
    discordId: String
}

// todo get all posts from database and sort into a json object with the structure of [id, title, body, createdAt, updatedAt, username, discordId] - all strings
export async function GET() {
    return auth().then(async (user) => {
        if (!user) {
            return NextResponse.redirect("/login")
        }
        const posts = await getallPosts()
        const postsJson = posts.map((post) => {
            return {
                id: post.id,
                title: post.title,
                body: post.body,
                createdAt: post.createdAt.toLocaleDateString(), // Convert Date to string
                updatedAt: post.updatedAt.toLocaleDateString(), // Convert Date to string
                createdAtTimeStamp: post.createdAt.getTime(), // Add timestamp
                updatedAtTimeStamp: post.updatedAt.getTime(), // Add timestamp
                username: post.username,
                discordId: post.discordId
            }
        })
        return new Response(JSON.stringify(postsJson), {
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
}