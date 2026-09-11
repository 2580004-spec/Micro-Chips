// Interactive Quiz Logic
function checkAnswer(isCorrect) {
    const resultElement = document.getElementById('quiz-result');
    
    if (!isCorrect) {
        resultElement.innerText = "正解です！マイクロチップはNFC/RFID技術を使用しているため、バッテリーは不要です。";
        resultElement.style.color = "green";
    } else {
        resultElement.innerText = "不正解です。マイクロチップは充電不要で、リーダーにかざした時のみ作動します。";
        resultElement.style.color = "red";
    }
}
