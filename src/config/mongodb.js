const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/filemongo", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then( _ => console.log('MongoDB Connected!'))
  .catch( e => {
  const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
  console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m', e)
})