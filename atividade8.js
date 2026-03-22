let positivos = 0;

for(let i = 1; i <= 5; i++){
    let num = Number(prompt("Digite o " + i + "°" + " número:"));
    
if(num > 0){
    positivos++
}
}
console.log("Quantidade de núemros positivos:" + positivos);