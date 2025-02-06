let a, b, c, d;     // variáveis

[a, b, c, d] = [10, 20, 30, 40];        // associando as 'variáveis' aos 'elementos' 10, 20, 30 e 40 do arrray

console.log(a);     // imprimindo no console os valores das variáveis
console.log(b);
console.log(c);
console.log(d);

// --------------------------------

let e, f, g, h;

({e, f, g, h} = {e: "verde", f: "vermelho", g: "azul", h: "branco"});       // variáveis sendo associadas aos valores correspondentes dentro do objeto '{}'

console.log(e);
console.log(f);
console.log(g);
console.log(h);

// --------------------------------

let numeros = [50, 60, 70, 80];
let[i, j, l, m] = numeros;      // variáveis reçebem valores de cada indice do 'array' numeros

console.log(i);
console.log(j);
console.log(l);
console.log(m);