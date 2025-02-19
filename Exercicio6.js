const readline = require("readline"); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Digite um Numero: ", (n) => {

  const sucessor = parseInt(n)+1
  const antecessor = parseInt(n)-1
  
    console.log(`Seu sucessor é: ${sucessor}`);
    console.log(`Seu antecessor é: ${antecessor}`);
    
    rl.close(); 
  });

