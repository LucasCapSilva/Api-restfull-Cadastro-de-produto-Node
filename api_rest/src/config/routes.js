const express = require('express')
module.exports = function(server) {
  // API Routes
  const router = express.Router()
  server.use('/cad', router)
  // Produto Routes
  const produtoService = require('../api/service/produtoService')
  produtoService.register(router, '/produto')
  // Produto Routes
  const usuarioService = require('../api/service/usuarioService')
  usuarioService.register(router, '/usuario')
}