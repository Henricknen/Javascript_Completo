const objetos = document.getElementById("objetos");

const computador = {       // chaves '{}' define computador como objeto
    cpu: "i9",       // cpu é uma 'propriedade', 'i9' é o valor
    ram: "64gb",
    hd: "2tb",
    info: function() {      // método 'info'
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`HD: ${this.hd}`);
    }
}

computador["monitor"] = "22pol";        // adiçionando 'propriedade' e definindo o seu 'conteúdo'
computador.placaVideo = "rtx";      // adilionando propriedade 'placaVideo'

console.log(computador);
console.log(computador.cpu);        // chamando apenas a 'propriedade' cpu

const computadores = [      // 'computadores' é um array de objetos literais
    {       // objeto
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"
    },
    {       // objeto
        cpu: "i5",
        ram: "16gb",
        hd: "1tb"
    },
    {       // objeto
        cpu: "i7",
        ram: "32gb",
        hd: "2tb"
    }
]

computadores.forEach((c)=> {        // utilizando 'forEach' para percorrer o array 'computadores' e a cada iteração imprime um computador
    console.log(c);
    const div = document.createElement("div");      // criando uma 'div'
    div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.hd;       // inserindo na div criada as 'configurações' do computador
    div.setAttribute("class", "computador");
    objetos.appendChild(div);
});

// computador.info();      // chamando método 'info'

// console.log(computadores);

// objetos.innerHTML = JSON.stringify(computadores);        // 'JSON.stringify' converte o objeto computador em 'json'