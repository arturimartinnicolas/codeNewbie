let totalAmount = 0;
const IVA = 1.21;
const bootsPrice = 10000;
const cardiganPrice = 20000;
const sweaterPrice = 30000;

const finalPurchase = (amount) => amount * IVA

let chooseProduct;
do {
  chooseProduct = prompt('\n 1 - BOOTS $10000\n 2 - CARDIGAN $20000\n 3 - SWEATER $30000');
  const chooseProductParsed = parseInt(chooseProduct)
  if (chooseProductParsed === 1) {
    totalAmount += bootsPrice
  }

  else if (chooseProductParsed === 2) {
    totalAmount += cardiganPrice
  }

  else if (chooseProductParsed === 3) {
    totalAmount += sweaterPrice
  }

} while (chooseProduct != 'END')

alert('The total amount of your purchase (Tax included) is: $ ' + finalPurchase(totalAmount))
console.log(totalAmount)



finalPurchase();