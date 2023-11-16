
const paginaWelcome = document.querySelector('#paginaWelcome')
const paginaDomande = document.querySelector('#paginaDomande')
const paginaRisultati = document.querySelector('#paginaRisultati')
const paginaFeedback = document.querySelector('#paginaFeedback')

// stato iniziale

paginaDomande.style.display = 'none'
paginaRisultati.style.display = 'none'
paginaFeedback.style.display = 'none'

const difficulty = 'hard'

async function getQuestions(difficulty) {

    const response = await fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=${difficulty}`);
    const domande = await response.json();
    console.log(domande.results);
}


const domande = getQuestions(difficulty)

const indiceDomande = 0

const indiceRisposte = []

let indiceDomandaCorrente = 0

let punteggioTotale = 0

// Status iniziale

// TIMER

let secondi = 60
let timeoutId

let numeriSecondi = document.querySelector('.testoSecondi')
let donutTimer = document.querySelector('.animationTimer');

const countdown = () => {
    if (secondi > 0) {
        numeriSecondi.innerHTML = secondi
        secondi--
        timeoutId = setTimeout(countdown, 1000)
    } else {
        clickRisposta()
    }
}

const resetCountdown = () => {
    clearTimeout(timeoutId)
    secondi = 60
    countdown()

}

const resetTimerSVG = () => {
    // Rimuovi e riaggiungi l'elemento SVG per far ripartire l'animazione
    const parent = donutTimer.parentNode;
    const nextDonutTimer = donutTimer.cloneNode(true);
    parent.replaceChild(nextDonutTimer, donutTimer);
    donutTimer = nextDonutTimer;
}


// Script pagina 1

paginaDomande.style.display = 'none'
paginaRisultati.style.display = 'none'
paginaFeedback.style.display = 'none'

document.addEventListener('DOMContentLoaded', () => {
    const bottoneProceed = document.querySelector('#bottoneProceed')
    const checkBoxObbligatoria = document.querySelector('#checkBoxObbligatoria')

    checkBoxObbligatoria.addEventListener('change', () => {
        bottoneProceed.disabled = !checkBoxObbligatoria.checked
    })

    bottoneProceed.addEventListener('click', (event) => {
        if (checkBoxObbligatoria.checked) {
            displayDue()
            event.preventDefault();
        }
        else {
            alert('Before proceeding to the test check all boxes')
        }
    })

})


// Script pagina 2

// Funzione generazione numeri random 0-3

const rispostaRandomica = () => {
    arrayNumeriEstratti = []
    while (arrayNumeriEstratti.length < domande[indiceDomandaCorrente].risposte.length) {
        numeroGenerato = Math.floor(Math.random() * domande[indiceDomandaCorrente].risposte.length);

        if (!arrayNumeriEstratti.includes(numeroGenerato)) {
            arrayNumeriEstratti.push(numeroGenerato);
        }
    }
    return arrayNumeriEstratti
}

const divRisposte = document.querySelector('#divContenitoreBottoniDomande')



const displayDue = (e) => {
    paginaWelcome.style.display = 'none';
    paginaDomande.style.display = 'block';
    creazioneDomanda()
}