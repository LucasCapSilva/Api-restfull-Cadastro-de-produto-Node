const restful = require('node-restful')
const mongoose = restful.mongoose
const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  ativo: { type: Boolean, required: true, default: true },
  createdAt: { type: Date, default: Date.now }
})
module.exports = restful.model('Usuario', UsuarioSchema)
