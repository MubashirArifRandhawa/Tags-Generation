const fs = require("fs").promises;
const motivationalWords = [
  "determined",
  "focus",
  "clarity",
  "presence",
  "accomplish",
  "balance",
  "courage",
  "belief",
  "gratitude",
  "joy",
  "imagination",
  "curiosity",
  "priority",
  "honesty",
  "mindfulness",
  "challenge",
  "passion",
  "value",
  "commitment",
  "nurture",
  "explore",
  "zeal",
];
const motivationalQuotes = new Set();
const main = async () => {
  const rawData = await fs.readFile(
    "./../data/allQuotations/quotationsDB.json"
  );
  const data = JSON.parse(rawData);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < motivationalWords.length; j++) {
      if (data[i].quote.includes(motivationalWords[j])) {
        motivationalQuotes.add(data[i]);
      }
    }
  }
  await fs.writeFile(
    "./motivational.json",
    JSON.stringify(Array.from(motivationalQuotes.values()))
  );
};

(async () => await main())();
