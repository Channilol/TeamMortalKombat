const paginaWelcome = document.querySelector('#paginaWelcome');
const paginaDomande = document.querySelector('#paginaDomande');
const paginaRisultati = document.querySelector('#paginaRisultati');
const paginaFeedback = document.querySelector('#paginaFeedback');

// Status iniziale
paginaDomande.style.display = 'none';
paginaRisultati.style.display = 'none';
paginaFeedback.style.display = 'none';

const mostraPaginaDue = () => {
    const bottoneProceed = document.querySelector('#bottoneProceed');
    bottoneProceed.addEventListener('click', (event) => displayDue(event));
};

const displayDue = (event) => {
    event.preventDefault();
    paginaWelcome.style.display = 'none';
    paginaDomande.style.display = 'block';

}

mostraPaginaDue();
