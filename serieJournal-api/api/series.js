const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "data", "series.json");
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
