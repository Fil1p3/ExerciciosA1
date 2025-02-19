const readline = require("readline"); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a 1° nota: ", (n1) => {

  rl.question("Digite a 2° nota  ", (n2) => {
    
    const soma = parseInt(n1) + parseInt(n2);
    const media = parseInt(soma) /2;
    console.log(`Resultado: ${media}`);
    
    rl.close();
  });
});
