let nota = Number(prompt("Digite sua primeira nota:"));
let nota2 = Number(prompt("Digite sua segunda nota:"));
let nota3 = Number(prompt("Digite sua terceira nota:"));

let media = (nota + nota2 + nota3) / 3;

if(media >= 7){
    console.log("Você foi aprovado!");
}else if(media >= 5 && media < 7){
    console.log("Você está na recuperação!");
}else if(media < 5){
    console.log("Você foi reprovado!");
}