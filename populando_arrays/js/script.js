let valores =[1,2];     // array valores
const op = [        // array 'op' de operações
    (val)=> {       // função anônima fará a soma dos valores do array
        let res = 0;
        for(v of val) {
            res += v
        }
        return res
    },
    (val)=> {       // função 'multiplica'
        let res = 0;
        for(v of val) {
            res *= v
        }
        return res
    },
    (val)=> {       // função imprime os valores 
        for(v of val) {
            console.log(v);
        }
    }
]

console.log(op[0](valores));       // chamando array 'op' e função que será executada indicada pelo indiçe '[0]' e passando os valores do array 'valores'