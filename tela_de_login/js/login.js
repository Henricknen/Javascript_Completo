class Login {       // 'criando' classe Login
    static logado = false;      // propriedades
    static matlogado = null;
    static nomelogado = null;
    static acssologado = null;
    static endpoint = "https://loginv1.api_login.repl.co/";     // caminho do 'endpoint' que será consumido

    static login =(mat, pas)=> {        // método login responsável por fazer login reçebendo como parâmetro a matrícula 'mat' e senha 'pas'
        this.endpoint += `?matricula = ${mat}&senha = ${pas}`        // contrução do endpoint 'final'
        fetch(this.endpoint)       // utilizando 'fetch' para 'consumir' o endpoint
        .then(res => res.json())        // tranformando o resultado em 'json'
        .then(res=> {
             if(res) {
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = res.nome;
                this.acessologado = res.acesso;
             }
        });
    }
}

export {Login};     // 'exportando' classe Login

 