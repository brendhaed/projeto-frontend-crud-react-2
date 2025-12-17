import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(
    process.cwd(),
    "serieJournal-api/data/series.json"
  );

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (req.method === "GET") {
    return res.status(200).json(data);
  }

  res.status(405).json({ message: "Method not allowed" });
}
