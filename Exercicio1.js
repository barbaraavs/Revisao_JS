//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
//array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

function soma (...array){
    let soma = 0
    for (let i in array){
        soma += array[i]
    }
    return soma
} console.log (soma(...array))

//2. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]

fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then((resp) => {
    return resp.json()
})

.then((data) => {
    let retorno = data.meals[0];
    let id = retorno.idMeal
    let nome = retorno.strMeal
    let regiao = retorno.strArea
    let ingredientes = [retorno.strIngredient1, retorno.strIngredient2, retorno.strIngredient3, retorno.strIngredient4, retorno.strIngredient5, retorno.strIngredient6, retorno.strIngredient7, retorno.strIngredient8, retorno.strIngredient9]
    let instrucoes = retorno.strInstructions

    console.log(id, nome, regiao, ingredientes, instrucoes)
})

.catch(error => {
    console.log(error.mensage)
})