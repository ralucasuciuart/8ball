document.getElementById("askbtn").onclick = function getAnswer() {
    let randomNr = Math.floor(Math.random() * 15);
    let eightBall = '';

    if (randomNr === 0) {
        eightBall = 'It is certain';
    } else if (randomNr === 1) {
        eightBall = 'It is decidedly so';
    } else if (randomNr === 2) {
        eightBall = 'Without a doubt';
    } else if (randomNr === 3) {
        eightBall = 'Yes, definitely';
    } else if (randomNr === 4) {
        eightBall = 'You may rely on it';
    } else if (randomNr === 5) {
        eightBall = 'Ask again later';
    } else if (randomNr === 6) {
        eightBall = 'Reply hazy, try again';
    } else if (randomNr === 7) {
        eightBall = 'Better not tell you now';
    } else if (randomNr === 8) {
        eightBall = 'Cannot predict now';
    } else if (randomNr === 9) {
        eightBall = 'Concentrate and ask again';
    } else if (randomNr === 10) {
        eightBall = 'My answer is no';
    } else if (randomNr === 11) {
        eightBall = 'My sources say no';
    } else if (randomNr === 12) {
        eightBall = 'Don\'t count on it';
    } else if (randomNr === 13) {
        eightBall = 'Outlook not so good';
    } else {
        eightBall = 'Very doubtful';
    }
    document.getElementById("8balloutput").innerHTML = eightBall;
}