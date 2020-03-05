const Produto = require('../model/produto')
Produto.methods(['get', 'post', 'put', 'delete'])
Produto.updateOptions({new: true, runValidators: true})
module.exports = Produto
