const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "series.json"
    );

    const rawData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(rawData);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "Falha em carregar os dados",
      details: error.message,
    });
  }
};
