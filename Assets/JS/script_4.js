// stato iniziale

const paginaWelcome = document.querySelector('#paginaWelcome')
const paginaDifficolta = document.querySelector('#paginaDifficolta')
const paginaDomande = document.querySelector('#paginaDomande')
const paginaRisultati = document.querySelector('#paginaRisultati')
const paginaFeedback = document.querySelector('#paginaFeedback')


paginaDifficolta.style.display = 'none'
paginaDomande.style.display = 'none'
paginaRisultati.style.display = 'none'
paginaFeedback.style.display = 'none'

///////
let domande; // variabile globale

let difficulty

const getQuestions = async (difficulty) => {
    const facile = impostaDifficulty()
    const response = await fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=${facile}`);
    const data = await response.json();
    domande = data.results
    return domande
};



const fetchQuestions = async () => { // Aspetta prima getQuestions prima di esguire fetchQuestions
    await getQuestions(difficulty);
};

// Esegui fetchQuestions


fetchQuestions()
    .then(() => {
        // se funzione ok esegui console.log
        console.log(domande)

        creazioneDomanda(domande)

    })
    .catch((error) => {
        // se errore esegui qui sotto
        console.log('Errore di fetch', error.message);
    });


// gestione difficoltà

const impostaDifficultyEasy = async = () => {
    const bottoneFacile = document.querySelector('#bottoneFacile')
    bottoneFacile.addEventListener('click', () => {
        difficulty = 'easy'
        displayTre()
        return difficulty
    })
}

const impostaDifficultyMedium = async () => {
    const bottoneMedia = document.querySelector('#bottoneMedia')
    bottoneMedia.addEventListener('click', () => {
        difficulty = 'medium'
        return difficulty
    })
}

const impostaDifficultyHard = async () => {
    const bottoneDifficile = document.querySelector('#bottoneDifficile')
    bottoneDifficile.addEventListener('click', () => {
        difficulty = 'hard'
        return difficulty
    })
}


difficoltaFacile()
difficoltaMedia()
difficoltaDifficile()

const creazioneDomanda = (domandePrese) => {

    for (let i = 0; i < domandePrese.length; i++) {
        console.log(domandePrese[i]);
    }

}


