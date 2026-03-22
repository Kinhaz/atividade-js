let usuariocorreto = "admin";
let senhacorreta = "1234";
let acessoliberado = false;

for(let i = 1; i <= 3; i++){
   let usuario = String(prompt("Digite o usuário:"));
   let senha = Number(prompt("Digite a senha:")); 
   
   if(usuario == usuariocorreto && senha == senhacorreta){
       console.log("Acesso Liberado!");
       acessoliberado = true;
       break;
   }else{
       console.log("Senha ou usuário incorreto!");
   }
}
if(!acessoliberado){
    console.log("Acesso Bloqueado!!");
}