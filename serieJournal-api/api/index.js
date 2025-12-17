const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    const cwd = process.cwd();

    const files = fs.readdirSync(cwd);
    const dataFiles = fs.existsSync(path.join(cwd, "data"))
      ? fs.readdirSync(path.join(cwd, "data"))
      : "PASTA data NÃO EXISTE";

    res.status(200).json({
      cwd,
      rootFiles: files,
      dataFolder: dataFiles
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      stack: error.stack
    });
  }
};
