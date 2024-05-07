import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu1-content-mackerel-39919.upstash.io',
  token: process.env.REDIS_KEY!,
})