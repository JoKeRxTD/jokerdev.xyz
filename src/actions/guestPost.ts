"use server";
import { RedisClient } from '@/src/lib/redis'
import { getDate } from '@/src/utils'
import { parse } from 'date-fns'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const redis = RedisClient();

// ! Redis command examples below
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
// ! End Of Redis command examples

export async function createPost(post: any) {
    const id = Math.random().toString(36).substr(2, 9)
    const key = `post::${id}`
    await redis.hmset(key, post)
    return id
}

export async function deletePost(id: number) {
    return redis.del(`post::${id}`)
}

export async function findPostByUser(username: string) {
    const keys = await redis.keys('post::*')
    const posts = await redis.mget(keys)
    return posts.filter((post: any) => post.username === username)
}

export async function getPostById(id: number) {
    return redis.hgetall(`post::${id}`)
}

export async function getAllPosts() {
    const keys = await redis.keys('post::*')
    if (!keys.length) return []
    try {
        return await redis.mget(keys)
    } catch (error) {
        console.error(error)
    }
}

export async function updatePost(id: number, post: any) {
    return redis.hmset(`post::${id}`, post)
}

export async function getPostBySlug(slug: string) {
    const keys = await redis.keys('post::*')
    const posts = await redis.mget(keys)
    return posts.find((post: any) => post.slug === slug)
}

export async function getPostByUserId(userId: string) {
    const keys = await redis.keys('post::*')
    const posts = await redis.mget(keys)
    return posts.filter((post: any) => post.userId === userId)
}

export async function checkUserAlreadyPosted(userId: string) {
    const keys = await redis.keys('post::*')
    const posts = await redis.mget(keys)
    return posts.some((post: any) => post.userId === userId)
}



