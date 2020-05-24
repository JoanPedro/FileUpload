const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const consign = require('consign');

const PORT = 3333;
require('./config/mongodb');

// MongoDB
app.mongoose = mongoose;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

consign()
  .include('./src/config/multer.js')
  .then('./src/api')
  
  .into(app)
;

console.log(app.src);

app.listen(PORT, _ => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
