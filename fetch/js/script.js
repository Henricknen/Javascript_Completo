const endpoint = "https://4878ef71-cc65-4116-ba0d-e46d3631d6aa-00-3ray249juya4x.worf.replit.dev/";  // variável contém o 'endpoint' da API
fetch(endpoint)  // 'fetch' faz o 'consumo' da API
  .then(res => res.json())  // método '.then' recebe o 'retorno' de fetch, e '.json()' converte a resposta para JSON
  .then(dados => {
    console.log(dados);  // exibe os dados no console
  })
  .catch(error => {
    console.error("Erro ao consumir a API:", error);  // tratamento de erro
  });
