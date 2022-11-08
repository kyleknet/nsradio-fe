import { type NextApiRequest, type NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  res.status(200).json({ success: true, msg: "hello" });
}
