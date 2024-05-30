import NextAuth, { NextAuthConfig } from "next-auth"
import Discord, { DiscordProfile } from "next-auth/providers/discord"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/src/lib/db"

const scopes = ['identify', 'guilds', 'guilds.members.read', 'email', 'connections'].join(' ');

const authConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Discord({
            authorization: { params: { scope: scopes } },
            profile(profile: DiscordProfile) {
                return {
                    discordId: profile.id,
                    global_name: profile.global_name || null,
                    name: profile.global_name || null,
                    username: profile.username,
                    avatar: profile.avatar || "", // Assign an empty string if avatar is null
                    // check if img is png or gif
                    image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png` || `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.gif`,
                    email: profile.email || null,
                    email_verified: profile.verified.toString(), // Convert boolean to string
                    flags: profile.flags.toString(), // Convert number to string
                    premium_type: profile.premium_type.toString(), // Convert number to string
                    public_flags: profile.public_flags.toString(), // Convert number to string
                    banner: `https://cdn.discordapp.com/banners/${profile.id}/${profile.banner}.png` || `https://cdn.discordapp.com/banners/${profile.id}/${profile.banner}.gif`,
                    role: "user",
                    createdAt: "",
                    updatedAt: ""
                }
            },
        }),
    ],

} satisfies NextAuthConfig;

export default authConfig
