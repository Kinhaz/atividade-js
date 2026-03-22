let num = Number(prompt("Digite um número inteiro positivo:"));

let fatorial = 1;
let conta = "";

for (let i = num; i >= 1; i--) {
  fatorial *= i;
  conta += i;

  if (i > 1) {
    conta += " x ";
  }
}

console.log(num + "! = " + conta + " = " + fatorial);