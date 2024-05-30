import NextAuth, { NextAuthConfig } from "next-auth"
import { Secrets } from "next-auth"
import Discord, { DiscordProfile } from "next-auth/providers/discord"
import type { DefaultJWT } from 'next-auth/jwt';
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/src/lib/db"
import type { Provider } from "next-auth/providers"
import chalk from "chalk"
import { createUser, checkUserExists, updateUserRole } from "@/src/actions/actions";

const scopes = ['identify', 'guilds', 'guilds.members.read', 'email', 'connections'].join(' ');

const providers: Provider[] = [
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
]

export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
})

const authConfig = {
    // adapter: PrismaAdapter(prisma),
    providers,
    callbacks: {
        async session({ session, token }: { session: any, token: DefaultJWT }) {
            // console.log('session ~ token:', token);
            if (session?.user) {
                session.user.discordId = (token.profile as DiscordProfile).id;
                session.user.avatar = (token.profile as DiscordProfile).avatar;
                session.user.role = (token.profile as DiscordProfile).role;
                session.user.image = (token.profile as DiscordProfile).image;
                session.user.email = (token.profile as DiscordProfile).email;
                session.user.email_verified = (token.profile as DiscordProfile).email_verified;
                session.user.flags = (token.profile as DiscordProfile).flags;
                session.user.premium_type = (token.profile as DiscordProfile).premium_type;
                session.user.public_flags = (token.profile as DiscordProfile).public_flags;
                session.user.banner = (token.profile as DiscordProfile).banner;
                session.user.createdAt = (token.profile as DiscordProfile).createdAt;
                session.user.updatedAt = (token.profile as DiscordProfile).updatedAt;
                session.user.global_name = (token.profile as DiscordProfile).global_name;
                session.user.name = (token.profile as DiscordProfile).name;
                session.user.username = (token.profile as DiscordProfile).username;

            }
            // Somewhat hacky implementation
            session.profile = token.profile as DiscordProfile;
            session.secrets = token.secrets as Secrets;
            return session;
        },
        async jwt({ token, profile, account }) {
            if (account) {
                token.secrets = {
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    tokenType: account.token_type,
                    expires_at: account.expires_at
                };
            }
            if (profile) {
                token.profile = profile;
            }
            // console.log('jwt ~ token:', token);
            // console.log('jwt ~ profile:', profile);
            // console.log('jwt ~ account:', account);
            return token;
        }
    },
    pages: {
        signIn: "/login",
        signOut: "/logout",
    },
    basePath: "/api/auth",
    secret: process.env.SECRET,
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
    events: {
        async signIn(message) {
            console.log(chalk.green("sign in", message))
            const userExists = await checkUserExists(message.user.discordId!)
            if (!userExists) {
                await createUser(message.user)
            } else {
                console.log(chalk.yellow("User already exists"))
            }

        },
        async signOut(message) {
            console.log(chalk.red("sign out", message))
        },
        async createUser(message) {
            console.log(chalk.green("create user", message))
            const userExists = await checkUserExists(message.user.discordId!)
            if (!userExists) {
                await createUser(message.user)
            } else {
                console.log(chalk.yellow("User already exists"))
            }
        },
        async updateUser(message) {
            console.log(chalk.yellow("update user", message))
            await updateUserRole(message.user.discordId!, message.user.role!)
            

        },
        async linkAccount(message) {
            console.log(chalk.blue("link account", message))
        },
        async session(message) {
            console.log(chalk.cyan("session", message))
        },
    },

    // useSecureCookies: true,

} satisfies NextAuthConfig;



export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)