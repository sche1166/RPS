function startGame() {
    let rounds = document.getElementById('rounds').value;
    window.location.href = 'http://127.0.0.1:5500/index.html?rounds=' + rounds;
    console.log(rounds);
}