
let difficulty = 'hard'

async function getQuestions(difficulty) {
    const response = await fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=${difficulty}`)
    const domande = await response.json();
    return domande
}

const domande = getQuestions(difficulty)

const nuoveDomande = []

const creaAnswers = async () => {
    const newAnswer = []
    for (let i = 0; i < domande.results.length; i++) {
        const correctAnswer = domande.results[i].correct_answer
        newAnswer.push(correctAnswer)
        const incorrectAnswer = domande.results[i].incorrect_answer
        for (let j = 0; j < incorrectAnswer.length; j++) {
            const answerSingola = incorrectAnswer[j]
            newAnswer.push(answerSingola)
        }
    }
    nuoveDomande.push(newAnswer)
}

creaAnswers()

console.log(nuoveDomande)