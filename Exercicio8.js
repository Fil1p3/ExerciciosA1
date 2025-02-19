const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a altura: ", (n1) => {

  rl.question("Digite a largura: ", (n2) => {
    
    const area = parseInt(n1)* parseInt(n2);
    const litros = parseInt(area)/2;
   
    console.log(`Area a ser pintada: ${area}`);
    console.log(`Ira precisar de  ${litros}L de tinta`);
    
    rl.close();
  });
});
