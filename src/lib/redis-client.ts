import { Redis } from "@upstash/redis";

const token = process.env.UPSTASH_REDIS_REST_TOKEN! || "";
const url = process.env.UPSTASH_REDIS_REST_URL! || "";

const redis = new Redis({
  url,
  token,
});

if (!redis) {
  throw new Error("Redis client not found");
}

export const RedisClient = () => {
  return redis;
};

export type { Redis };