// Seleciona o botão de geração de número aleatório
const btnGerar = document.querySelector('#generate');

// Função que gera um número inteiro aleatório entre dois valores
function getRandomIntInclusive(min, max) {
    // Arredonda o valor mínimo para cima e o valor máximo para baixo
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    // Gera um número aleatório entre os valores arredondados
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// Adiciona um evento de clique ao botão de geração
btnGerar.addEventListener('click', ()=>{
    // Seleciona os valores de mínimo e máximo inseridos pelo usuário
    const min = document.querySelector('#min').value; 
    const max = document.querySelector('#max').value; 
    // Gera um número aleatório entre os valores mínimo e máximo
    const result = getRandomIntInclusive(min,max); 

    // Verifica se o resultado é um número válido
    if(isNaN(result)){
        // Se não for um número válido, exibe uma mensagem de erro
        result = 'Valor Inválido.'
    }

    // Seleciona o elemento que exibirá o resultado
    const divResult = document.querySelector('#result'); 
    // Exibe o resultado no elemento selecionado
    divResult.innerHTML = result;
})