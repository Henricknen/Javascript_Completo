// import { Login } from "./login.js";  
import { Cxmsg } from "./cxmsg.js";

const callback_ok =()=> { }

const callback_fail =()=> {
    const config = {
        cor: "#800",
        tipo: "ok",
        textos: null,
        comando_sn: ()=> {},
    }
    Cxmsg.mostrar(config, "Error", "Login não efetuado! Usuário o Senha incorretos ...");
}

const configlogin = {
    cor: "048",
    img: "js.png",
    endpoint: "https://ca1cd47c-02bd-400e-9fc7-ca269723e5f0-00-1omvjer3mt67a.kirk.replit.dev",
}

Login.login(callback_ok, callback_fail, configlogin);