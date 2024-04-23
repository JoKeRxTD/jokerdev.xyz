import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
  email: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const data = req.body as Data;

  if (!data) return res.status(500).json({ result: "Nice try :)" });

  if (data.message.length < 1 || data.email.length < 1 || data.name.length < 1) return res.status(500).json({ result: "FIELD_EMPTY" });
  if (data.message.length > 1000) return res.status(500).json({ result: "MESSAGE_TOO_LONG" });
  if (data.email.length > 500) return res.status(500).json({ result: "EMAIL_TOO_LONG" });
  if (data.name.length > 500) return res.status(500).json({ result: "NAME_TOO_LONG" });

  await axios.post(process.env.WEBHOOK_URL as string, {
    embeds: [
      {
        color: 3553598,
        title: "Email: " + data.email,
        author: {
          name: "Name: " + data.name
        },
        footer: {
          name: req.headers["x-forwarded-for"] ?? req.socket.remoteAddress ?? "unknown!?"
        },
        description: "Message: " + data.message
      }
    ]
  }).then(response => {
    if (response.data.err) return res.status(500).json({ result: "DISCORD_API_ERROR" });
    return res.status(200).json({ result: "Success" });
  });
}
