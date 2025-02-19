const readline = require("readline"); 


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu salario atual: ", (n1) => {
    const aumento = parseInt(n1)*0.15;
   const novoSalario = parseFloat(aumento)+parseFloat(n1)
    console.log(`Seu salario sera de: R$${novoSalario}`);
    rl.close(); 
  });

