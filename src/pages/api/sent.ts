import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// import { MessageFormData } from "../../types";

type Data = {
  name: string;
  email: string;
  message: string;
};

// Rate limit mechanism
const rateLimit = 15 * 60 * 1000; // 15 minutes in milliseconds
let lastRequestTime = 0;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body as Data;
  const currentTime = Date.now();

  if (!data) return res.status(500).json({ result: "Nice try :)" });

  if (data.message.length < 1 || data.email.length < 1 || data.name.length < 1)
    return res.status(500).json({ result: "FIELD_EMPTY" });
  if (data.message.length > 1000)
    return res.status(500).json({ result: "MESSAGE_TOO_LONG" });
  if (data.email.length > 500)
    return res.status(500).json({ result: "EMAIL_TOO_LONG" });
  if (data.name.length > 500)
    return res.status(500).json({ result: "NAME_TOO_LONG" });
  if (currentTime - lastRequestTime < rateLimit)
    return res.status(429).json({ result: "TOO_FAST" });


  // Check rate limit
  if (currentTime - lastRequestTime < rateLimit) {
    return res.status(429).json({ result: "RATE_LIMIT_EXCEEDED" });
  }
  lastRequestTime = currentTime;

  const setColor = 3447003;

  await axios
    .post(process.env.DISCORD_WEBHOOK_URL as string, {
      embeds: [
        {
          title: "Contact Form",
          description: "New message from the contact form.",
          fields: [
            {
              name: "Name: ",
              value: data.name,
            },
            {
              name: "Email: ",
              value: data.email,
            },
            {
              name: "Message: ",
              value: data.message,
            },
            {
              name: "Date: ",
              value: new Date().toLocaleString(),
            },
            {
              name: "IP Address: ",
              value: req.headers["x-forwarded-for"] ?? req.socket.remoteAddress ?? "unknown!?",
            }
          ],
          color: setColor, 
          footer: {
            name: req.headers["x-forwarded-for"] ?? req.socket.remoteAddress ?? "unknown!?",
          },

        },
      ],
    })
    .then((response) => {
      if (response.data.err) return res.status(500).json({ result: "DISCORD_API_ERROR" });
      return res.status(200).json({ result: "Success" });
    });
}
