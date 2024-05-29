import { Redis } from "@upstash/redis";

export const RedisClient = () => {
  const redis = new Redis({
    url: "https://eu1-content-mackerel-39919.upstash.io",
    token: process.env.REDIS_KEY! || "AZvvASQgZDBiZTAzMjQtZTRkNC00MzBjLWI3Y2ItNWNhZjJkNWNjMWM5NDc3MjI1YjRhMjNjNGEzMDlmNjA4M2Q0MTViMzJiZDI=",
  });

  return redis;
};