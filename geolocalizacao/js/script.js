const long = document.getElementById("long");       // pegando elemento com base em seu id
const lati = document.getElementById("lati");

if(navigator.geolocation) {     // verificando se objeto 'geolocation' está ativado
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao);
} else {
    console.log("Geolocalização não suportada...");
}

function mostrarLocalizacao(pos) {      // função que mostra a 'posição'
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`;
    long.innerHTML = `Longitude: ${pos.coords.longitude}`;
}

function erroLocalizacao() {
    console.log("Erro ao obter a localização...");
}