    class Login {       // 'criando' classe Login
    static logado = false;      // propriedades
    static matlogado = null;
    static nomelogado = null;
    static acssologado = null;
    static estilocss = null;
    static callback_ok = null;
    static callback_fail = null;

    static config = {
        cor: null, //"048",
        img: null, //"./js.png"
        endpoint: null, //"https://ca1cd47c-02bd-400e-9fc7-ca269723e5f0-00-1omvjer3mt67a.kirk.replit.dev/";     // caminho do 'endpoint' que será consumido
    };
    
    static login =(callback_ok, callback_fail, config )=> {
        sessionStorag.setItem("logado", "false");
        sessionStorag.setItem("matlogado", "");
        sessionStorag.setItem("nomelogado", "");
        sessionStorag.setItem("acessologado", "");        
        this.config = config;
        this.callback_ok =()=> {callback_ok()};
        this.callback_fail =()=> {callback_fail()};
        this.estilocss =
        ".fundoLogin { display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(0,0,0,0.75); box-sizing: border-box; }" +
        ".baseLogin { display: flex; justify-content: center; align-items: stretch; width: 50%; box-sizing: inherit; }" +
        ".elementosLogin { display: flex; justify-content: center; align-items: flex-start; flex-direction: column; width: 50%; background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit; }" +
        ".logoLogin { display: flex; justify-content: center; align-items: center; width: 50%; background-color: #bbb; padding: 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit; }" +
        ".logoLogin img { width: 90%; box-sizing: inherit; }" +
        ".campoLogin { display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; box-sizing: inherit; margin-bottom: 10px; }" +
        ".campoLogin label { font-size: 18px; }" +
        ".campoLogin input { font-size: 18px; padding: 5px; background-color: #fff; border-radius: 5px; }" +
        ".botoesLogin { display: flex; justify-content: space-around; align-items: center; width: 100%; box-sizing: inherit; }" +
        `.botoesLogin button { cursor: pointer; background-color: #${this.config.cor}; color: #fff; border-radius: 5px; padding: 10px; width: 100px; box-sizing: inherit; }`;
        
        const styleEstilo = document.createElement("style");
        styleEstilo.setAttribute("id", "id_estiloLogin");
        styleEstilo.setAttribute("rel", "stylesheet");
        styleEstilo.setAttribute("type", "text/css");
        styleEstilo.innerHTML = this.estilocss;
        document.head.appendChild(styleEstilo);      // 'anexando' esse estilo ao html

        const fundoLogin = document.createElement("div");
        fundoLogin.setAttribute("id", "fundoLogin");
        fundoLogin.setAttribute("class", "fundoLogin");
        document.body.prepend(fundoLogin);
        
        const baseLogin = document.createElement("div");
        baseLogin.setAttribute("id", "baseLogin");
        baseLogin.setAttribute("class", "baseLogin");
        fundoLogin.appendChild(baseLogin);
        
        const elementosLogin = document.createElement("div");
        elementosLogin.setAttribute("id", "elementosLogin");
        elementosLogin.setAttribute("class", "elementosLogin");
        baseLogin.appendChild(elementosLogin);
        
        const campoLoginUsername = document.createElement("div");
        campoLoginUsername.setAttribute("id", "campoLoginUsername");
        campoLoginUsername.setAttribute("class", "campoLogin");
        elementosLogin.appendChild(campoLoginUsername);
        
        const labelUsername = document.createElement("label");
        labelUsername.innerHTML = "Username";
        campoLoginUsername.appendChild(labelUsername);
        
        const inputUsername = document.createElement("input");
        inputUsername.setAttribute("id", "inputUsername");
        inputUsername.setAttribute("type", "text");
        inputUsername.setAttribute("name", "f_username");
        campoLoginUsername.appendChild(inputUsername);
        
        const campoLoginSenha = document.createElement("div");
        campoLoginSenha.setAttribute("id", "campoLoginSenha");
        campoLoginSenha.setAttribute("class", "campoLogin");
        elementosLogin.appendChild(campoLoginSenha);
        
        const labelSenha = document.createElement("label");
        labelSenha.innerHTML = "Password";
        campoLoginSenha.appendChild(labelSenha);
        
        const inputSenha = document.createElement("input");
        inputSenha.setAttribute("id", "f_senha");
        inputSenha.setAttribute("type", "password");
        inputSenha.setAttribute("name", "f_senha");
        campoLoginSenha.appendChild(inputSenha);

        const botoesLogin = document.createElement("div");
        botoesLogin.setAttribute("class", "botoesLogin");
        elementosLogin.appendChild(botoesLogin);

        const btn_login  = document.createElement("button");
        btn_login.setAttribute("id", "btn_login");
        btn_login.innerHTML = "Login";
        btn_login.addEventListener("click", (evt) => {
            this.verificaLogin();       // chamando método verificarLogin                
        });

        botoesLogin.appendChild(btn_login);

        const btn_cancelar = document.createElement("button");
        btn_cancelar.setAttribute("id", "btn_cancelar");
        btn_cancelar.innerHTML = "Cancel";
        btn_cancelar.addEventListener("click", (evt)=> {        // adiçionando evento de 'click'
            sessionStorag.setItem("logado", "false");
            sessionStorag.setItem("matlogado", "");
            sessionStorag.setItem("nomelogado", "");
            sessionStorag.setItem("acessologado", "");
            this.fechar();      // chamando o 'método' fechar
        });
        botoesLogin.appendChild(btn_cancelar);

        const logoLogin = document.createElement("div");
        logoLogin.setAttribute("id", "logoLogin");
        logoLogin.setAttribute("class", "logoLogin");
        baseLogin.appendChild(logoLogin);

        const imgLogoLogin = document.createElement("img");
        imgLogoLogin.setAttribute("src", this.config.img);
        imgLogoLogin.setAttribute("title", "Tela_de_Login");
        logoLogin.appendChild(imgLogoLogin);

    }

    static verificaLogin =()=> {        // método principal de verificação de login
        const mat = document.querySelector("#inputUsername").value;
        let pas = document.querySelector("#f_senha").value;

        const endpoint = `${this.config.endpoint}/?matricula=${mat}&senha=${pas}`;        // 'construção' do endpoint
        fetch(endpoint)     // utilizando fetch para 'consumir' o endpoint
        .then(res=>res.json())
        .then(res=> {
            if(res) {login
                sessionStorag.setItem("logado", "true");
                sessionStorag.setItem("matlogado", mat);
                sessionStorag.setItem("nomelogado", res.nome);
                sessionStorag.setItem("acessologado", res.acesso);
                this.callback_ok();
                this.fechar();
            } else {
                sessionStorag.setItem("logado", "false");
                sessionStorag.setItem("matlogado", "");
                sessionStorag.setItem("nomelogado", "");
                sessionStorag.setItem("acessologado", "");
                this.callback_fail();
            }
        });
    
    }

    static fechar =() => {      // método que fecha a janela
        const fundoLogin = document.querySelector("#fundoLogin");
        fundoLogin.remove();
        const id_estiloLogin = document.querySelector("#id_estiloLogin");       // pegando elemento de id 'id_estiloLogin'
        id_estiloLogin.remove();
    }
}