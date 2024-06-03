import {getAllPosts} from "@/src/actions/guestPost"
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
        const posts = await getAllPosts()
        return new Response(JSON.stringify(posts), {
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
}