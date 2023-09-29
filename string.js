const predictions = [
    "Вселенная слышит и понимает тебя. Не торопи события.",
    "Не знаешь, что делать – сделай уборку. Это всегда помогает!",
    "Чудеса случаются, особенно если хорошо над ними поработать.",
    "Порадуйся тому, что у тебя есть, и стремись к большему!",
    "Если чувствуешь, что это твоё, никого не слушай – рискни!",
    "Прежде чем принять окончательное решение, обдумай всё еще один разок!",
    "Помни, что терпение – это последний ключ, открывающий все двери.",
    "Дойдя до конца, не останавливайся – это начало чего-то нового.",
    "Цени неудачи – это возможность начать снова, но более мудро.",
    "Один день, проведённый в новом месте, даёт больше, чем 10 лет, проведённые дома.",
    "Только ты определяешь пределы своих возможностей. Не ограничивай себя!",
    "Кто-то прямо сейчас рассчитывает на твою поддержку. Не отказывай.",
    "Самое смешное желание — это нравиться всем.",
    "Лучшее —  враг хорошего.",
    "Обратная сторона кризиса — новые возможности.",
    "Делай, что можешь, используя то, что есть, там, где ты сейчас.",
    "Ты надеешься не напрасно!",
    "Отпусти свое прошлое: оно исчерпало себя.",
    "Заверши то, что начал.",
    "Доверяй тому, что с тобой происходит."
]

const stringStartBtn = document.querySelector("#stringStartBtn");
const stringStopBtn = document.querySelector("#stringStopBtn");
const stringPredictionText = document.querySelector("#stringPrediction");

function startPredictions() {
    let randomPrediction = predictions[Math.floor(Math.random()* predictions.length)];
    stringPredictionText.textContent = randomPrediction;
}

stringStartBtn.addEventListener("click", () => {
    stringPredictionText.style.opacity = "1";
    let timerID = setInterval(startPredictions, 80);

    stringStopBtn.addEventListener("click", () => {
        clearInterval(timerID);
    })
})

