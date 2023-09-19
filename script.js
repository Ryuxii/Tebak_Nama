const kampus = [
    { nama: "Universitas Andalas", petunjuk: "Kampus tertua di Sumatera Barat" },
    { nama: "Universitas Negeri Padang", petunjuk: "Berfokus pada pendidikan" },
    { nama: "Politeknik Negeri Padang", petunjuk: "Menawarkan pendidikan vokasional" }
];

const randomIndex = Math.floor(Math.random() * kampus.length);
const selectedKampus = kampus[randomIndex];

document.getElementById('clue').textContent = `Petunjuk: ${selectedKampus.petunjuk}`;

function checkGuess() {
    const guess = document.getElementById('guessInput').value;
    
    if (guess.toLowerCase() === selectedKampus.nama.toLowerCase()) {
        showMessage("Selamat! Anda benar!", 'green');
    } else {
        showMessage("Maaf, coba lagi.", 'red');
    }
}

function showMessage(msg, color) {
    const resultDiv = document.getElementById('result');
    resultDiv.style.color = color;
    resultDiv.textContent = msg;
}