import { Redis } from "@upstash/redis";

export const RedisClient = () => {
  const token = process.env.REDIS_KEY!;
  const url = "https://eu1-content-mackerel-39919.upstash.io";

  if (!url) throw new Error("Redis URL is missing!");
  if (!token) throw new Error("Redis TOKEN is missing!");

  const redis = new Redis({
    url,
    token,
  });

  return redis;
};