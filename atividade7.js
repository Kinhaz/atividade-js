let soma = 0;

while(true){
    let num = Number(prompt("Digite um número:"));
    
    if(num == 0){
        break;
    }
    soma += num;
}
console.log("Soma total:" + soma);
