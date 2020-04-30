
console.log('Gerenciador Financeiro\n');

var cliente ="Guilherme";

console.log('Cliente: '+cliente);

var valProcut=100;
var valDesconto=50;

var des = require("./Func_Desconto");

var finalValue= des(valProcut,valDesconto);

console.log(finalValue);