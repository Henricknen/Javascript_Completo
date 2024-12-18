let colocacao = 1

switch(colocacao) {     // condição/colacação
    case 1:     // 'case' significa caso
        console.log("Primeiro Lugar")
        break

    case 2:
        console.log("Segundo Lugar")
        break

    case 3:
        console.log("Terçeiro Lugar")
        break

    case 4: case 5: case 6:
        console.log("Ganhou premio de partiçipação ")
        break

    default:        // esse é o 'padrão' se a condição não atender nenhum case
        console.log("Não subiu oa Podio")
        break
}