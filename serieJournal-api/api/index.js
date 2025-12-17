const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "data", "series.json");

    const file = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(file);

    res.status(200).json(data);
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: "Falha em carregar os dados." });
  }
};