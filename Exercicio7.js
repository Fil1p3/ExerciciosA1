const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quanto voce tem na sua carteria hoje em reais? ", (n) => {

  const dolar = parseFloat(n)/5.50

    console.log(`Com esse valor, voce pode comprar ${dolar} dolares`);
  
    rl.close();
  });

