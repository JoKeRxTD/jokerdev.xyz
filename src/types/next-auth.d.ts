import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  type UserSession = DefaultSession['user'];
  interface Session {
    user: UserSession;
  }

  interface CredentialsInputs {
    email: string;
    password: string;
  }
}

import 'next-auth';
import { DiscordProfile } from 'next-auth/providers/discord';
// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
// import type { DefaultUser } from 'next-auth';

// user: {
//     email: 'thomas.yardy92@gmail.com',
//     discordId: '116730818822537225',
//     avatar: 'a_8e5fad610c822f5ecb4721066bb9ab97',
//     flags: 4325952,
//     premium_type: 2,
//     public_flags: 4325952,
//     banner: 'e52115412ab181e70d24f9d08e756476',
//     global_name: '<JoKeR/>',
//     username: 'jokerxtd'
//   },
//   expires: '2024-06-27T22:54:59.020Z',
//   profile: {
//     id: '116730818822537225',
//     username: 'jokerxtd',
//     avatar: 'a_8e5fad610c822f5ecb4721066bb9ab97',
//     discriminator: '0',
//     public_flags: 4325952,
//     flags: 4325952,
//     banner: 'e52115412ab181e70d24f9d08e756476',
//     accent_color: 263172,
//     global_name: '<JoKeR/>',
//     avatar_decoration_data: null,
//     banner_color: '#040404',
//     clan: null,
//     mfa_enabled: true,
//     locale: 'en-GB',
//     premium_type: 2,
//     email: 'thomas.yardy92@gmail.com',
//     verified: true
//   },
//   secrets: {
//     accessToken: 'op6Qhr1FijKkLtpDgHee6CVzCzm2ht',
//     refreshToken: 'jRZdOEQ9tSS2kfBskOL2aOY6re5XQa',
//     tokenType: 'bearer',
//     expires_at: 1717541006
//   }

declare module 'next-auth' {
	export interface Session {
		user: {
			id: string;
			discordId: string;
			global_name: string | null;
			name: string | null;
			username: string;
			avatar: string;
			image: string;
			email: string;
			email_verified: string;
			flags: string;
			premium_type: string;
			public_flags: string;
			banner: string;
			role: string;
			createdAt: string;
			updatedAt: string;
		};
		profile: DiscordProfile;
		secrets: Secrets;

	}
	interface JWT {
		secrets: string;
	}

	export interface Secrets {
		accessToken: string;
		refreshToken: string;
		tokenType: string;
		expires_at?: number;
	}
  
	interface Profile {
		id: string;
		username: string;
		avatar: string;
		discriminator: string;
		public_flags: number;
		flags: number;
		banner: string;
		accent_color: number;
		global_name: string;
		avatar_decoration_data: string | null;
		banner_color: string;
		clan: string | null;
		mfa_enabled: boolean;
		locale: string;
		premium_type: number;
		email: string;
		verified: boolean;
	}

	interface User {
		id: string;
		discordId: string;
		global_name: string | null;
		name: string | null;
		username: string;
		avatar: string;
		image: string;
		email: string;
		email_verified: string;
		flags: string;
		premium_type: string;
		public_flags: string;
		banner: string;
		role: string;
		createdAt: string;
		updatedAt: string;
	}

	interface APIKeys {
		accessToken: string;
		refreshToken: string;
		tokenType: string;
		expires_at?: number;
	}

	interface Posts {
		id: string;
		title: string;
		body: string;
		createdAt: string;
		updatedAt: string;
		username: string;
		discordId: string;
	}

	
}