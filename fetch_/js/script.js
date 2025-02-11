const p_temp = document.getElementById("p_temp");
const p_nivel = document.getElementById("p_nivel");
const p_press = document.getElementById("p_press");

const obterDados = () => {
  const endpoint = "https://22515cd9-647a-4e29-9f85-3af8c874350e-00-25oiach8qy7mm.janeway.replit.dev/"; // URL da API
  
  fetch(endpoint)
    .then(res => {
      if (!res.ok) {
        throw new Error("Falha ao buscar dados da API");
      }
      return res.json();  // converte a resposta para JSON
    })
    .then(dados => {
      console.log(dados);  // exibe os dados no console

      p_temp.innerHTML = "Temperatura: " + dados.temperatura + " °C";   // atualiza os elementos HTML com os dados
      p_nivel.innerHTML = "Nível: " + dados.nivel + " %";
      p_press.innerHTML = "Pressão: " + dados.pressao + " hPa";
    })
    .catch(error => {
      console.error("Erro ao consumir API:", error);
      p_temp.innerHTML = "Erro ao carregar dados";
      p_nivel.innerHTML = "Erro ao carregar dados";
      p_press.innerHTML = "Erro ao carregar dados";
    });
};

let intervalo = setInterval(obterDados, 3000);    // chama a função a cada 3 segundos