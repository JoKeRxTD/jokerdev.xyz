"use server";
import prisma from "../lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function findPostByUser(username: string) {

    // find post
    const checkUser = await prisma.post.findMany({
        where: {
            username: username
        }
    });

    return checkUser;
}

//find all posts in the database
export async function getallPosts() {
    const posts = await prisma.post.findMany();
    return posts;
}

export async function deletePost(id: number) {

    await prisma.post.delete({
        where: {
            id: id.toString() // Convert id to string
        },
    });
    revalidatePath("/guestbook");

}

//create post
export async function createPost(formData: FormData) {

    // get form data
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    const username = (formData.get("username") as string) ?? "";
    const discordId = (formData.get("discordId") as string) ?? "";

    // update database
    await prisma.post.create({
        data: {
            title,
            body,
            username,
            discordId // Include the discordId property
        },
    });

    // revalidate
    revalidatePath("/guestbook");
}

export async function CheckUser(user: string) {
    const checkUser = await findPostByUser(user);
    if (checkUser.length > 0) {
        return true;
    }
}

export async function CheckUserById(discordId: string) {
    const checkUser = await prisma.post.findMany({
        where: {
            discordId: discordId
        }
    });
    if (checkUser.length > 0) {
        return true;
    }
}

export async function updatePost(id: number, formData: FormData) {
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    await prisma.post.update({
        where: {
            id: id.toString()
        },
        data: {
            title,
            body
        }
    });
    revalidatePath("/guestbook");
}

export async function findPostByDiscordId(discordId: string) {
    const post = await prisma.post.findMany({
        where: {
            discordId: discordId
        }
    });
    return post;
}

export async function deletePostByDiscordId(discordId: string) {
    await prisma.post.deleteMany({
        where: {
            discordId: discordId
        }
    });
    revalidatePath("/guestbook");
}

// create user and add profile data to database
export async function createUser(profile: any) {
    await prisma.user.create({
        data: {
            // random id inseted
            id: profile.id,
            discordId: profile.discordId,
            global_name: profile.global_name,
            name: profile.name,
            username: profile.username,
            avatar: profile.avatar,
            image: profile.image,
            role: profile.role,
            email: profile.email,
            email_verified: profile.email_verified,
            flags: profile.flags,
            premium_type: profile.premium_type,
            public_flags: profile.public_flags,
            banner: profile.banner,
            createdAt: profile.createdAt,
            updatedAt: profile.updatedAt
        }
    });
}

// check if user exists
export async function checkUserExists(discordId: string) {
    const user = await prisma.user.findUnique({
        where: {
            discordId: discordId
        }
    });
    return user;
}

// get user by discordId
export async function getUserByDiscordId(discordId: string) {
    const user = await prisma.user.findUnique({
        where: {
            discordId: discordId
        }
    });
    return user;
}

// update user role
export async function updateUserRole(discordId: string, role: string) {
    await prisma.user.update({
        where: {
            discordId: discordId
        },
        data: {
            role: role
        }
    });
}

//check user role
export async function checkUserRole(discordId: string) {
    const user = await prisma.user.findUnique({
        where: {
            discordId: discordId
        }
    });
    return user?.role;
}

// get all users
export async function getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
}

// delete user
export async function deleteUser(discordId: string) {
    await prisma.user.delete({
        where: {
            discordId: discordId
        }
    });
    redirect("/");
}

// edit user with incoming data (if data not changes ignore) on update data that is needed
export async function editUser(discordId: string, formData: FormData) {
    const username = (formData.get("username") as string) ?? "";
    await prisma.user.update({
        where: {
            discordId: discordId
        },
        data: {
            username
        }
    });
    revalidatePath("/user/[id]");
}

// // create user APIKeys
// export async function createAPIKeys(discordId: string, accessToken: string, refreshToken: string, tokenType: string, expires_at: number) {
//     await prisma.post.create({
//         data: {
//             discordId,
//             accessToken, // Add the missing property 'accessToken'
//             refreshToken,
//             tokenType,
//             expires_at
//         }
//     });
// }

// // get user APIKeys
// export async function getAPIKeys(discordId: string) {
//     const apikeys = await prisma.post.findUnique({
//         where: {
//             discordId: discordId
//         }
//     });
//     return apikeys;
// }

// // update user APIKeys
// export async function updateAPIKeys(discordId: string, accessToken: string, refreshToken: string, tokenType: string, expires_at: number) {
//     await prisma.post.update({
//         where: {
//             discordId: discordId
//         },
//         data: {
//             accessToken, // Add the missing property 'accessToken'
//             refreshToken,
//             tokenType,
//             expires_at
//         }
//     });
// }

// // delete user APIKeys
// export async function deleteAPIKeys(discordId: string) {
//     await prisma.post.delete({
//         where: {
//             discordId: discordId
//         }
//     });
// }

// // check if user has APIKeys
// export async function checkAPIKeys(discordId: string) {
//     const apikeys = await prisma.post.findUnique({
//         where: {
//             discordId: discordId
//         }
//     });
//     return apikeys;
// }
