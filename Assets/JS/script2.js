/*  VERSIONE CON FETCH  */

// stato iniziale

const paginaWelcome = document.querySelector('#paginaWelcome')
const divflaggaLaCheckbox = document.querySelector('#divflaggaLaCheckbox')
const paginaDifficolta = document.querySelector('#paginaDifficolta')
const paginaDomande = document.querySelector('#paginaDomande')
const paginaRisultati = document.querySelector('#paginaRisultati')
const paginaFeedback = document.querySelector('#paginaFeedback')
const titoloFeedback = document.querySelector('#titoloFeedback')
const esitoFeedback = document.querySelector('#esitoFeedback')
const stellePiuFeedback = document.querySelector('#stellePiuFeedback')

divflaggaLaCheckbox.style.display = 'none'
paginaDifficolta.style.display = 'none'
paginaDomande.style.display = 'none'
paginaRisultati.style.display = 'none'
paginaFeedback.style.display = 'none'
titoloFeedback.style.display = 'none'
esitoFeedback.style.display = 'none'
stellePiuFeedback.style.display = 'none'

// gestione timer

let secondi = 60
let timeoutId

let numeriSecondi = document.querySelector('.testoSecondi')
let donutTimer = document.querySelector('.animationTimer');

const countdown = (domande) => {
    if (secondi > 0) {
        numeriSecondi.innerHTML = secondi;
        secondi--;
        timeoutId = setTimeout(() => countdown(domande), 1000);
    } else {
        console.log('Tempo scaduto');
        if (indiceDomandaCorrente < domande.length) {
            indiceDomandaCorrente++;
            if (indiceDomandaCorrente < domande.length) {
                resetCountdown(domande);
                divRisposte.innerHTML = '';
                creazioneDomanda(domande);
            } else {
                console.log('Domande finite');
                calcoloRisultati();
                paginaDomande.style.display = 'none';
                paginaRisultati.style.display = 'block';
            }
        }
    }
};

const resetCountdown = (domande) => {

    clearTimeout(timeoutId)
    secondi = 60
    countdown(domande)
}

const resetTimerSVG = () => {
    // Rimuovi e riaggiungi l'elemento SVG per far ripartire l'animazione
    const parent = donutTimer.parentNode;
    const nextDonutTimer = donutTimer.cloneNode(true);
    parent.replaceChild(nextDonutTimer, donutTimer);
    donutTimer = nextDonutTimer;
}

///////
let domande = [] // variabile globale

let difficulty

const getQuestions = async (difficulty, amount) => {

    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}`);
        const data = await response.json();
        domande = data.results
        return domande

    } catch (err) {
        console.log(err)
    }
};

// gestione difficoltà

const impostaDifficulty = (level) => {
    difficulty = level
    displayTre()
    return difficulty
}

const sceltaButtonDifficulty = () => {
    const bottoneFacile = document.querySelector('#bottoneFacile');
    const bottoneMedia = document.querySelector('#bottoneMedia');
    const bottoneDifficile = document.querySelector('#bottoneDifficile');

    bottoneFacile.addEventListener('click', () => {
        impostaDifficulty('easy')
    })

    bottoneMedia.addEventListener('click', () => {
        impostaDifficulty('medium')
    })

    bottoneDifficile.addEventListener('click', () => {
        impostaDifficulty('hard')
    })
}

sceltaButtonDifficulty()

let punteggioTotale = 0
let indiceDomandaCorrente = 0

const divRisposte = document.querySelector('#divContenitoreBottoniDomande')

const creazioneDomanda = (domandePrese) => {

    resetCountdown(domandePrese)
    resetTimerSVG()

    console.log(domandePrese)

    const h1 = document.querySelector('#titoloDomandaHtml')
    const numeroDomandaCorrente = document.querySelector('#numeroDomandaCorrente')
    numeroDomandaCorrente.innerText = indiceDomandaCorrente + 1

    h1.innerText = domandePrese[indiceDomandaCorrente].question
    const risposte = []

    if (domandePrese[indiceDomandaCorrente].type === 'multiple') {

        const rispostaCorretta = domandePrese[indiceDomandaCorrente].correct_answer
        risposte.push(rispostaCorretta)

        for (let j = 0; j < domandePrese[indiceDomandaCorrente].incorrect_answers.length; j++) {
            risposte.push(domandePrese[indiceDomandaCorrente].incorrect_answers[j])
        }

        const newRisposteMultiple = mischiaArrayRisposte(risposte)

        for (let i = 0; i < newRisposteMultiple.length; i++) {
            const risposta = document.createElement('button')
            const testoRisposta = newRisposteMultiple[i]
            risposta.textContent = testoRisposta
            if (testoRisposta === domandePrese[indiceDomandaCorrente].correct_answer) {
                risposta.classList.add('bottoneRispostaCorretta')
              } else {
                risposta.classList.add('bottoneRispostaSbagliata')
              }
            divRisposte.appendChild(risposta)
            risposta.addEventListener('click', () => { clickRisposta(testoRisposta, domandePrese) })
        }

    } else {
        const rispostaCorretta = domandePrese[indiceDomandaCorrente].correct_answer
        risposte.push(rispostaCorretta)

        for (let j = 0; j < domandePrese[indiceDomandaCorrente].incorrect_answers.length; j++) {
            risposte.push(domandePrese[indiceDomandaCorrente].incorrect_answers[j])
        }

        const newRisposteBool = mischiaArrayRisposte(risposte)

        for (let i = 0; i < newRisposteBool.length; i++) {
            const risposta = document.createElement('button')
            const testoRisposta = newRisposteBool[i]
            risposta.textContent = testoRisposta
            if (testoRisposta === domandePrese[indiceDomandaCorrente].correct_answer) {
                risposta.classList.add('bottoneRispostaCorretta')
              } else {
                risposta.classList.add('bottoneRispostaSbagliata')
              }
            divRisposte.appendChild(risposta)
            risposta.addEventListener('click', () => { clickRisposta(testoRisposta, domandePrese) })
        }

    }

    let totaleDomandeScelte = document.querySelector('#totaleDomandeScelte')
    totaleDomandeScelte.innerText = `/${numeroDomande}`

    console.log(risposte)

}

// generazione risposte in maniera random

const mischiaArrayRisposte = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

// click risposta + domanda successiva

const clickRisposta = (risposta, domande) => {
    if (indiceDomandaCorrente < domande.length - 1) {
        if (risposta === domande[indiceDomandaCorrente].correct_answer) {
            console.log('Risposta corretta');
            indiceDomandaCorrente++;
            punteggioTotale++;
        } else {
            console.log('Risposta errata');
            indiceDomandaCorrente++;
        }

        divRisposte.innerHTML = '';
        creazioneDomanda(domande);
    } else {
        if (risposta === domande[indiceDomandaCorrente].correct_answer) {
            console.log('Risposta corretta');
            punteggioTotale++;
        } else {
            console.log('Risposta errata');
        }

        console.log('Domande finite');
        clearTimeout(timeoutId)
        calcoloRisultati();
        paginaDomande.style.display = 'none';
        paginaRisultati.style.display = 'block';
    }
};

// vai a pagina due (scelta difficolta)

document.addEventListener('DOMContentLoaded', () => {
    const bottoneProceed = document.querySelector('#bottoneProceed')
    const checkBoxObbligatoria = document.querySelector('#checkBoxObbligatoria')
    const flaggaLaCheckbox = document.querySelector('#flaggaLaCheckbox')
  
    checkBoxObbligatoria.addEventListener('change', () => {
      bottoneProceed.disabled = !checkBoxObbligatoria.checked
      if (!checkBoxObbligatoria.checked) {
        divflaggaLaCheckbox.style.display = 'block'
        flaggaLaCheckbox.innerText = 'You must flag the checkbox to start the exam!'
      } else {
        divflaggaLaCheckbox.style.display = 'none'
      }
    })
  
    bottoneProceed.addEventListener('click', (event) => {
      if (checkBoxObbligatoria.checked) {
        displayDue()
        event.preventDefault();
      }
      else {
        divflaggaLaCheckbox.style.display = 'block'
        flaggaLaCheckbox.innerText = 'You must flag the checkbox to start the exam!'
      }
    })
  
  })

const displayDue = (e) => {
    paginaWelcome.style.display = 'none';
    paginaDifficolta.style.display = 'block';
}

// vai a pagina tre (pagina domande)

let numeroDomande = 1

// gestione numero domande scelte

const numeroDomandeScelto = () => {
    const inputNumero = document.querySelector('#numeroDomandeScelte')
    inputNumero.addEventListener('input', () => {
        numeroDomande = parseInt(inputNumero.value, 10)
        if (isNaN(numeroDomande) || numeroDomande < 1) {
          numeroDomande = 1;
        } else if (numeroDomande > 51) {
          numeroDomande = 50;
        }
        inputNumero.value = numeroDomande;
    })

}

numeroDomandeScelto()

const displayTre = (e) => {
    paginaDifficolta.style.display = 'none';
    paginaDomande.style.display = 'block';

    getQuestions(difficulty, numeroDomande).then((domandeFetchate) => {
        creazioneDomanda(domandeFetchate)
    }).catch(() => {
        console.log('Errore fetch domande')
    })
}

// calcolo risultati

const calcoloRisultati = () => {
    //prendiamo gli elementi html
    let percentualeRisposteCorrette = document.querySelector('#percentualeCorrette')
    let percentualeRisposteSbagliate = document.querySelector('#percentualeSbagliate')
    let numeroRisposteCorrette = document.querySelector('#numeroRisposteCorrette')
    let numeroRisposteSbagliate = document.querySelector('#numeroRisposteSbagliate')

    //calcoli percentuali e interi
    let risposteSbagliate = domande.length - punteggioTotale
    let numeroPercentualeRisposteCorrette = (punteggioTotale * 100) / domande.length  // x : 400 = numeroPercentualeRisposteCorrette : 100
    let numeroPercentualeRisposteSbagliate = 100 - numeroPercentualeRisposteCorrette

    //assegnazione calcoli agli elementi html
    percentualeRisposteCorrette.innerText = (numeroPercentualeRisposteCorrette).toFixed(1) + '%'
    percentualeRisposteSbagliate.innerText = (numeroPercentualeRisposteSbagliate).toFixed(1) + '%'
    numeroRisposteCorrette.innerText = punteggioTotale + `/${numeroDomande} questions`
    numeroRisposteSbagliate.innerText = risposteSbagliate + `/${numeroDomande} questions`

    aggiornaGrafico()
    aggiornaTestoGraficoRisultati(numeroPercentualeRisposteCorrette)
}

// valori grafico

const aggiornaGrafico = () => {
    const circles = document.querySelector('.donut-segment')
    const circonferenzaGrafico = 400
    let numeroPercentualeRisposteCorrette = (punteggioTotale * 100) / domande.length
    let graficoCorrette = (numeroPercentualeRisposteCorrette * circonferenzaGrafico) / 100
    let graficoSbagliate = circonferenzaGrafico - graficoCorrette
    circles.style.strokeDasharray = `${graficoSbagliate} ${graficoCorrette}`
}


const aggiornaTestoGraficoRisultati = (percentuale) => {
    const titolo = document.querySelector('.donutGraficoP1')
    const titoloColorato = document.querySelector('.donutGraficoP2')
    const p1 = document.querySelector('.donutGraficoP3')
    const p2 = document.querySelector('.donutGraficoP4')

    if (percentuale < 60) {
        titolo.innerHTML = "I'm sorry!"
        titoloColorato.style.fill = '#c2128d'
        titoloColorato.innerHTML = "You failed the exam"
        p1.innerHTML = 'You have not'
        p2.innerHTML = 'passed the exam'
    }
}

// display pagina feedback

const bottoneRateUs = document.querySelector('#bottoneRateUs')

const displayQuattro = () => {
    paginaRisultati.style.display = 'none';
    paginaFeedback.style.display = 'block';
}

bottoneRateUs.addEventListener('click', () => displayQuattro())

// script pagina 4

const stelle = document.querySelectorAll('.stella')

let mouseoverAbilitato = true;

const gestoreMouseover = (indice) => () => {
  if (mouseoverAbilitato) {
    for (let j = 0; j <= indice; j++) {
      const paths = stelle[j].querySelectorAll('path');
      stelle[j].classList.add('stellaIlluminata');
    }
    for (let k = indice + 1; k < stelle.length; k++) {
      const paths = stelle[k].querySelectorAll('path');
      stelle[k].classList.remove('stellaIlluminata');
    }
  }
};

const gestoreClick = (indice) => () => {
  for (let j = 0; j <= indice; j++) {
    const paths = stelle[j].querySelectorAll('path');
    stelle[j].classList.add('stellaIlluminata');
  }

  // Rimuovi la classe 'stellaIlluminata' dalle stelle successive
  for (let k = indice + 1; k < stelle.length; k++) {
    stelle[k].classList.remove('stellaIlluminata');
  }

  // Disabilita il mouseover dopo il click
  mouseoverAbilitato = false;

  // Rimuovi gli eventi mouseover dopo il click
  for (let i = 0; i < stelle.length; i++) {
    stelle[i].removeEventListener('mouseover', gestoreMouseover(i));
  }
};

// Aggiungi gli eventi mouseover e click alle stelle
for (let i = 0; i < stelle.length; i++) {
  stelle[i].addEventListener('mouseover', gestoreMouseover(i));
  stelle[i].addEventListener('click', gestoreClick(i));
}

let numeroStelleCliccate = 0  

const assegnazioneClickStella = () => {
  const stelle = document.getElementsByClassName('stella')
  for (let i = 0; i < stelle.length; i++) {
    stelle[i].addEventListener('click', () => {
      numeroStelleCliccate = i + 1
    })
  }
}

const creazioneFeedback = () => {
  const bottoneMoreInfo = document.querySelector('#bottoneMoreInfo')
  bottoneMoreInfo.addEventListener('click', () => {
    if (numeroStelleCliccate > 0) {
    bottoneMoreInfo.disabled = true
    titoloFeedback.style.display = 'block'
    esitoFeedback.style.display = 'flex'
    stellePiuFeedback.style.display = 'block'
    const iconaUser = document.createElement('img')
    iconaUser.src = 'Assets/IMG/personCircleOutline.svg'
    esitoFeedback.insertBefore(iconaUser, esitoFeedback.firstChild)
    for (let i = 0; i < numeroStelleCliccate; i++) {
    const iconaStelle = document.createElement('img')
    iconaStelle.src = 'Assets/IMG/star.svg'
    stellePiuFeedback.insertBefore(iconaStelle, stellePiuFeedback.firstChild)
    }
    const commentoFeedback = document.querySelector('#commentoFeedback').value
    const feedbackP = document.querySelector('#feedbackP')
    feedbackP.innerText = commentoFeedback
    }
})
}

creazioneFeedback()

assegnazioneClickStella()