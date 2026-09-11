// Interactive Quiz Logic
function checkAnswer(isCorrect) {
    const resultElement = document.getElementById('quiz-result');
    
    if (!isCorrect) {
        resultElement.innerText = "မှန်ကန်ပါသည်။ Microchip များသည် NFC/RFID စနစ်ကို အသုံးပြုထားသဖြင့် ဘက်ထရီ မလိုအပ်ပါ။";
        resultElement.style.color = "green";
    } else {
        resultElement.innerText = "မှားယွင်းပါသည်။ Microchip များသည် အားသွင်းရန် မလိုအပ်ပါ၊ ဖတ်စက်အနားရောက်မှ အလုပ်လုပ်ပါသည်။";
        resultElement.style.color = "red";
    }
}