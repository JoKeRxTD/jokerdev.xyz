"use server";
import { RedisClient } from '@/src/lib/redis'
import { getDate } from '@/src/utils'
import { parse } from 'date-fns'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const redis = RedisClient();


//! Redis command examples below
// // string
// await redis.set('key', 'value');
// let data = await redis.get('key');
// console.log(data)

// await redis.set('key2', 'value2', {ex: 1});

// // sorted set
// await redis.zadd('scores', { score: 1, member: 'team1' })
// data = await redis.zrange('scores', 0, 100 )
// console.log(data)

// // list
// await redis.lpush('elements', 'magnesium')
// data = await redis.lrange('elements', 0, 100 )
// console.log(data)

// // hash
// await redis.hset('people', {name: 'joe'})
// data = await redis.hget('people', 'name' )
// console.log(data)

// // sets
// await redis.sadd('animals', 'cat')
// data  = await redis.spop('animals', 1)
// console.log(data)
//! End Of Redis command examples


const RoleList = ['admin', 'user']

// create user in 
export async function createUser(user: any) {
    const key = `user::${user.id}::${user.username}`
    try {
        await redis.hmset(key, user)
    } catch (error) {
        console.error(error)
    }
}

// check if user exists
export async function userExists(id: string, username: string) {
    const key = `user::${id}::${username}`
    try {
        return await redis.exists(key)
    } catch (error) {
        console.error(error)
    }
}

// get user by id
export async function getUserById(id: string) {
    return redis.hgetall(`user::${id}`)
}

// get all users
export async function getAllUsers() {
    const keys = await redis.keys('user::*')
    const users = await redis.mget(keys)
    return users
}

// update user with form data & session/account data
export async function updateUser(discordId: string, user: any) {
    const key = `user::${discordId}::${user.username}`
    try {
        await redis.hmset(key, user)
    } catch (error) {
        console.error(error)
    }
}

// delete user
export async function deleteUser(id: string) {
    const key = `user::${id}`
    await redis.del(key)
}

// get user posts
export async function getUserPosts(id: string) {
    return redis.lrange(`posts::${id}`, 0, -1)
}

// check if user had admin role
export async function checkAdminRole(id: string) {
    const user = await getUserById(id)
    return user !== null && user.role === 'admin'
}

// get user by username
export async function getUserByUsername(username: string) {
    const keys = await redis.keys('user::*')
    const users = await redis.mget(keys)
    return users.find((user: any) => user.username === username)
}

// get user by email
export async function getUserByEmail(email: string) {
    const keys = await redis.keys('user::*')
    const users = await redis.mget(keys)
    return users.find((user: any) => user.email === email)
}

// get user by discord id
export async function getUserByid(id: string) {
    const keys = await redis.keys('user::*')
    const users = await redis.mget(keys)
    return users.find((user: any) => user.id === id)
}




