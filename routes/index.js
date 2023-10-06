const router = require("express").Router();
const fs = require("fs");
const filePath = "./assets/MinTheinKha.LatHtaukBayDin.json";

router.get("/", async (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.json(err);
    }
    try {
      const jsonData = JSON.parse(data);
      res.send(jsonData.questions);
    } catch (parseError) {
      res.json(parseError);
    }
  });
});

module.exports = router;
