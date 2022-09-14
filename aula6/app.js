'use strict'

import { showArray } from "./showArray.js   ";

const numbers = [23, 5, 9, 10, 100, 45];


//MAP - Percorre o array e retorna um array do mesmo tamanho modificado ou nao
//Sintaxe - array.map(callBack)
//Parametros do callBack
//1 - Elemento
//2 = Indice
//3 - Array

//Aplicando um desconto de 2 no array
const desconto2 = (number) => number - 2;
const numbersDesconto = numbers.map (desconto2);

// const numbersDeconto = numbers.map(numero => {
//     return numero -2;
// });


//Filtrar os elementos menores que 20
const menor20 = (valor) => valor <20
const valoresMenor20 = numbers.filter(menor20);



const soma = (a,b ) => a + b
const valorTotal = numbers.reduce(soma, 0)


showArray(numbers, 'main', 'todos os numeros');
showArray(numbersDesconto, 'main', 'Descontos');
showArray(valoresMenor20, 'main', 'Valores menores que 20');
showArray([valorTotal], 'main', 'Total de valores');    


//Adicionar 100 no array
const adicionar = (number) => number + 100;
const numerosMais100 = numbers.map(adicionar);

//Apenas numeros pares
// const pares = (valor) => valor % 2 == 0; 
// const numerosPares = numbers.filter(pares);

const numberPar = numbers.filter(numero => {
    if(numero % 2 == 0)
    return numero
})

//Numero descontado de quatro
const totalDescontoQuatro = (a, b) => (a + b);
const descontar = numbers.reduce(soma);

//Apenas numeros impares
// const impares = (valor) => valor % 2 > 0; 
// const numerosImpares = numbers.filter();
const numberImpar = numbers.filter(numero =>{
    if(numero % 2 > 0)
    return numero
})

//Para somar mais 21 em um tal numero
const addTwentyOne = (add) => add + 21;
//Chamando o addTwentyOne para adicionar 21 a todos os numeros impares
const imparsAdd = numberImpar.map(addTwentyOne);

showArray(numerosMais100, 'main', 'Adicionar 100');
showArray(numberPar, 'main', 'Apenas os numeros pares');
showArray([descontar - 4], 'main', 'Descontando 4 no final');
showArray(numberImpar, 'main', 'Apenas numeros impares');
showArray(imparsAdd, 'main', 'adicionando 21 aos impares'); 



