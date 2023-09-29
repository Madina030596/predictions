const cards = [
    {
        image: '//img//cards/house.png',
        text: 'Новое жильё',
    },

    {
        image: '/img/cards/love.png',
        text: 'Любовь',
    },
    
    {
        image: '/img/cards/car.png',
        text: 'Новая машина',
    },

    {
        image: '/img/cards/gift.png',
        text: 'Сюрприз',
    },

    {
        image: '/img/cards/money.png',
        text: 'Денежная прибыль',
    },
    
    {
        image: '/img/cards/travel.png',
        text: 'Путешествие',
    },

    {
        image: '/img/cards/teaching.png',
        text: 'Новые знания',
    },

    {
        image: '/img/cards/news.png',
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






