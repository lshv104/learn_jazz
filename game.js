const params = new URLSearchParams(window.location.search);
const input = params.get('input');
const q_mode = params.get('scale');
const questionBox = document.getElementById('question-box');
var questionText = '';
var correct_answer = 0;
const note = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
const affix = ["가", "의"];

// 카운트 다운
function showCountdownAndQuestion() {
    const countdown = [4, 3, 2, 1];
    let index = 0;

    const timer = setInterval(() => {
        if (index < countdown.length) {
            questionBox.textContent = countdown[index];
            index++;
        } else {
            clearInterval(timer);
            questionGen();
        }
    }, 1000);
}

//랜덤 문제 생성
function questionGen() {
    questionText = '문제: ';
    q_note = Math.floor(Math.random() * 12);
    q_affix = Math.floor(Math.random() * 2);
    if (q_mode == 'major') {
        const interval = ["1도", "2도", "3도", "4도", "5도", "6도", "7도"];
        q_interval = Math.floor(Math.random() * 7);
        if (q_affix == 1) {
            switch (q_interval) {
                case 0:
                    correct_answer = (q_note + 0) % 12;
                    break;
                case 1:
                    correct_answer = (q_note + 2) % 12;
                    break;
                case 2:
                    correct_answer = (q_note + 4) % 12;
                    break;
                case 3:
                    correct_answer = (q_note + 5) % 12;
                    break;
                case 4:
                    correct_answer = (q_note + 7) % 12;
                    break;
                case 5:
                    correct_answer = (q_note + 9) % 12;
                    break;
                case 6:
                    correct_answer = (q_note + 11) % 12;
                    break;
            }
        }
        else if (q_affix == 0) {
            switch (q_interval) {
                case 0:
                    correct_answer = (q_note - 0 + 12) % 12;
                    break;
                case 1:
                    correct_answer = (q_note - 2 + 12) % 12;
                    break;
                case 2:
                    correct_answer = (q_note - 4 + 12) % 12;
                    break;
                case 3:
                    correct_answer = (q_note - 5 + 12) % 12;
                    break;
                case 4:
                    correct_answer = (q_note - 7 + 12) % 12;
                    break;
                case 5:
                    correct_answer = (q_note - 9 + 12) % 12;
                    break;
                case 6:
                    correct_answer = (q_note - 11 + 12) % 12;
                    break;
            }
        }
        questionText = questionText + note[q_note] + affix[q_affix] + " " + interval[q_interval];
        questionBox.textContent = questionText;
    }
    else {
        const interval = ["완전1도", "단2도", "장2도", "단3도", "장3도", "감4도", "완전4도", "증4도", "감5도", "완전5도", "증5도", "단6도", "장6도", "단7도", "장7도"];
        q_interval = Math.floor(Math.random() * 15);
        if (q_affix == 1) {
            switch (q_interval) {
                case 0:
                    correct_answer = (q_note + 0) % 12;
                    break;
                case 1:
                    correct_answer = (q_note + 1) % 12;
                    break;
                case 2:
                    correct_answer = (q_note + 2) % 12;
                    break;
                case 3:
                    correct_answer = (q_note + 3) % 12;
                    break;
                case 4:
                    correct_answer = (q_note + 4) % 12;
                    break;
                case 5:
                    correct_answer = (q_note + 4) % 12;
                    break;
                case 6:
                    correct_answer = (q_note + 5) % 12;
                    break;
                case 7:
                    correct_answer = (q_note + 6) % 12;
                    break;
                case 8:
                    correct_answer = (q_note + 6) % 12;
                    break;
                case 9:
                    correct_answer = (q_note + 7) % 12;
                    break;
                case 10:
                    correct_answer = (q_note + 8) % 12;
                    break;
                case 11:
                    correct_answer = (q_note + 8) % 12;
                    break;
                case 12:
                    correct_answer = (q_note + 9) % 12;
                    break;
                case 13:
                    correct_answer = (q_note + 10) % 12;
                    break;
                case 14:
                    correct_answer = (q_note + 11) % 12;
                    break;    
            }
        }
        else {
            switch (q_interval) {
                case 0:
                    correct_answer = (q_note - 0 + 12) % 12;
                    break;
                case 1:
                    correct_answer = (q_note - 1 + 12) % 12;
                    break;
                case 2:
                    correct_answer = (q_note - 2 + 12) % 12;
                    break;
                case 3:
                    correct_answer = (q_note - 3 + 12) % 12;
                    break;
                case 4:
                    correct_answer = (q_note - 4 + 12) % 12;
                    break;
                case 5:
                    correct_answer = (q_note - 4 + 12) % 12;
                    break;
                case 6:
                    correct_answer = (q_note - 5 + 12) % 12;
                    break;
                case 7:
                    correct_answer = (q_note - 6 + 12) % 12;
                    break;
                case 8:
                    correct_answer = (q_note - 6 + 12) % 12;
                    break;
                case 9:
                    correct_answer = (q_note - 7 + 12) % 12;
                    break;
                case 10:
                    correct_answer = (q_note - 8 + 12) % 12;
                    break;
                case 11:
                    correct_answer = (q_note - 8 + 12) % 12;
                    break;
                case 12:
                    correct_answer = (q_note - 9 + 12) % 12;
                    break;
                case 13:
                    correct_answer = (q_note - 10 + 12) % 12;
                    break;
                case 14:
                    correct_answer = (q_note - 11 + 12) % 12;
                    break;    
            }
        }
        questionText = questionText + note[q_note] + affix[q_affix] + " " + interval[q_interval];
        questionBox.textContent = questionText;
    }
}

// 피아노 키보드 로드 함수
function loadKeyboard() {
    const whiteKeys = ['0', '2', '4', '5', '7', '9', '11'];
    const blackKeys = ['1', '3', '', '6', '8', '10', ''];
    const keyboard = document.getElementById('keyboard');

    for (let i = 0; i < whiteKeys.length; i++) {
        const key = document.createElement('div');
        key.className = 'key white';
        key.dataset.note = whiteKeys[i];
        keyboard.appendChild(key);

        if (blackKeys[i]) {
            const blackKey = document.createElement('div');
            blackKey.className = 'key black';
            blackKey.dataset.note = blackKeys[i];
            blackKey.style.left = `${i * 52 + 47}px`;
            keyboard.appendChild(blackKey);
        }
    }

    document.querySelectorAll('.key').forEach(k => {
        k.addEventListener('click', () => {
            if (k.dataset.note == correct_answer) {
                alert(`정답`);
                questionGen();
            }
            else {
                alert('오답');
            }
        });
    });
}

// 음이름 버튼 이벤트
document.querySelectorAll('.note-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id == correct_answer) {
            alert(`정답`);
            questionGen();
        }
        else {
            alert('오답');
        }
    });
});

// 입력 모드에 따라 UI 보이기
showCountdownAndQuestion();
if (input === 'note') {
    document.getElementById('note-input').style.display = 'block';
} else if (input === 'piano') {
    loadKeyboard();
    document.getElementById('keyboard').style.display = 'block';
}
