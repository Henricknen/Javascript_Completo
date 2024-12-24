let el = document.getElementsByTagName("div");      // pegando todas tag de nome 'div'
el = [...el]        // utilizando spread '...' que espalha os elementos da variável 'el'
el.map((e, i)=> {       // arrow function 'map' reçebendo os elementos e o indiçe
    e.innerHTML = "'[HTML, CSS, JavaScript, PHP, VueJs, ReactJs, Laravel, SQL]";        // alterando os elementos div
    console.log(e.innerHTML);       // 'innerHTML' retorna o que tem em cada div
});