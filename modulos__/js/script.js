import { formacoes as f } from "../md/formacao.js";       // renomeiando formação para 'f' utilizando 'as' é o 'alias'
import * as minhas_formacoes from "../md/formacao.js";     // renomeando todo modulo para 'minhas_formacoes'

console.log(f);
console.log(minhas_formacoes.getForm(0));       // imprime a formação da posição 0 ou seja 'Pós Desenvolvimento Web'
console.log(minhas_formacoes.default());        // imprimindo função 'default' utilizando modulo renomeado