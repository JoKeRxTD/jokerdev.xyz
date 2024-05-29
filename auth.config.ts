// import NextAuth, { NextAuthConfig } from "next-auth"
// import Discord, { DiscordProfile } from "next-auth/providers/discord"
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "@/src/lib/db"

// const authConfig = {
//     adapter: PrismaAdapter(prisma),
//     providers: [
//         Discord({
//             authorization: ["identify", "email", "guilds", "connections"],
//             profile(profile: DiscordProfile) {
//                 return {
//                     discordId: profile.id,
//                     global_name: profile.global_name || undefined,
//                     name: profile.global_name || undefined,
//                     username: profile.username,
//                     avatar: profile.avatar,
//                     // img as png or gif
//                     image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
//                     email: profile.email,
//                     email_verified: profile.verified,
//                     flags: profile.flags,
//                     premium_type: profile.premium_type,
//                     public_flags: profile.public_flags,
//                     banner: `https://cdn.discordapp.com/banners/${profile.id}/${profile.banner}.png`,
//                 }
//             },
//         }),
//     ],

// } satisfies NextAuthConfig;

// export default authConfig
