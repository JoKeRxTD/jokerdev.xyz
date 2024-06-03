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
                avatar_decoration: profile.avatar_decoration,
                banner: profile.banner,
                banner_color: profile.banner_color,
                email: profile.email,
                email_verified: profile.email_verified,
                role: "user",
                accent_color: profile.accent_color,
                flags: profile.flags,
                bot: profile.bot,
                display_name: profile.display_name,
                premium_type: profile.premium_type,
                public_flags: profile.public_flags,
                image_url: profile.image_url,
                locale: profile.locale,
                mfa_enabled: profile.mfa_enabled,
                system: profile.system,
                verified: profile.verified,
                
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
        async session({ session, user}) {
            console.log(chalk.green("session"), session);
            console.log(chalk.blue("user"), user);
            session.user = user;
            return session;
        },
        authorized({ auth, request: { nextUrl } }) {
            let isLoggedIn = !!auth?.user;
            let isOnAnalytics = nextUrl.pathname.startsWith("/analytics");

            if (isOnAnalytics) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                //return Response.redirect(new URL("/isOnAnalytics", nextUrl));
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