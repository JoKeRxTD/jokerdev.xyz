import NextAuth, { NextAuthConfig } from "next-auth"
import { Secrets } from "next-auth"
import type { Provider } from "next-auth/providers"
import Discord, { DiscordProfile } from "next-auth/providers/discord"
import type { DefaultJWT } from 'next-auth/jwt';
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter"
import { Redis } from "@upstash/redis"
import { type Adapter } from "next-auth/adapters";
import chalk from "chalk"
import { createUser, userExists, checkAdminRole, updateUser } from "@/src/actions/user";

const scopes = ['identify', 'guilds', 'email'].join(' ');

const providers: Provider[] = [
    Discord({
        authorization: { params: { scope: scopes } },
        allowDangerousEmailAccountLinking: true,
        profile(profile: DiscordProfile): any {
            return {
                discordId: profile.id,
                global_name: profile.global_name,
                name: profile.name,
                username: profile.username,
                avatar: profile.avatar,
                image: "https://cdn.discordapp.com/avatars/" + profile.id + "/" + profile.avatar + ".png",
                email: profile.email,
                email_verified: profile.verified,
                role: "user",
            };
        },
    }),
]

export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
})

const redis = Redis.fromEnv();

const authConfig = {
    providers,
    adapter: UpstashRedisAdapter(redis) as Adapter,
    callbacks: {
        async signIn(user) {
            if (user.profile?.email !== process.env.OWNER_EMAIL) return false;

            return true;
        },
        async session({ session, user }) {
            // console.log(session);
            // console.log(user);
            return session;
        },
        authorized({ auth, request: { nextUrl } }) {
            let isLoggedIn = !!auth?.user;
            let isOnDashboard = nextUrl.pathname.startsWith("/analytics");

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                //return Response.redirect(new URL("/protected", nextUrl));
                return true;
            }

            return true;
        },
    },
    session: {
        maxAge: 30 * 24 * 60 * 60,
    },
    pages: {
        signIn: "/login",
        signOut: "/logout",
    },
    basePath: "/api/auth",
    secret: process.env.AUTH_SECRET,
    debug: false,
    logger: {
        error(message) {
            console.log(chalk.red(message))
        },
        warn(message) {
            console.log(chalk.yellow(message))
        },
        debug(message) {
            console.log(chalk.blue(message))
        },
    },
    // useSecureCookies: true,
} satisfies NextAuthConfig;



export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)