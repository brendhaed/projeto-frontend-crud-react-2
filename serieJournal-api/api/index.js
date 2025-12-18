const series = require("../data/series.json");

module.exports = (req, res) => {
  try {
    res.status(200).json(series);
  } catch (error) {
    res.status(500).json({
      error: "Falha em carregar os dados",
      details: error.message
    });
  }
};
