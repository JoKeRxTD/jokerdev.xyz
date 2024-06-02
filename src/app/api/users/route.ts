import {getAllUsers} from "@/src/actions/actions"
import { auth } from "@/src/lib/auth"
import { NextResponse } from "next/server"
type Users = {
    id: String
    discordId: String
    username: String
    global_name: String
    name: String
    avatar: String
    image: String
    role: String
    email: String
    email_verified: Boolean
    flags: Number
    premium_type: Number
    public_flags: Number
    banner: String
    createdAt: String
    updatedAt: String
}

//  todo: user profile card iframe render GET userdata  <iframe src="https://jokerdev.xyz/api/user/[discordId]" className{cn{h-96 w-96}}></iframe> to display user profile




// todo get all users from database and sort into a json object with the structure of [id, title, body, createdAt, updatedAt, username, discordId] - all strings
export async function GET() {
    return auth().then(async (user) => {
        if (!user) {
            return NextResponse.redirect("/login")
        }
        // rate limit 1 request every 5 seconds
        await new Promise((resolve) => setTimeout(resolve, 5000))
        

        const users = await getAllUsers()
        const usersJson = users.map((user) => {
            return {
                id: user.id,
                discordId: user.discordId,
                username: user.username,
                global_name: user.global_name,
                name: user.name,
                avatar: user.avatar,
                image: user.image,
                role: user.role,
                email: user.email,
                email_verified: user.email_verified,
                flags: user.flags,
                premium_type: user.premium_type,
                public_flags: user.public_flags,
                banner: user.banner,
                createdAt: user.createdAt.toLocaleDateString(),
                updatedAt: user.updatedAt.toLocaleDateString(),
                createdAtTimeStamp: user.createdAt.getTime(), // Add timestamp
                updatedAtTimeStamp: user.updatedAt.getTime(), // Add timestamp
            }
        })
        return new Response(JSON.stringify(usersJson), {
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
}