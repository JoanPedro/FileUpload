const multer = require('multer');

module.exports = app => {
  const multerConfig = app.src.config.multer.multerConfig;
  const PostingSchema = app.src.api.models.Post.PostingSchema;

  app.route("/")
    .get((req, res) => {
      return res.json({msg: "Valendo!"})
    })

  app.route("/posts")
    .post(multer(multerConfig).single("file"), async (req, res) => {
      const poster = { ...req.file };
      
      const post = await PostingSchema.create({
        name: poster.originalname,
        size: poster.size,
        key: poster.filename,
        url: '',
      });

      return res.json(post)
    })
}