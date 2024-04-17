class Pessoa {
    nome:string;
    idade:number;
    profissao:string;
    
}
let pessoa = new Pessoa()
var entrada = require('prompt-sync')();
var n = entrada ('Insira seu nome: ' )
console.log('Bem vindo ' + n)

pessoa.nome = n

var i = entrada ('Insira sua idade: ')
console.log('Voce tem '+ i + ' Anos' )
pessoa.idade = i

var p = entrada ('Insira sua profissão: ')
console.log ('Sua profissão é '+ p)
pessoa.profissao = p
console.log (pessoa)