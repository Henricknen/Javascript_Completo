const teclasNum = [...document.querySelectorAll(".num")];        // Pegando todas as teclas que têm a classe 'num'
const teclasOp = [...document.querySelectorAll(".op")];          // Pegando todas as teclas de operação
const teclaRes = document.querySelector(".res");                 // Apenas uma tecla de resultado, então usamos querySelector
const display = document.querySelector(".display");              // Display também é um único elemento
const ton = document.getElementById("ton");
const tlimpar = document.getElementById("tlimpar");

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {     // Adicionando evento de click
        display.textContent += evt.target.textContent;  // Usamos textContent para adicionar o número ao display
    });
});

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        display.textContent += evt.target.textContent;  // Adiciona o operador no display
    });
});

tlimpar.addEventListener("click", () => {
    display.textContent = "0";  // Reseta o display para "0" ao clicar no botão de limpar
});

// Adicionar funcionalidade para o botão "=" (igual) que realiza o cálculo
teclaRes.addEventListener("click", () => {
    try {
        // Avalia a expressão no display e exibe o resultado
        display.textContent = eval(display.textContent.replace(",", "."));  // Substitui a vírgula por ponto para a operação correta
    } catch (e) {
        display.textContent = "Erro";  // Caso ocorra um erro (por exemplo, divisão por zero), exibe "Erro"
    }
});
