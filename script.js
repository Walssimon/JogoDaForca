const words = ["banana", "laranja", "abacaxi", "uva", "morango"]; // Palavras para adivinhar
        let currentWord = ""; // Palavra atual
        let guessedWord = []; // Palavra adivinhada
        let guessedLetters = [];
        let trying = 6;
        function startGame() {
            currentWord = words[Math.floor(Math.random() * words.length)];
            guessedWord = currentWord.split('').map(letter => '_');
            guessedLetters = [];
            document.getElementById('hidden-word').textContent = guessedWord.join(' ');
            document.querySelector('.menu-container').style.display = 'none';
            document.querySelector('.game-container').style.display = 'block';
            document.getElementById('guess-input').disabled = false;
            document.getElementById('guessed-letters').textContent = '';
        }

        function guessLetter() {
            const guess = document.getElementById('guess-input').value.toLowerCase();
            if (guess.length === 1 && trying > 0) {
                if (guessedLetters.includes(guess)) {
                    trying = trying - 1;
                    console.log(trying);
                    alert("Essa letra já foi digitada.");
                } else if (currentWord.includes(guess)) {
                    for (let i = 0; i < currentWord.length; i++) {
                        if (currentWord[i] === guess) {
                            guessedWord[i] = guess;
                        }
                    }
                    document.getElementById('hidden-word').textContent = guessedWord.join(' ');
                    if (!guessedWord.includes('_')) {
                        alert("Você venceu! A palavra é: " + currentWord);
                        resetGame();
                    }
                }else {
                    guessedLetters.push(guess);
                    document.getElementById('guessed-letters').textContent = "Letras já digitadas: " + guessedLetters.join(', ');
                    trying = trying - 1;
                    console.log(trying);
                    alert("Letra errada! Tente novamente.");
                }
                document.getElementById('guess-input').value = '';
            } else {
                if (trying <= 0) { 
                    alert("Você Perdeu!A palavra é: " + currentWord)
                ;}else {
                    alert("Por favor, insira apenas uma letra.")
                }
            }
        }

        function validateInput() {
            const input = document.getElementById('guess-input');
            input.value = input.value.replace(/[^a-z]/g, ''); // Somente letras minúsculas são permitidas
        }

        function resetGame() {
            document.querySelector('.menu-container').style.display = 'block';
            document.querySelector('.game-container').style.display = 'none';
            document.getElementById('guess-input').disabled = false;
            document.getElementById('guessed-letters').textContent = '';
        }