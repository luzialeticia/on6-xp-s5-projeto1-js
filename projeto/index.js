console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const input = require('readline-sync')

//Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior).
console.log('--------------- Listando os produtos em ordem crescente de preço: ---------------');

const { produtos:products } = db

products.sort((a, b) => a.preco - b.preco)

console.table(products)

console.log('***********************************************************************************************************************');



//Variáveis que serão utilizadas
let idProduct;
let chosenProduct;
let quantity;
let hasDiscount;
let valueDiscount;
const shoppingCart = new Array()


//Classe
class Order {
    constructor(listProducts) {
        this.produtos = listProducts //array shopping cart
        this.desconto = 0
        this.data = new Date()
        this.totalItens = 0
        this.total = 0
    }
    
    SumTotalItens() {
        this.totalItens = this.produtos.reduce((accumulator, currentIten) => accumulator + currentIten.quantity)
    }
    
    // totalWithoutDiscount() {
    
    // }
    
    // totalWithDiscount() {
    
    // }
}



///Função das compras
const shopping = () => {

    //Receber Id via terminal
    idProduct = parseInt(input.question("Digite a ID do produto: "))
    chosenProduct = products.find(item => item.id === idProduct)

    //Validar o ID
    while(chosenProduct === undefined) {
        idProduct = parseInt(input.question('Produto não encontrado. Digite um ID correto: '))
        chosenProduct = products.find(item => item.id === idProduct)
    }
    console.log(`${chosenProduct.nome} adicionado ao carrinho.`);

    //Receber a quantidade de itens via terminal
    quantity = parseInt(input.question("Quantos itens deseja adicionar ao carrinho: "))

    //Validar a quantidade
    while(quantity <= 0) {
        quantity = parseInt(input.question("Quantidade inválida. Digite um valor maior que 0: "))
    }


     let totalThisItem = parseFloat((chosenProduct.preco*quantity).toFixed(2))

    
    //Adicionando itens no carrinho de compras
    const listIten = { name: chosenProduct.nome, quantity: quantity, price: totalThisItem }
    shoppingCart.push(listIten)


    //Continuar compras
    let wantContinue = input.question('Deseja continuar as compras? (S/N) ')

    while(wantContinue === 'S' || wantContinue === 's') {
        shopping()
        wantContinue = input.question('Deseja continuar as compras? (S/N) ')
    }

    if(wantContinue === 'N' || wantContinue === 'n') {
        console.table(shoppingCart)

        const totalShopping = shoppingCart.reduce((accumulator, preco) => accumulator + (preco.price), 0)
        console.log(`O valor total da sua compra é: R$ ${totalShopping} reais.`);
    }


    //Verifica se tem desconto
    hasDiscount = input.question('Você tem cupom de desconto? (S/N) ')

        //Caso sim, valida desconto
        switch (valueDiscount = parseFloat(input.question("Valor do desconto: "))) {
            case hasDiscount === 'S' || hasDiscount === 's':
                while(valueDiscount > 15 || valueDiscount <= 0) {
                    valueDiscount = parseFloat(input.question("Cupom inválido. Tente outro: "))
                }
                
                break;
        
            default:
                break;
        }

        //console.table(shoppingCart)
    return `Obrigada por comprar conosco. Volte sempre!`
}

shopping()



//Iniciando a classe
const order1 = new Order(shoppingCart)
console.table(order1.produtos)

// console.table(order1)

// order1.SumTotalItens()
// console.table(order1);