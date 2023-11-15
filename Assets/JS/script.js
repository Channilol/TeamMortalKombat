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

// Script pagina 2 e 3

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
            alert('risposta giusta')
            punteggioTotale++
        } else {
            alert('risposta sbagliata')
        }

    indiceDomandaCorrente++
    divRisposte.innerHTML = ''
    creazioneDomanda()
    } else {
        if (risposta === domande[indiceDomandaCorrente].rispostaCorretta) {
        punteggioTotale++
        alert('Risposta giusta')
        }
    console.log(punteggioTotale)
    paginaDomande.style.display = 'none'
    paginaRisultati.style.display = 'block'
    }
}



creazioneDomanda()


/* do {
    numeroGenerato = Math.floor(Math.random() * 76) + 1;
} while (arrayNumeriEstratti.includes(numeroGenerato)); */