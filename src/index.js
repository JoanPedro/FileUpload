const express = require('express');
const app = express();
const PORT = 3333;
const mongoose = require('mongoose');
const consign = require('consign');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


consign()
  .include('./src/api')
  .into(app)
;

console.log(app);

app.listen(PORT, _ => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
