const paginaWelcome = document.querySelector('#paginaWelcome')
const divflaggaLaCheckbox = document.querySelector('#divflaggaLaCheckbox')
const paginaDifficolta = document.querySelector('#paginaDifficolta')
const paginaDomande = document.querySelector('#paginaDomande')
const paginaRisultati = document.querySelector('#paginaRisultati')
const paginaFeedback = document.querySelector('#paginaFeedback')
const titoloFeedback = document.querySelector('#titoloFeedback')
const esitoFeedback = document.querySelector('#esitoFeedback')
const stellePiuFeedback = document.querySelector('#stellePiuFeedback')

//DOMANDE EASY

let domande = [
  {
    categoria: "Science: Computers",
    tipo: "multiple",
    difficolta: "easy",
    titoloDomanda: "What does CPU stand for?",
    risposte: ["Central Processing Unit", "Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
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
    risposte: ["Final", "Static", "Private", "Public"],
    rispostaCorretta: "Final",
    rispostaSbagliata: ["Static", "Private", "Public"],
  },
  {
    categoria: "Science: Computers",
    tipo: "boolean",
    difficolta: "easy",
    titoloDomanda: "The logo for Snapchat is a Bell.",
    risposte: ['False', 'True'],
    rispostaCorretta: "False",
    rispostaSbagliata: ["True"],
  },
  {
    categoria: "Science: Computers",
    tipo: "boolean",
    difficolta: "easy",
    titoloDomanda:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    risposte: ['False', 'True'],
    rispostaCorretta: "False",
    rispostaSbagliata: ["True"],
  },
  {
    categoria: "Science: Computers",
    tipo: "multiple",
    difficolta: "easy",
    titoloDomanda:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    risposte: [".svg", ".png", ".jpeg", ".gif"],
    rispostaCorretta: ".svg",
    rispostaSbagliata: [".png", ".jpeg", ".gif"],
  },
  {
    categoria: "Science: Computers",
    tipo: "multiple",
    difficolta: "easy",
    titoloDomanda: "In web design, what does CSS stand for?",
    risposte: ["Cascading Style Sheet", "Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
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
    risposte: ["Nougat", "Ice Cream Sandwich", "Jelly Bean", "Marshmallow",],
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
    risposte: ["140", "120", "160", "100"],
    rispostaCorretta: "140",
    rispostaSbagliata: ["120", "160", "100"],
  },
  {
    categoria: "Science: Computers",
    tipo: "boolean",
    difficolta: "easy",
    titoloDomanda: "Linux was first created as an alternative to Windows XP.",
    risposte: ['False', 'True'],
    rispostaCorretta: "False",
    rispostaSbagliata: ["True"],
  },
  {
    categoria: "Science: Computers",
    tipo: "multiple",
    difficolta: "easy",
    titoloDomanda:
      "Which programming language shares its name with an island in Indonesia?",
    risposte: ["Java", "Python", "C", "Jakarta"],
    rispostaCorretta: "Java",
    rispostaSbagliata: ["Python", "C", "Jakarta"],
  },
];

// DOMANDE MEDIE

const domandeMedie = [
  {
    tipo: "multiple",
    difficolta: "medium",
    categoria: "Science: Computers",
    titoloDomanda: "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
    rispostaCorretta: "Taiwan",
    rispostaSbagliata: [
      "United States",
      "Germany",
      "China (People&#039;s Republic of)"
    ]
  },
  {
    tipo: "boolean",
    difficolta: "medium",
    categoria: "Science: Computers",
    titoloDomanda: "Android versions are named in alphabetical order.",
    rispostaCorretta: "True",
    rispostaSbagliata: [
      "False"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "medium",
    categoria: "Science: Computers",
    titoloDomanda: "Laserjet and inkjet printers are both examples of what type of printer?",
    rispostaCorretta: "Non-impact printer",
    rispostaSbagliata: [
      "Impact printer",
      "Daisywheel printer",
      "Dot matrix printer"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "medium",
    categoria: "Science: Computers",
    titoloDomanda: "What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?",
    rispostaCorretta: "Heat Sink",
    rispostaSbagliata: [
      "CPU Vent",
      "Temperature Decipator",
      "Heat Vent"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "medium",
    categoria: "Science: Computers",
    titoloDomanda: "All of the following programs are classified as raster graphics editors EXCEPT:",
    rispostaCorretta: "Inkscape",
    rispostaSbagliata: [
      "Paint.NET",
      "GIMP",
      "Adobe Photoshop"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "medium",
    categoria: "Science: Computers",
    titoloDomanda: "What was the first Android version specifically optimized for tablets?",
    rispostaCorretta: "Honeycomb",
    rispostaSbagliata: [
      "Eclair",
      "Froyo",
      "Marshmellow"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "medium",
    categoria: "Science: Computers",
    titoloDomanda: "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?",
    rispostaCorretta: "Clipper Chip",
    rispostaSbagliata: [
      "Enigma Machine",
      "Skipjack",
      "Nautilus"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "medium",
    categoria: "Science: Computers",
    titoloDomanda: "Generally, which component of a computer draws the most power?",
    rispostaCorretta: "Video Card",
    rispostaSbagliata: [
      "Hard Drive",
      "Processor",
      "Power Supply"
    ]
  },
  {
    tipo: "boolean",
    difficolta: "medium",
    categoria: "Science: Computers",
    titoloDomanda: "To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form. ",
    rispostaCorretta: "True",
    rispostaSbagliata: [
      "False"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "medium",
    categoria: "Science: Computers",
    titoloDomanda: "What does the term MIME stand for, in regards to computing?",
    rispostaCorretta: "Multipurpose Internet Mail Extensions",
    rispostaSbagliata: [
      "Mail Internet Mail Exchange",
      "Multipurpose Interleave Mail Exchange",
      "Mail Interleave Method Exchange"
    ]
  }
]

const domandeDifficili = [
  {
    tipo: "boolean",
    difficolta: "hard",
    categoria: "Science: Computers",
    titoloDomanda: "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    rispostaCorretta: "True",
    rispostaSbagliata: [
      "False"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "hard",
    categoria: "Science: Computers",
    titoloDomanda: "Who is the founder of Palantir?",
    rispostaCorretta: "Peter Thiel",
    rispostaSbagliata: [
      "Mark Zuckerberg",
      "Marc Benioff",
      "Jack Dorsey"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "hard",
    categoria: "Science: Computers",
    titoloDomanda: "How many Hz does the video standard PAL support?",
    rispostaCorretta: "50",
    rispostaSbagliata: [
      "59",
      "60",
      "25"
    ]
  },
  {
    tipo: "boolean",
    difficolta: "hard",
    categoria: "Science: Computers",
    titoloDomanda: "DHCP stands for Dynamic Host Configuration Port.",
    rispostaCorretta: "False",
    rispostaSbagliata: [
      "True"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "hard",
    categoria: "Science: Computers",
    titoloDomanda: "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    rispostaCorretta: "Cheetah",
    rispostaSbagliata: [
      "Puma",
      "Tiger",
      "Leopard"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "hard",
    categoria: "Science: Computers",
    titoloDomanda: "Which RAID array type is associated with data mirroring?",
    rispostaCorretta: "RAID 1",
    rispostaSbagliata: [
      "RAID 0",
      "RAID 10",
      "RAID 5"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "hard",
    categoria: "Science: Computers",
    titoloDomanda: "America Online (AOL) started out as which of these online service providers?",
    rispostaCorretta: "Quantum Link",
    rispostaSbagliata: [
      "CompuServe",
      "Prodigy",
      "GEnie"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "hard",
    categoria: "Science: Computers",
    titoloDomanda: "Which of the following is the oldest of these computers by release date?",
    rispostaCorretta: "TRS-80",
    rispostaSbagliata: [
      "Commodore 64",
      "ZX Spectrum",
      "Apple 3"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "hard",
    categoria: "Science: Computers",
    titoloDomanda: "What port does HTTP run on?",
    rispostaCorretta: "80",
    rispostaSbagliata: [
      "53",
      "443",
      "23"
    ]
  },
  {
    tipo: "multiple",
    difficolta: "hard",
    categoria: "Science: Computers",
    titoloDomanda: "What internet protocol was documented in RFC 1459?",
    rispostaCorretta: "IRC",
    rispostaSbagliata: [
      "HTTP",
      "HTTPS",
      "FTP"
    ]
  }
]

const creaAnswersMedie = () => {
  for (let i = 0; i < domandeMedie.length; i++) {
    const risposte = []
    const rispostaCorretta2 = domandeMedie[i].rispostaCorretta
    risposte.push(rispostaCorretta2)
    const rispostaSbagliata2 = domandeMedie[i].rispostaSbagliata
    for (let j = 0; j < rispostaSbagliata2.length; j++) {
      const singolaRisposta = rispostaSbagliata2[j]
      risposte.push(singolaRisposta)
    }
    domandeMedie[i].risposte = risposte
  }
}

const creaAnswersDifficili = () => {
  for (let i = 0; i < domandeDifficili.length; i++) {
    const risposte = []
    const rispostaCorretta2 = domandeDifficili[i].rispostaCorretta
    risposte.push(rispostaCorretta2)
    const rispostaSbagliata2 = domandeDifficili[i].rispostaSbagliata
    for (let j = 0; j < rispostaSbagliata2.length; j++) {
      const singolaRisposta = rispostaSbagliata2[j]
      risposte.push(singolaRisposta)
    }
    domandeDifficili[i].risposte = risposte
  }
}

creaAnswersMedie()

creaAnswersDifficili()


divflaggaLaCheckbox.style.display = 'none'
paginaDifficolta.style.display = 'none'
paginaDomande.style.display = 'none'
paginaRisultati.style.display = 'none'
paginaFeedback.style.display = 'none'
titoloFeedback.style.display = 'none'
esitoFeedback.style.display = 'none'
stellePiuFeedback.style.display = 'none'


const indiceDomande = 0

const indiceRisposte = []

let indiceDomandaCorrente = 0

let punteggioTotale = 0

let difficolta

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

// Script difficolta

const difficoltaFacile = () => {
  const bottoneFacile = document.querySelector('#bottoneFacile')
  bottoneFacile.addEventListener('click', () => {
    displayTre()
  })
}

const difficoltaMedia = () => {
  const bottoneMedia = document.querySelector('#bottoneMedia')
  bottoneMedia.addEventListener('click', () => {
    difficolta = 'medie'
    displayTre()
  })
}

const difficoltaDifficile = () => {
  const bottoneDifficile = document.querySelector('#bottoneDifficile')
  bottoneDifficile.addEventListener('click', () => {
    difficolta = 'difficile'
    displayTre()
  })
}

difficoltaFacile()
difficoltaMedia()
difficoltaDifficile()



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

//


// numero di domande

let numeroDomande = 1

const numeroDomandeScelto = () => {
  const inputNumero = document.querySelector('#numeroDomandeScelte')
  inputNumero.addEventListener('input', () => {
    numeroDomande = parseInt(inputNumero.value, 10)
    if (isNaN(numeroDomande) || numeroDomande < 1) {
      numeroDomande = 1;
    } else if (numeroDomande > 10) {
      numeroDomande = 10;
    }
    inputNumero.value = numeroDomande;
  })
}

numeroDomandeScelto()

const creazioneDomanda = () => {
  resetCountdown()
  resetTimerSVG()

  if (difficolta === 'medie') {
    domande = domandeMedie
  }

  else if (difficolta === 'difficile') {
    domande = domandeDifficili
  }

  domande.length = numeroDomande

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
  let totaleDomandeScelte = document.querySelector('#totaleDomandeScelte')
  totaleDomandeScelte.innerText = `/${numeroDomande}`
}

/* 
arrayNumeriEstratti = []
do {
    numeroGenerato = Math.floor(Math.random() * 4);
} while (arrayNumeriEstratti.includes(numeroGenerato)); */



const displayDue = (e) => {
  paginaWelcome.style.display = 'none';
  paginaDifficolta.style.display = 'block';
}

const displayTre = (e) => {
  paginaDifficolta.style.display = 'none';
  paginaDomande.style.display = 'block';
  creazioneDomanda()
}


//Click risposta + domanda successiva

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
    clearTimeout(timeoutId)
    calcoliRisultati()
    paginaDomande.style.display = 'none'
    paginaRisultati.style.display = 'block'
  }
}



/* const scadereTempo = () => {
  if (secondi === 0) {
    indiceDomandaCorrente++
    creazioneDomanda()
  } else {

  }
} */

//creazioneDomanda()

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
  percentualeRisposteCorrette.innerText = (numeroPercentualeRisposteCorrette).toFixed(1) + '%'
  percentualeRisposteSbagliate.innerText = (numeroPercentualeRisposteSbagliate).toFixed(1) + '%'
  numeroRisposteCorrette.innerText = punteggioTotale + `/${numeroDomande} questions`
  numeroRisposteSbagliate.innerText = risposteSbagliate + `/${numeroDomande} questions`
  aggiornaGrafico()
  aggiornaTestoGraficoRisultati(numeroPercentualeRisposteCorrette)
}

//Valori GRAFICO

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

/* console.log(graficoCorrette)
console.log(graficoSbagliate)

const donutSegment = document.querySelector('.donut-segment')

donutSegment.setAttribute('stroke-dasharray', `${graficoSbagliate} ${graficoCorrette}`);
 */

//Display pagina feedback
const bottoneRateUs = document.querySelector('#bottoneRateUs')

const displayQuattro = () => {
  clearTimeout(timeoutId)
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

let numeroStelleCliccate = 0    

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

const assegnazioneClickStella = () => {
  const stelle = document.getElementsByClassName('stella')
  for (let i = 0; i < stelle.length; i++) {
    stelle[i].addEventListener('click', () => {
      numeroStelleCliccate = i + 1
      console.log(numeroStelleCliccate)
    })
  }
}

const creazioneFeedback = () => {
  const bottoneMoreInfo = document.querySelector('#bottoneMoreInfo')
  bottoneMoreInfo.addEventListener('click', () => {
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
  })
}

creazioneFeedback()

assegnazioneClickStella()

/* <img src="Assets/IMG/person-circle-outline (1).svg" alt="IconaUser"> */

/* do {
    numeroGenerato = Math.floor(Math.random() * 76) + 1;
} while (arrayNumeriEstratti.includes(numeroGenerato)); */