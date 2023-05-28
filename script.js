const cardsBicyclesData = [
    {
        title: 'First bike',
        imgUrl: 'assets/first-bike.png',
        date: '01.01.2020',
    },
    {
        title: 'Second bike',
        imgUrl: 'assets/first-bike.png',
        date: '01.02.2020',
    },
    {
        title: 'Third bike',
        imgUrl: 'assets/first-bike.png',
        date: '01.01.2020',
    },
    {
        title: 'Fourth bike',
        imgUrl: 'assets/first-bike.png',
        date: '01.01.2020',
    },
    {
        title: 'Fifth bike',
        imgUrl: 'assets/first-bike.png',
        date: '01.01.2020',
    },
    {
        title: 'First bike',
        imgUrl: 'assets/first-bike.png',
        date: '01.01.2020',
    },
    {
        title: 'Second bike',
        imgUrl: 'assets/first-bike.png',
        date: '01.01.2020',
    },
    {
        title: 'Third bike',
        imgUrl: 'assets/first-bike.png',
        date: '01.01.2020',
    },
    {
        title: 'Fourth bike',
        imgUrl: 'assets/first-bike.png',
        date: '01.01.2020',
    },
    {
        title: 'Fifth bike',
        imgUrl: 'assets/first-bike.png',
        date: '01.01.2020',
    }
]

const cardsSkateboardsData = [
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.02.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Skate',
        imgUrl: 'assets/first_skate.jpg',
        date: '01.01.2020',
    },
]

const cardsScootersData = [
    {
        title: 'Scooter',
        imgUrl: 'assets/first-scooter.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Scooter',
        imgUrl: 'assets/first-scooter.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Scooter',
        imgUrl: 'assets/first-scooter.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Scooter',
        imgUrl: 'assets/first-scooter.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Scooter',
        imgUrl: 'assets/first-scooter.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Scooter',
        imgUrl: 'assets/first-scooter.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Scooter',
        imgUrl: 'assets/first-scooter.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Scooter',
        imgUrl: 'assets/first-scooter.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Scooter',
        imgUrl: 'assets/first-scooter.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Scooter',
        imgUrl: 'assets/first-scooter.jpg',
        date: '01.01.2020',
    },
    {
        title: 'Scooter',
        imgUrl: 'assets/first-scooter.jpg',
        date: '01.01.2020',
    },
]


const buyButton = document.querySelector('.card-btn');
const form = document.querySelector('.form');
const orderFormBtn = document.querySelector('.order-btn');
const closeFormBtn = document.querySelector('.close-btn');
const body = document.querySelector('.body');




function renderCards(data, selector) {
    const container = document.querySelector(selector);
    const renderedCards = data.map(function(item){
        const templateCard = document.querySelector('#template-card').content.querySelector('.card').cloneNode(true);
        const cardTitle = templateCard.querySelector('.card-name');
        const cardImg = templateCard.querySelector('.card-img');
        const cardDate = templateCard.querySelector('.card-date');
        const cardButton = templateCard.querySelector('.card-btn');
        cardTitle.textContent = item.title;
        cardDate.textContent = getDayInfo(item.date); // getDayInfo(item.date);
        cardImg.setAttribute('src', item.imgUrl);
        cardButton.addEventListener('click', function() {
            form.classList.add('active');
        })
        return templateCard;
    })
    
    renderedCards.forEach(function(item) {
        container.append(item);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    renderCards(cardsBicyclesData, '#bicycles');
});
document.addEventListener("DOMContentLoaded", function() {
    renderCards(cardsSkateboardsData, '#skateboards');
});
document.addEventListener("DOMContentLoaded", function() {
    renderCards(cardsScootersData, '#scooters');
});




closeFormBtn.addEventListener('click', function() {
    form.classList.remove('active');
})

form.addEventListener('submit', function() {
    alert('The order has been successfully completed');
    form.classList.remove('active');
})

window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.upward');
    scroll.classList.toggle('active', window.scrollY > 300);
})

function scrollToTop() {
    window.scrollTo ({
        top: 0,
        behavior: 'smooth'
    });
};





function getDayInfo(currentDate) {
    const date = new Date(currentDate);
    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ];    
    let dayOfTheWeek = date.getDay();
    return(days[dayOfTheWeek]);
}
