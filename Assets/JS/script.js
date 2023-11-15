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


// Status iniziale

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

const displayDue = (e) => {
    paginaWelcome.style.display = 'none';
    paginaDomande.style.display = 'block';
}

// Script pagina 2

let indiceDomandaCorrente = 0

const divRisposte = document.querySelector('#divContenitoreBottoniDomande')

const creazioneDomanda = () => {
    const h1 = document.querySelector('#titoloDomandaHtml')
    const numeroDomandaCorrente = document.querySelector('#numeroDomandaCorrente')
    h1.innerText = domande[indiceDomandaCorrente].titoloDomanda
    numeroDomandaCorrente.innerText = indiceDomandaCorrente + 1

        if (domande[indiceDomandaCorrente].tipo === 'multiple') {
            for (let i = 0; i < domande[indiceDomandaCorrente].risposte.length; i++) {
                const risposta = document.createElement('button')
                const testoRisposta = domande[indiceDomandaCorrente].risposte[i]
                risposta.textContent = testoRisposta
                divRisposte.appendChild(risposta)
                risposta.addEventListener('click', () => clickRisposta(testoRisposta))
            }
        } else {
            for (let j = 0; j < domande[indiceDomandaCorrente].risposte.length; j++) {
                const risposta = document.createElement('button')
                const testoRisposta = domande[indiceDomandaCorrente].risposte[j]
                risposta.textContent = testoRisposta
                divRisposte.appendChild(risposta)
                risposta.addEventListener('click', () => clickRisposta(testoRisposta))
        }
    }
}

let punteggioTotale = 0

//Click risposta + domanda successiva

const clickRisposta = (risposta) => {                                                                   
    if (indiceDomandaCorrente < domande.length - 1) {
        if (risposta === domande[indiceDomandaCorrente].rispostaCorretta) {
            punteggioTotale++
        } else {
        }

    indiceDomandaCorrente++
    divRisposte.innerHTML = ''
    creazioneDomanda()
    } else {
        if (risposta === domande[indiceDomandaCorrente].rispostaCorretta) {
        punteggioTotale++
        }
    calcoliRisultati()
    paginaDomande.style.display = 'none'
    paginaRisultati.style.display = 'block'
    }
}

creazioneDomanda()

//Script Pagina 3

const calcoliRisultati = () => {
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
percentualeRisposteCorrette.innerText = numeroPercentualeRisposteCorrette + '%'
percentualeRisposteSbagliate.innerText = numeroPercentualeRisposteSbagliate + '%'
numeroRisposteCorrette.innerText = punteggioTotale + '/10 questions'
numeroRisposteSbagliate.innerText = risposteSbagliate + '/10 questions'
aggiornaGrafico()
}

//Valori grafico

const aggiornaGrafico = () => {
    const circles = document.querySelector('.donut-segment')
    const circonferenzaGrafico = 400
    let numeroPercentualeRisposteCorrette = (punteggioTotale * 100) / domande.length
    let graficoCorrette = (numeroPercentualeRisposteCorrette * circonferenzaGrafico) / 100
    let graficoSbagliate = circonferenzaGrafico - graficoCorrette

    console.log(graficoCorrette)
    console.log(graficoSbagliate)

    circles.style.strokeDasharray = `${graficoSbagliate} ${graficoCorrette}`
}



/* console.log(graficoCorrette)
console.log(graficoSbagliate)

const donutSegment = document.querySelector('.donut-segment')

donutSegment.setAttribute('stroke-dasharray', `${graficoSbagliate} ${graficoCorrette}`);
 */

//Display pagina feedback
const bottoneRateUs = document.querySelector('#bottoneRateUs')

const displayQuattro = () => {
    paginaRisultati.style.display = 'none';
    paginaFeedback.style.display = 'block';
}

bottoneRateUs.addEventListener('click', () => displayQuattro())

//Script Pagina 4
const stelle = document.querySelectorAll('.stella')

/* stelle.forEach((stella, index) => { //ogni stella dell'array stelle    // TENTATIVO N1
    stella.addEventListener('mouseover', () => { //assegno ad ogni elemento un eventListener mouseover
        for (let i = 0; i <= index; i++) { // 
            const paths = stelle[i].querySelectorAll('path') //paths --> array di oggetti pari
            paths.forEach((path) => {
                path.setAttribute('fill', '#00ffff')
            })
        }
    })
})  */

/* for (let i = 0; i < stelle.length; i++) {            TENTATIVO N2
    stelle[i].addEventListener('mouseover', () => {
        for (let j = 0; j <= i; j++) {
            const paths = stelle[j].querySelectorAll('path')
            stelle[j].classList.add('stellaIlluminata')
             for (let k = 0; k < paths.length; k++) {   
                paths[k].setAttribute('fill', '')
            }
        }

        for (let k = i + 1; k < stelle.length; k++) {
            const paths = stelle[k].querySelectorAll('path')
            stelle[k].classList.remove('stellaIlluminata')
            for (let z = 0; z < paths.length; z++) {    
                paths[z].setAttribute('fill', '')
            } 
        }
    })
} */

/*     stelle[i].addEventListener('mouseout', () => {    // TENTATIVO N3
        for (let j = 0; j <= stelle.length; j++) {
            const paths = stelle[j].querySelectorAll('path')
            stelle[j].classList.remove('stellaIlluminata')
            for (let k = 0; k < paths.length; k++) {
                paths[k].setAttribute('fill', '')
            }
        }
    }) */

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

/* do {
    numeroGenerato = Math.floor(Math.random() * 76) + 1;
} while (arrayNumeriEstratti.includes(numeroGenerato)); */