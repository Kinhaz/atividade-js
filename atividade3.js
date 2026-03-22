let num = Number(prompt("Insira um número:"));
let num2 = Number(prompt("Insira outro número:"));

let escolha = prompt("Escolha a forma de operação(+, -, *, /):"); 

if(escolha == "+"){
    console.log(num + num2);
}else if(escolha == "-"){
    console.log(num - num2);
}else if(escolha == "*"){
    console.log(num * num2);
}else if(escolha == "/"){
    console.log(num / num2);
}