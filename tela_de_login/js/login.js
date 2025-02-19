class Login {       // 'criando' classe Login
    static logado = false;      // propriedades
    static matlogado = null;
    static nomelogado = null;
    static acssologado = null;
    static estilocss = null;    
    static endpoint = "https://ca1cd47c-02bd-400e-9fc7-ca269723e5f0-00-1omvjer3mt67a.kirk.replit.dev/";     // caminho do 'endpoint' que será consumido
    // https://ca1cd47c-02bd-400e-9fc7-ca269723e5f0-00-1omvjer3mt67a.kirk.replit.dev/?matricula=123&senha=321

    static login =(mat, pas)=> {        // método login responsável por fazer login reçebendo como parâmetro a matrícula 'mat' e senha 'pas'        
        this.endpoint += `?matricula = ${mat}&senha = ${pas}`        // contrução do endpoint 'final'
        this.estilocss =
        ".fundoLogin { display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(0,0,0,0.75); box-sizing: border-box; }" +        
        ".baseLogin { display: flex; justify-content: center; align-items: stretch; width: 50%; box-sizing: inherit; }" +        
        ".elementosLogin { display: flex; justify-content: center; align-items: flex-start; flex-direction: column; width: 50%; background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit; }" +
        ".logoLogin { display: flex; justify-content: center; align-items: center; width: 50%; background-color: #bbb; padding: 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit; }" +
        ".logoLogin img { width: 90%; box-sizing: inherit; }" +        // Corrigido o estilo CSS para a imagem
        ".campoLogin { display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; box-sizing: inherit; margin-bottom: 10px; }" +
        ".campoLogin label { font-size: 18px; }" +        
        ".campoLogin input { font-size: 18px; padding: 5px; background-color: #fff; border-radius: 5px; }" +
        ".botoesLogin { display: flex; justify-content: space-around; align-items: center; width: 100%; box-sizing: inherit; }" +
        ".botoesLogin button { cursor: pointer; background-color: #048; color: #fff; border-radius: 5px; padding: 10px; width: 100px; box-sizing: inherit; }";        
        
        const styleEstilo = document.createElement("style");
        styleEstilo.setAttribute("id", "id_estiloLogin");
        styleEstilo.setAttribute("rel", "stylesheet");
        styleEstilo.setAttribute("type", "text/css");
        styleEstilo.innerHTML = Login.estilocss;
        document.head.appendChild(linkEstilo);

        // fetch(this.endpoint)       // utilizando 'fetch' para 'consumir' o endpoint
        // .then(res => res.json())        // tranformando o resultado em 'json'
        // .then(res=> {
        //      if(res) {      // se haver um retorno
        //         this.logado = true;
        //         this.matlogado = mat;
        //         this.nomelogado = res.nome;
        //         this.acessologado = res.acesso;
        //      }
        // });
    }
}

export {Login};     // 'exportando' classe Login

 