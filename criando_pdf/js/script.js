const btn_imp = document.getElementById("btn_imp");

btn_imp.addEventListener("click", (evt)=> {
    const conteudo = document.getElementById("tabela");

    let estilo = "<style>";     // criando um estilo para a página da aba de impressão
    estilo += "table {width: 100%;font: 25px Calibri;}";
    estilo += "table, th, td {border: solid 2px #888; border-collapse: collapse;}";
    estilo += "padding: 4px 8px;text-align: center;";
    estilo += "</style>";

    const win = window.open('', '', 'height=700,width=700');        // 'window.open' cria 'nova janela'

    win.document.write('<html><head>');     // utilizando 'write' para escrever dentro da nova janela
    win.document.write('<title>Javascript</title>');
    win.document.write(estilo);
    win.document.write('</head><body>');
    win.document.write(conteudo.innerHTML);
    win.document.write('</body></html>');

    win.print();
});