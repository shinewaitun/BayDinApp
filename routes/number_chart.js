const router = require("express").Router();
const fs = require("fs");
const filePath = "./assets/MinTheinKha.LatHtaukBayDin.json";

router.get("/number_chart", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.json(err);
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.numberList);
    } catch (parseError) {
      res.json(parseError);
    }
  });
});

module.exports = router;
