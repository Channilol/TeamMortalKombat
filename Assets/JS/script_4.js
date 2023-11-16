
const paginaWelcome = document.querySelector('#paginaWelcome')
const paginaDomande = document.querySelector('#paginaDomande')
const paginaRisultati = document.querySelector('#paginaRisultati')
const paginaFeedback = document.querySelector('#paginaFeedback')

// stato iniziale

paginaDomande.style.display = 'none'
paginaRisultati.style.display = 'none'
paginaFeedback.style.display = 'none'



///////
let domande; // variabile globale

const difficulty = 'hard';

const getQuestions = async (difficulty) => {
    const response = await fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=${difficulty}`);
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
        console.error('Errore di fetch', error);
    });


const creazioneDomanda = (domande) => {

    console.log(domande.length)

}

