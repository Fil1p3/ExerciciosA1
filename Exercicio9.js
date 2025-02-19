const readline = require("readline"); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Digite a quantidade de dias trabalhados: ", (n1) => { 
 
    const salario = parseInt(n1)*200;
   
    console.log(`Seu salario sera de: R$${salario}`);
 
    
    rl.close(); 
  });

