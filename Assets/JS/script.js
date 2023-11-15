const paginaWelcome = document.querySelector('#paginaWelcome')
const paginaDomande = document.querySelector('#paginaDomande')
const paginaRisultati = document.querySelector('#paginaRisultati')
const paginaFeedback = document.querySelector('#paginaFeedback')

// Status iniziale

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