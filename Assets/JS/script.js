const paginaWelcome = document.querySelector('#paginaWelcome')
const paginaDomande = document.querySelector('#paginaDomande')
const paginaRisultati = document.querySelector('#paginaRisultati')
const paginaFeedback = document.querySelector('#paginaFeedback')

const domande = [
    {
      categoria: "Science: Computers",
      tipo: "multiple",
      difficolta: "easy",
      titoloDomanda: "What does CPU stand for?",
      risposte : ["Central Processing Unit", "Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
      rispostaCorretta: "Central Processing Unit",
      rispostaSbagliata: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      categoria: "Science: Computers",
      tipo: "multiple",
      difficolta: "easy",
      titoloDomanda:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        risposte : ["Final","Static", "Private", "Public"],
      rispostaCorretta: "Final",
      rispostaSbagliata: ["Static", "Private", "Public"],
    },
    {
      categoria: "Science: Computers",
      tipo: "boolean",
      difficolta: "easy",
      titoloDomanda: "The logo for Snapchat is a Bell.",
      risposte : ['False', 'True'],
      rispostaCorretta: "False",
      rispostaSbagliata: ["True"],
    },
    {
      categoria: "Science: Computers",
      tipo: "boolean",
      difficolta: "easy",
      titoloDomanda:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
        risposte : ['False', 'True'],
        rispostaCorretta: "False",
      rispostaSbagliata: ["True"],
    },
    {
      categoria: "Science: Computers",
      tipo: "multiple",
      difficolta: "easy",
      titoloDomanda:
        "What is the most preferred image format used for logos in the Wikimedia database?",
        risposte : [".svg",".png", ".jpeg", ".gif"],
        rispostaCorretta: ".svg",
      rispostaSbagliata: [".png", ".jpeg", ".gif"],
    },
    {
      categoria: "Science: Computers",
      tipo: "multiple",
      difficolta: "easy",
      titoloDomanda: "In web design, what does CSS stand for?",
      risposte : ["Cascading Style Sheet","Counter Strike: Source","Corrective Style Sheet","Computer Style Sheet"],
      rispostaCorretta: "Cascading Style Sheet",
      rispostaSbagliata: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      categoria: "Science: Computers",
      tipo: "multiple",
      difficolta: "easy",
      titoloDomanda:
        "What is the code name for the mobile operating system Android 7.0?",
        risposte : ["Nougat","Ice Cream Sandwich","Jelly Bean","Marshmallow",],
        rispostaCorretta: "Nougat",
      rispostaSbagliata: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      categoria: "Science: Computers",
      tipo: "multiple",
      difficolta: "easy",
      titoloDomanda: "On Twitter, what is the character limit for a Tweet?",
      risposte : ["140","120", "160", "100"],
      rispostaCorretta: "140",
      rispostaSbagliata: ["120", "160", "100"],
    },
    {
      categoria: "Science: Computers",
      tipo: "boolean",
      difficolta: "easy",
      titoloDomanda: "Linux was first created as an alternative to Windows XP.",
      risposte : ['False', 'True'],
      rispostaCorretta: "False",
      rispostaSbagliata: ["True"],
    },
    {
      categoria: "Science: Computers",
      tipo: "multiple",
      difficolta: "easy",
      titoloDomanda:
        "Which programming language shares its name with an island in Indonesia?",
        risposte : ["Java", "Python", "C", "Jakarta"],
        rispostaCorretta: "Java",
      rispostaSbagliata: ["Python", "C", "Jakarta"],
    },
  ];

  const indiceDomande = 0

  const indiceRisposte = []

  let indiceDomandaCorrente = 0

  let punteggioTotale = 0

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
  const parent = donutTimer.parentNode;
  const nextDonutTimer = donutTimer.cloneNode(true);
  parent.replaceChild(nextDonutTimer, donutTimer);
  donutTimer = nextDonutTimer;
}

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

const creazioneDomanda = () => {
    resetCountdown()
    resetTimerSVG()
    const h1 = document.querySelector('#titoloDomandaHtml')
    const numeroDomandaCorrente = document.querySelector('#numeroDomandaCorrente')
    h1.innerText = domande[indiceDomandaCorrente].titoloDomanda
    numeroDomandaCorrente.innerText = indiceDomandaCorrente + 1
        if (domande[indiceDomandaCorrente].tipo === 'multiple') {
          const numeriEstratti = rispostaRandomica() 
          for (let i = 0; i < domande[indiceDomandaCorrente].risposte.length; i++) {
                const risposta = document.createElement('button')
                const testoRisposta = domande[indiceDomandaCorrente].risposte[numeriEstratti[i]]
                risposta.textContent = testoRisposta
                if (testoRisposta === domande[indiceDomandaCorrente].rispostaCorretta) {
                  risposta.classList.add('bottoneRispostaCorretta')
                } else {
                  risposta.classList.add('bottoneRispostaSbagliata')
                }
                divRisposte.appendChild(risposta)
                risposta.addEventListener('click', () => clickRisposta(testoRisposta))
            }
          
        } else {
          const numeriEstratti = rispostaRandomica() 
            for (let j = 0; j < domande[indiceDomandaCorrente].risposte.length; j++) {
                const risposta = document.createElement('button')
                const testoRisposta = domande[indiceDomandaCorrente].risposte[numeriEstratti[j]]
                risposta.textContent = testoRisposta
                if (testoRisposta === domande[indiceDomandaCorrente].rispostaCorretta) {
                  risposta.classList.add('bottoneRispostaCorretta')
                } else {
                  risposta.classList.add('bottoneRispostaSbagliata')
                }
                divRisposte.appendChild(risposta)
                risposta.addEventListener('click', () => clickRisposta(testoRisposta))
        }
    }
}

const displayDue = (e) => {
  paginaWelcome.style.display = 'none';
  paginaDomande.style.display = 'block';
  creazioneDomanda()
}


const clickRisposta = (risposta) => {                                                         
    if (indiceDomandaCorrente < domande.length - 1) {
        if (risposta === domande[indiceDomandaCorrente].rispostaCorretta) {
            punteggioTotale++
        }
    indiceDomandaCorrente++
    divRisposte.innerHTML = ''
    creazioneDomanda()
    } else {
        if (risposta === domande[indiceDomandaCorrente].rispostaCorretta) {
        punteggioTotale++
        } else {

        }
    calcoliRisultati()
    paginaDomande.style.display = 'none'
    paginaRisultati.style.display = 'block'
    }
}

//Script Pagina 3

const calcoliRisultati = () => {
let percentualeRisposteCorrette = document.querySelector('#percentualeCorrette')
let percentualeRisposteSbagliate = document.querySelector('#percentualeSbagliate')
let numeroRisposteCorrette = document.querySelector('#numeroRisposteCorrette')
let numeroRisposteSbagliate = document.querySelector('#numeroRisposteSbagliate')

let risposteSbagliate = domande.length - punteggioTotale
let numeroPercentualeRisposteCorrette = (punteggioTotale * 100) / domande.length
let numeroPercentualeRisposteSbagliate = 100 - numeroPercentualeRisposteCorrette

percentualeRisposteCorrette.innerText = numeroPercentualeRisposteCorrette + '%'
percentualeRisposteSbagliate.innerText = numeroPercentualeRisposteSbagliate + '%'
numeroRisposteCorrette.innerText = punteggioTotale + '/10 questions'
numeroRisposteSbagliate.innerText = risposteSbagliate + '/10 questions'
aggiornaGrafico()
aggiornaTestoGraficoRisultati(numeroPercentualeRisposteCorrette)
}

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

const bottoneRateUs = document.querySelector('#bottoneRateUs')

const displayQuattro = () => {
    paginaRisultati.style.display = 'none';
    paginaFeedback.style.display = 'block';
}

bottoneRateUs.addEventListener('click', () => displayQuattro())

//Script Pagina 4

const stelle = document.querySelectorAll('.stella')

for (let i = 0; i < stelle.length; i++) {
    stelle[i].addEventListener('mouseover', () => {
        for (let j = 0; j <= i; j++) {
            const paths = stelle[j].querySelectorAll('path')
            stelle[j].classList.add('stellaIlluminata')
        }
        for (let k = i + 1; k < stelle.length; k++) {
            const paths = stelle[k].querySelectorAll('path')
            stelle[k].classList.remove('stellaIlluminata')
        }
    })
}

const bottoneMoreInfo = document.querySelector('#bottoneMoreInfo')
bottoneMoreInfo.addEventListener('click', (e) => e.preventDefault())
