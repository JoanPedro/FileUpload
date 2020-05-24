const express = require('express');
const server = express();
const PORT = 3333;
const routes = require('./routes');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(PORT, _ => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
