const router = require("express").Router();
const { log } = require("console");
const fs = require("fs");
const filePath = "./assets/MinTheinKha.LatHtaukBayDin.json";

router.get("/answers/:question/:answer", async (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.json(err);
    }
    try {
      const jsonData = JSON.parse(data);
      const answers = jsonData.answers;
      const question = req.params.question;
      const answer = req.params.answer;
      if (!question && !answer) {
        res.json({ error: "some are null" });
      }
      const foundAnswer = answers.find((answerSheet) => {
        return (
          question == answerSheet.questionNo && answer == answerSheet.answerNo
        );
      });
      if (foundAnswer == null) {
        res.json({ error: "Not Found" });
      }
      res.json(foundAnswer);
    } catch (parseError) {
      res.json(parseError);
    }
  });
});

module.exports = router;
