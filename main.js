const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i=0; i<botoes.length; i++) {
    
    botoes[i].onclick = function(){

        for (let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivol = new Date("2024-04-30T23:59:59");
const tempoObjetivol = new Date("2024-05-10T23:59:59");
const tempoObjetivol = new Date("2024-06-15T23:59:59");
const tempoObjetivol = new Date("2024-12-13T23:59:59");
let tempoAtual = new Date();

const tempos = [tempoObjetivo, tempoObjetivol2, tempoObjetivol3, tempoObjetivol4];


contadores[0].textContent = tempoObjetivo1 - tempoAtual;

function calculaTempo(tempoObjetivo){
    let tempoAtual= new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %=60;
    minutos %=60;
    horas %=24;

    return dias + "dias" + horas + "horas" + minutos + "munitos" + segundos + "segundos";
}

tempoObjetivo1 - tempoAtual

