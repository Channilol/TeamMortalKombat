// selezionato i 4 div

const paginaWelcome = document.querySelector('#paginaWelcome')
const paginaDomande = document.querySelector('#paginaDomande')
const paginaRisultati = document.querySelector('#paginaRisultati')
const paginaFeedback = document.querySelector('#paginaFeedback')

// stato iniziale


paginaDomande.style.display = 'none'
paginaRisultati.style.display = 'none'
paginaFeedback.style.display = 'none'

// stato iniziale per donut chart/*  */

/* paginaWelcome.style.display = 'none'
paginaDomande.style.display = 'none'
paginaRisultati.style.display = 'block'
paginaFeedback.style.display = 'none' */

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
    const checkbox = document.getElementById('checkBoxObbligatoria')

    button.addEventListener('click', (e) => {
        e.preventDefault();

        if (checkbox.checked) {
            paginaCorrente++

            if (paginaCorrente >= 4) {
                paginaCorrente = 0
            }

            displayPaginaCorrente()
        }

        else {
            alert('Devi confermare prima')
        }




    })
}

vaiAllaPaginaSuccessiva('#bottoneProceed')

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


    if (quiz.length > 0 && indiceDomandaCorrente < quiz.length) {

        const domandaCorrente = quiz[indiceDomandaCorrente]

        const h1 = document.querySelector("#paginaDomande > h1")

        h1.textContent = domandaCorrente.domanda

        const opzioni = document.querySelector("#divContenitoreBottoniDomande") // div contenitore

        opzioni.innerHTML = ''


        domandaCorrente.opzioni.forEach((opzione) => {
            const button = document.createElement('button')
            button.textContent = opzione

            button.addEventListener('click', () => handlerRisposta(opzione));
            opzioni.appendChild(button)
        })
    } else {

        // vai alla pagina dei risultati dopo aver finito il quiz
        console.log('Domande finite')
        paginaDomande.style.display = 'none';
        paginaRisultati.style.display = 'block';

        const percentualeRisposteCorrette = ((punteggioTotale * 100) / quiz.length).toFixed(1)
        const percentualeRisposteErrate = 100 - percentualeRisposteCorrette

        console.log('Quiz completato')
        console.log('Punteggio totale: ', punteggioTotale)
        console.log('Risposte corrette: ', punteggioTotale + '/' + quiz.length)
        console.log('Percentuale risposte corrette: ', percentualeRisposteCorrette + '%')
        console.log('Percentuale risposte errate: ', percentualeRisposteErrate + '%')

        // inserimento dati paginaRisultati

        const spanCorrette = document.querySelector('#divCorrect span')
        spanCorrette.textContent = percentualeRisposteCorrette + '%'

        const pCorrette = document.querySelector('#divCorrect p')
        pCorrette.textContent = punteggioTotale + '/' + quiz.length + ' questions'

        const spanErrate = document.querySelector('#divWrong span')
        spanErrate.textContent = percentualeRisposteErrate + '%'

        const pErrate = document.querySelector('#divWrong p')
        pErrate.textContent = quiz.length - punteggioTotale + '/' + quiz.length + ' questions'

        updateDashArray(percentualeRisposteCorrette, percentualeRisposteErrate)
    }



}

mostraDomande()

const vaiAllaProssimaDomanda = () => {

    if (indiceDomandaCorrente < quiz.length) {
        indiceDomandaCorrente++
        mostraDomande()
    }


}

const handlerRisposta = (opzioneSelezionata) => {
    const domandaCorrente = quiz[indiceDomandaCorrente]

    if (opzioneSelezionata === domandaCorrente.risposta_corretta) {
        punteggioTotale += domandaCorrente.punti
        alert('risposta corretta')
    } else {
        alert('errato')
    }

    // controllare se le domande sono finite
    if (indiceDomandaCorrente < quiz.length) {
        vaiAllaProssimaDomanda()
    } else {

        return false

    }
}

// gestione grafico donut

function updateDashArray(percentage1, percentage2) {
    const circles = document.getElementsByClassName('donut-segment');

    Array.from(circles).forEach((circle) => {
        const totalLength = Math.PI * parseFloat(circle.r.baseVal.value) * 2;
        const dashValue1 = (percentage1 / 100) * totalLength;
        const dashValue2 = (percentage2 / 100) * totalLength;

        circle.style.strokeDasharray = `${dashValue1} ${dashValue2}`;
    });
}
// updateDashArray(50, 50); // esempio per inserire il 50% all'interno del grafico


// vai alla pagina feedback

const vaiAllaPaginaFeedback = () => {
    const button = document.querySelector('#bottoneRateUs')

    button.addEventListener('click', (e) => {
        e.preventDefault()
        paginaCorrente = 3
        displayPaginaCorrente()
        console.log('clicked')
    })
}

vaiAllaPaginaFeedback()

