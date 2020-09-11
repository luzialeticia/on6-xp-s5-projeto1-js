console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')

const { produtos } = db

produtos.sort((a, b) => a.preco - b.preco)

console.table(produtos);