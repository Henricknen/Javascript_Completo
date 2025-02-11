const p_temp = document.getElementById("p_temp");
const p_nivel = document.getElementById("p_nivel");
const p_press = document.getElementById("p_press");

const obterDados =()=> {
  const endpoint = "https://4878ef71-cc65-4116-ba0d-e46d3631d6aa-00-3ray249juya4x.worf.replit.dev/";  // variável contém o 'endpoint' da API
  fetch(endpoint)  // 'fetch' faz o 'consumo' da API
    .then(res => res.json())  // método '.then' recebe o 'retorno' de fetch, e '.json()' converte a resposta para JSON
    .then(dados => {
      console.log(dados);  // exibe os dados no console
      p_temp.innerHTML = "Temperatura" + dados.temperatura
      p_nivel.innerHTML = "Nivel" + dados.nivel
      p_press.innerHTML = "Pressão" + dados.pressao
    })
}

let intervalo = setInterval(obterDados, 3000);