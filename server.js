var compression = require('compression')
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
var expressStaticGzip = require("express-static-gzip");
const port = 3000;
app.use("/", expressStaticGzip("/client/dist"));

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}
app.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.use(express.static('client/dist'));
app.use(compression({filter: shouldCompress}));

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

