const cards = [
    {
        image: 'https://cdn.glitch.global/04bf5ab8-0364-4aca-a75d-797d02d7369b/house.png?v=1654001578204',
        text: 'Новое жильё',
    },

    {
        image: 'https://cdn.glitch.global/04bf5ab8-0364-4aca-a75d-797d02d7369b/love.png?v=1654001584317',
        text: 'Любовь',
    },
    
    {
        image: 'https://cdn.glitch.global/04bf5ab8-0364-4aca-a75d-797d02d7369b/car.png?v=1654001569056',
        text: 'Новая машина',
    },

    {
        image: 'https://cdn.glitch.global/04bf5ab8-0364-4aca-a75d-797d02d7369b/gift.png?v=1654001572826',
        text: 'Сюрприз',
    },

    {
        image: 'https://cdn.glitch.global/04bf5ab8-0364-4aca-a75d-797d02d7369b/money.png?v=1654001589490',
        text: 'Денежная прибыль',
    },
    
    {
        image: 'https://cdn.glitch.global/04bf5ab8-0364-4aca-a75d-797d02d7369b/travel.png?v=1654001605389',
        text: 'Путешествие',
    },

    {
        image: 'https://cdn.glitch.global/04bf5ab8-0364-4aca-a75d-797d02d7369b/teaching.png?v=1654001599302',
        text: 'Новые знания',
    },

    {
        image: 'https://cdn.glitch.global/04bf5ab8-0364-4aca-a75d-797d02d7369b/news.png?v=1654001592807',
        text: 'Неожиданные новости',
    }
]

const backCard = document.querySelectorAll("#back");
const frontCard = document.querySelectorAll("#front");
const restartBtn = document.querySelector("#restartBtn");

backCard.forEach(item => {
    let img = item.firstElementChild;
    let text = item.lastElementChild;

    let index = [Math.floor(Math.random()*cards.length)];
    img.src = cards[index].image;
    text.textContent = cards[index].text;
})

frontCard.forEach((item) => {
    item.addEventListener('click', ()=> {
        const parent = item.parentNode;
        const child = parent.childNodes;

        item.style.transform = 'rotateY(180deg)';
        child[3].style.transform = 'rotateY(360deg)';
    })
})

restartBtn.addEventListener("click", () => {
    location.reload();
})






