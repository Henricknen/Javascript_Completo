import f from "../md/formacao.js";       // a classe 'Form' por está sendo exportada como default não é neçessario atribuir o nome da mesma na importação

f.addFormacao("Ciência da Computação");     // adicionando nova formação
console.log(f.getTodasFormacoes());     // imprimindo a função 'getTodasFormacoes'
