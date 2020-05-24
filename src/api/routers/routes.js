const multer = require('multer');

module.exports = app => {
  const multerConfig = app.src.config.multer.multerConfig;

  app.route("/")
    .get((req, res) => {
      return res.json({msg: "Valendo!"})
    })

  app.route("/posts")
    .post(multer(multerConfig).single("file"), (req, res) => {
      console.log(req.file);
      return res.json({hello: "Rocket"})
    })
}