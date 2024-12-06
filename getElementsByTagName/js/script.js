let colecaoHTML = document.getElementsByTagName("div")        // O método 'getElementsByTagName' retorna uma 'coleção' de todos os elementos <div>
console.log(colecaoHTML)

colecaoHTML = [...colecaoHTML]      // utiilizando operador spread '...' para 'transformar' a coleção novamente em um 'array'
console.log(colecaoHTML)