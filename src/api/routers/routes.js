module.exports = app => {

  app.route('/')
    .get((req, res) => {
      return res.json({msg: "Valendo!"})
    })
}