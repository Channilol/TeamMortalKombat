const difficulty = 'hard'
async function getQuestions(difficulty) {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=hard')
    const domande = await response.json();
    console.log(domande.results);
}

getQuestions(difficulty)


