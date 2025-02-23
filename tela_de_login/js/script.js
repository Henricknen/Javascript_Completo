import { Login } from "./login.js";
import { Cxmsg } from "./cxmsg.js";

const callback_ok =()=> {

}

const callback_fail =()=> {
    const config = {
        cor: "#800",
        tipo: "ok",
        textos: null,
        comando_sn: null,
    }
    Cxmsg.mostrar(config, "Error", "Login não efetuado! Usuário o Senha incorretos ...");
}

Login.login(callback_ok, callback_fail);