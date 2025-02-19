const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o 1° Numero: ", (n1) => {

  rl.question("Digite o 2° numero ", (n2) => {
    
    const n3 = parseInt(n1) + parseInt(n2);
    console.log(`Resultado: ${n3}`);
    
    rl.close(); 
  });
});
