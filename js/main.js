let totalAmount = 0;
const bootsPrice = 20000;
const cardiganPrice = 15000;
const sweaterPrice = 30000;

const finalPurchase = (finalAmount) =>   totalAmount += finalAmount 

let chooseProduct;
do  {  chooseProduct = prompt('\n 1 - BOOTS $20000\n 2 - CARDIGAN $15000\n 3 - SWEATER $30000');
  const chooseProductParsed = parseInt (chooseProduct)
  if (chooseProductParsed) {
      totalAmount += bootsPrice
  }
  
  else if (chooseProductParsed) {
    totalAmount += cardiganPrice
  }

  else if (chooseProductParsed) {
    totalAmount += sweaterPrice
  }

  } while (chooseProduct != 'END')

  alert('The total amount of your purchase is: $ ' + finalPurchase(totalAmount) )
console.log(totalAmount)



finalPurchase();