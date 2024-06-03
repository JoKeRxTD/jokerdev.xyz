import {getAllUsers} from "@/src/actions/user"
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
export const GET = auth(function GET(req) {
    if (req.auth) return NextResponse.json(req.auth)

    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
})

