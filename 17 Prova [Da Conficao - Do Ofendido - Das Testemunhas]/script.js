const correctAnswers = {
    q1: 'B) Pelo confronto com as demais provas do processo',
    q2: 'B) Pode ser usado como elemento para a formação do convencimento do juiz',
    q3: 'B) A confissão deve ser registrada por termo nos autos',
    q4: 'C) Divisível e retratável',
};

const explanations = {
    q1: '-------------------------- EXPLICAÇÃO -------------------------<br>' +
        'De acordo com o Art. 197, o valor da confissão se aferirá pelos critérios adotados para os outros elementos de prova, e para a sua apreciação o juiz deve confrontá-la com as demais provas do processo.' +
        '<br>---------------------------------------------------------------------------',
    q2: '-------------------------- EXPLICAÇÃO -------------------------<br>' +
        'O silêncio do acusado, conforme o Art. 198, não é considerado confissão, mas pode ser um elemento para a formação do convencimento do juiz.' +
        '<br>---------------------------------------------------------------------------',
    q3: '-------------------------- EXPLICAÇÃO -------------------------<br>' +
        'O Art. 199 dispõe que a confissão feita fora do interrogatório deve ser tomada por termo nos autos, conforme o disposto no Art. 195.' +
        '<br>---------------------------------------------------------------------------',
    q4: '-------------------------- EXPLICAÇÃO -------------------------<br>' +
        'O Art. 200 estabelece que a confissão é divisível e retratável, o que significa que pode ser modificada ou retratada, sem prejuízo do exame conjunto das provas.' +
        '<br>---------------------------------------------------------------------------',
};

function storeAnswers(correctCount) {
    const quizForm = document.getElementById('quiz-form');
    const inputs = quizForm.querySelectorAll('input[type="radio"]');

    inputs.forEach(input => {
        const label = input.nextElementSibling;
        const explanationDiv = document.getElementById(`explicacao-${input.name}`);

        localStorage.setItem(input.id, JSON.stringify({
            checked: input.checked,
            color: label.style.color,
            explanation: explanationDiv ? explanationDiv.innerHTML : null  // Armazena a explicação (se houver)
        }));
    });

    localStorage.setItem('correctCount', correctCount);
}

function loadAnswers() {
    const quizForm = document.getElementById('quiz-form');
    const inputs = quizForm.querySelectorAll('input[type="radio"]');

    inputs.forEach(input => {
        const storedData = JSON.parse(localStorage.getItem(input.id));
        if (storedData) {
            input.checked = storedData.checked;
            const label = input.nextElementSibling;
            label.style.color = storedData.color;

            // Se houver uma explicação armazenada, exibi-la
            const explanationDiv = document.getElementById(`explicacao-${input.name}`);
            if (storedData.explanation && explanationDiv) {
                explanationDiv.style.display = 'block';
                explanationDiv.innerHTML = storedData.explanation;
            }
        }
    });

    const correctCount = localStorage.getItem('correctCount');
    if (correctCount !== null) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = `Total de acertos: ${correctCount}`;
    }
}

function resetPreviousColors() {
    const quizForm = document.getElementById('quiz-form');
    const inputs = quizForm.querySelectorAll('input[type="radio"]');

    inputs.forEach(input => {
        const label = input.nextElementSibling;
        label.style.color = '';  // Reseta a cor anterior

        // Esconde a explicação anterior, se houver
        const explanationDiv = document.getElementById(`explicacao-${input.name}`);
        if (explanationDiv) {
            explanationDiv.style.display = 'none';
            explanationDiv.innerHTML = '';  // Limpa o conteúdo da explicação
        }
    });
}

function submitQuiz() {
    resetPreviousColors();  // Reseta as cores antes de corrigir

    const quizForm = document.getElementById('quiz-form');
    const inputs = quizForm.querySelectorAll('input[type="radio"]');
    let correctCount = 0;

    inputs.forEach(input => {
        const label = quizForm.querySelector(`label[for="${input.id}"]`);
        if (input.checked) {
            if (correctAnswers[input.name] === input.value) {
                // COMENTARIO correta, pinta de verde
                label.style.color = 'green';
                correctCount++;
            } else {
                // Resposta incorreta, pinta de vermelho e mostra explicação
                label.style.color = 'red';

                // Mostra a explicação para a questão errada
                const explanationDiv = document.getElementById(`explicacao-${input.name}`);
                explanationDiv.style.display = 'block';
                explanationDiv.innerHTML = explanations[input.name];  // Exibe a explicação
            }
        }
    });

    storeAnswers(correctCount);  // Armazena a explicação e os outros dados
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = `Total de acertos: ${correctCount}`;
}

function clearStorage() {
    localStorage.clear(); // Limpa todo o localStorage
    const quizForm = document.getElementById('quiz-form');
    const inputs = quizForm.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.checked = false;
        const label = input.nextElementSibling;
        label.style.color = '';  // Reseta a cor
        const explanationDiv = document.getElementById(`explicacao-${input.name}`);
        if (explanationDiv) {
            explanationDiv.style.display = 'none';  // Esconde a explicação
            explanationDiv.innerHTML = '';  // Limpa o conteúdo
        }
    });
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'none';
    resultsDiv.innerHTML = '';
}

window.onload = loadAnswers;

document.getElementById('corrigir-btn').addEventListener('click', submitQuiz);
document.getElementById('limpar-btn').addEventListener('click', clearStorage);
