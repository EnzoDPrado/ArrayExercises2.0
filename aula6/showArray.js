'use strict'

const showArray = (array,element,title = 'array') => {
    //Selecionando um elemento DOM
    const container = document.querySelector(element); 
    //Criando um novo element(DIV)
    const div = document.createElement('div');
    div.classList.add('numbers-container');

    //Populando a DIV nova com os elementos do array

    div.innerHTML = `
        <h2>${title}</h2>
        <div class ="numbers-item">
            ${array.join('</div><div class="numbers-item">')}
        </div>

    `   
//Inserindo o novo elemento (DIV) no DOM
container.appendChild(div);
}

export{
    showArray
}