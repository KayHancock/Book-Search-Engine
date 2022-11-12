const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
});
