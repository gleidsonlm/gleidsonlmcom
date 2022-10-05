// https://app.rocketseat.com.br/discover/course/o-guia-estelar-de-java-script/funcoes/functions

/* let a = 0;
let b = "0";
let c = "zero";

const compara = a === Number(b) ? "verdadeiro" : "falso" ;

console.log(compara) */

const checarIdadeVotoObrigatorio = function(age){
    let Obrigatorio = (age <= 65) && (age >= 18) ? "obrigatório" : "facultativo";
    console.log(`Com ${age} anos, o voto é ${Obrigatorio}`)
}
checarIdadeVotoObrigatorio(16)