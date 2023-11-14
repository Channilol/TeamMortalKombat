// selezionato i 4 div

const paginaWelcome = document.querySelector('#paginaWelcome')
const paginaDomande = document.querySelector('#paginaDomande')
const paginaRisultati = document.querySelector('#paginaRisultati')
const paginaFeedback = document.querySelector('#paginaFeedback')

/*********************** VEDERE ALLA FINE ******************/
// gestione logica del timer

const countdownElement = document.getElementById('countdown');
let timeLeft = 4; // Durata del timer in secondi
let timerInterval;

function startTimer() {
    updateTimer();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) { // se il timeLeft è arrivato a 0 fai qualcosa
            clearInterval(timerInterval);

            console.log('Tempo finito!');

            vaiAllaProssimaDomanda()

        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    countdownElement.textContent = `${minutes}:${seconds}`;
}


/*************************** VEDERE ALLA FINE ******************/



// stato iniziale

paginaDomande.style.display = 'none'
paginaRisultati.style.display = 'none'
paginaFeedback.style.display = 'none'

// gestione pagina corrente

let paginaCorrente = 0



const displayPaginaCorrente = () => {
    const pagine = [
        document.querySelector('#paginaWelcome'),
        document.querySelector('#paginaDomande'),
        document.querySelector('#paginaRisultati'),
        document.querySelector('#paginaFeedback'),
    ]

    pagine.forEach((pagina, i) => {
        if (paginaCorrente === i) {
            pagina.style.display = 'block'
        } else {
            pagina.style.display = 'none'
        }
    })
}

// logica paginaWelcome

const vaiAllaPaginaSuccessiva = (idBottone) => {
    const button = document.querySelector(idBottone);

    button.addEventListener('click', (e) => {
        e.preventDefault();

        paginaCorrente++

        if (paginaCorrente === 1) {
            startTimer()
        }

        if (paginaCorrente >= 4) {
            paginaCorrente = 0
        }

        displayPaginaCorrente()
    })
}

vaiAllaPaginaSuccessiva('#bottoneproceed')

// logica paginaDomande


const quiz = [{
    domanda: 'Come ti chiami?',
    opzioni: ['Nome', 'Cognome', 'Mortal', 'Kombat'],
    risposta_corretta: 'Kombat',
    punti: 1
}, {
    domanda: 'Ti piace Javascript?',
    opzioni: ['Si', 'No', 'Non lo so', 'Non mi esprimo'],
    risposta_corretta: 'Non lo so',
    punti: 1
}, {
    domanda: 'Ti è piaciuto il quiz?',
    opzioni: ['Si', 'No', 'Non lo so', 'Non mi esprimo'],
    risposta_corretta: 'No',
    punti: 1
}]

let punteggioTotale = 0
let indiceDomandaCorrente = 0


const mostraDomande = () => {

    const domandaCorrente = quiz[indiceDomandaCorrente]

    const h1 = document.querySelector("#paginaDomande > h1")

    const opzioni = document.querySelector("#opzioni")

    opzioni.innerHTML = ''

    h1.textContent = domandaCorrente.domanda

    domandaCorrente.opzioni.forEach((opzione, i) => {
        const button = document.createElement('button')
        button.textContent = opzione

        button.addEventListener('click', () => handlerRisposta(opzione))
        opzioni.appendChild(button)
    })

}

mostraDomande()

const vaiAllaProssimaDomanda = () => {
    clearInterval(timerInterval)
    timeLeft = 4
    if (indiceDomandaCorrente < quiz.length) {
        indiceDomandaCorrente++
        mostraDomande()
    }
    startTimer()
}

const handlerRisposta = (opzioneSelezionata) => {
    const domandaCorrente = quiz[indiceDomandaCorrente]

    if (opzioneSelezionata === domandaCorrente.risposta_corretta) {
        punteggioTotale += domandaCorrente.punti
        alert('risposta corretta')
    } else {
        alert('errato')
    }

    // vai alla prossima domanda
    indiceDomandaCorrente++

    // controllare se le domande sono finite
    if (indiceDomandaCorrente < quiz.length) {
        vaiAllaProssimaDomanda()
    } else {

        const percentualeRisposteCorrette = ((punteggioTotale * 100) / quiz.length).toFixed(1)
        const percentualeRisposteErrate = 100 - percentualeRisposteCorrette

        paginaCorrente++
        displayPaginaCorrente()

        console.log('Quiz completato')
        console.log('Punteggio totale: ', punteggioTotale)
        console.log('Risposte corrette: ', punteggioTotale + '/' + quiz.length)
        console.log('Percentuale risposte corrette: ', percentualeRisposteCorrette + '%')
        console.log('Percentuale risposte errate: ', percentualeRisposteErrate + '%')

        // inserimento dati paginaRisultati

        const spanCorrette = document.querySelector('#risposteCorrette span')
        spanCorrette.textContent = percentualeRisposteCorrette + '%'

        const pCorrette = document.querySelector('#risposteCorrette p')
        pCorrette.textContent = punteggioTotale + '/' + quiz.length + ' questions'

        const spanErrate = document.querySelector('#risposteErrate span')
        spanErrate.textContent = percentualeRisposteErrate + '%'

        const pErrate = document.querySelector('#risposteErrate p')
        pErrate.textContent = quiz.length - punteggioTotale + '/' + quiz.length + ' questions'

    }
}




vaiAllaPaginaSuccessiva('#bottonerateus')

