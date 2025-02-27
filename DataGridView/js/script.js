
const configdgv = {     // arquivo de configuração
    endpoint : "produtos.json",     // endopoint de 'consumo' da API    
}
const dgv =(configdgv)=> {
    fetch(configdgv.endpoint)     // 'consumindo' o endpoint
    .then(res=> res.json())
    .then(res=> {
        console.log(res);
    });
}
