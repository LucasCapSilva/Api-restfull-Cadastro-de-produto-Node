const restful = require('node-restful')
const mongoose = restful.mongoose
const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  ativo: { type: Boolean, required: true, default: true },
  createdAt: { type: Date, default: Date.now }
})
module.exports = restful.model('Produto', ProdutoSchema)
