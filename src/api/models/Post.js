module.exports = app => {
  const PostSchema = new app.mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const PostingSchema = app.mongoose.model('Post', PostSchema)
  return { PostingSchema };
}
