const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const port = 3000;

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
