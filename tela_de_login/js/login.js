class Login {       // 'criando' classe Login
    static logado = false;      // propriedades
    static matlogado = null;
    static nomelogado = null;
    static acssologado = null;
    static endpoint = "https://ca1cd47c-02bd-400e-9fc7-ca269723e5f0-00-1omvjer3mt67a.kirk.replit.dev/";     // caminho do 'endpoint' que será consumido
    // https://ca1cd47c-02bd-400e-9fc7-ca269723e5f0-00-1omvjer3mt67a.kirk.replit.dev/?matricula=123&senha=321

    static login =(mat, pas)=> {        // método login responsável por fazer login reçebendo como parâmetro a matrícula 'mat' e senha 'pas'
        this.endpoint += `?matricula = ${mat}&senha = ${pas}`        // contrução do endpoint 'final'
        fetch(this.endpoint)       // utilizando 'fetch' para 'consumir' o endpoint
        .then(res => res.json())        // tranformando o resultado em 'json'
        .then(res=> {
             if(res) {      // se haver um retorno
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = res.nome;
                this.acessologado = res.acesso;
             }
        });
    }
}

export {Login};     // 'exportando' classe Login

 