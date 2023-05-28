const cardsBicyclesData = [
    {
        title: 'First bike',
        imgUrl: 'assets/fourth-bike.png',
        date: '04.01.2020',
    },
    {
        title: 'Second bike',
        imgUrl: 'assets/second-bike.png',
        date: '01.14.2021',
    },
    {
        title: 'Third bike',
        imgUrl: 'assets/seventh-bike.png',
        date: '01.20.2022',
    },
    {
        title: 'Fourth bike',
        imgUrl: 'assets/fourth-bike.png',
        date: '04.05.2020',
    },
    {
        title: 'Fifth bike',
        imgUrl: 'assets/sixth-bike.png',
        date: '04.01.2019',
    },
    {
        title: 'First bike',
        imgUrl: 'assets/seventh-bike.png',
        date: '01.01.2020',
    },
    {
        title: 'Second bike',
        imgUrl: 'assets/second-bike.png',
        date: '01.06.2022',
    },
    {
        title: 'Third bike',
        imgUrl: 'assets/fourth-bike.png',
        date: '05.06.2023',
    },
    {
        title: 'Fourth bike',
        imgUrl: 'assets/sixth-bike.png',
        date: '05.24.2028',
    },
    {
        title: 'Fifth bike',
        imgUrl: 'assets/seventh-bike.png',
        date: '01.03.2015',
    }
]

const cardsSkateboardsData = [
    {
        title: 'First skate',
        imgUrl: 'assets/first_skate.png',
        date: '07.10.2020',
    },
    {
        title: 'Second skate',
        imgUrl: 'assets/second_skate.png',
        date: '01.02.2017',
    },
    {
        title: 'Third skate',
        imgUrl: 'assets/first_skate.png',
        date: '01.01.2016',
    },
    {
        title: 'Fourth skate',
        imgUrl: 'assets/second_skate.png',
        date: '01.01.2015',
    },
    {
        title: 'Fifth skate',
        imgUrl: 'assets/first_skate.png',
        date: '04.04.2020',
    },
    {
        title: 'First skate',
        imgUrl: 'assets/second_skate.png',
        date: '07.29.2023',
    },
    {
        title: 'Second skate',
        imgUrl: 'assets/first_skate.png',
        date: '10.25.2048',
    },
    {
        title: 'Third skate',
        imgUrl: 'assets/second_skate.png',
        date: '11.01.1970',
    },
    {
        title: 'Fourth skate',
        imgUrl: 'assets/first_skate.png',
        date: '12.01.2021',
    },
    {
        title: 'Fifth skate',
        imgUrl: 'assets/second_skate.png',
        date: '03.01.2022',
    },
    {
        title: 'First skate',
        imgUrl: 'assets/first_skate.png',
        date: '07.04.2023',
    },
    {
        title: 'Second skate',
        imgUrl: 'assets/second_skate.png',
        date: '05.03.2023',
    },
    {
        title: 'Third skate',
        imgUrl: 'assets/first_skate.png',
        date: '04.07.2024',
    },
    {
        title: 'Fourth skate',
        imgUrl: 'assets/second_skate.png',
        date: '01.01.2025',
    },
    {
        title: 'Fifth skate',
        imgUrl: 'assets/first_skate.png',
        date: '01.01.2026',
    },
]

const cardsScootersData = [
    {
        title: 'First scooter',
        imgUrl: 'assets/first-scooter.png',
        date: '04.01.2021',
    },
    {
        title: 'Second scooter',
        imgUrl: 'assets/second-scooter.png',
        date: '06.01.2020',
    },
    {
        title: 'Third scooter',
        imgUrl: 'assets/third-scooter.png',
        date: '08.01.2023',
    },
    {
        title: 'Fourth scooter',
        imgUrl: 'assets/third-scooter.png',
        date: '04.21.2022',
    },
    {
        title: 'Fifth scooter',
        imgUrl: 'assets/second-scooter.png',
        date: '09.10.2020',
    },
    {
        title: 'First scooter',
        imgUrl: 'assets/first-scooter.png',
        date: '12.11.2020',
    },
    {
        title: 'Second scooter',
        imgUrl: 'assets/second-scooter.png',
        date: '12.12.2012',
    },
    {
        title: 'Third scooter',
        imgUrl: 'assets/third-scooter.png',
        date: '09.07.2023',
    },
    {
        title: 'Fourth scooter',
        imgUrl:  'assets/first-scooter.png',
        date: '01.01.2023',
    },
    {
        title: 'Fifth scooter',
        imgUrl: 'assets/second-scooter.png',
        date: '01.06.2022',
    },
    {
        title: 'First scooter',
        imgUrl: 'assets/third-scooter.png',
        date: '10.08.2024',
    },
]


const buyButton = document.querySelector('.card-btn');
const form = document.querySelector('.form');
const formTextArea = document.querySelector('.form-textarea')
const orderFormBtn = document.querySelector('.order-btn');
const closeFormBtn = document.querySelector('.close-btn');
const body = document.querySelector('.body');
const changeThemeButton = document.querySelector('.change-theme-btn');
const card = document.querySelector('.card');
const main = document.querySelector('.main');
const categoryTitle = document.querySelector('.category-title');
const secondCategoryTitle = document.querySelector('.second-category-title');
const thirdCategoryTitle = document.querySelector('.third-category-title');
const formQuantity = document.querySelector('.form-quantity');
const navLinkFooter = document.querySelector('.nav-link-footer')
const secondNavLinkFooter = document.querySelector('.first-nav-link-footer')
const thirdNavLinkFooter = document.querySelector('.second-nav-link-footer')

changeThemeButton.addEventListener('click', function() {
    body.classList.toggle('dark');
    categoryTitle.classList.toggle('dark-text');
    secondCategoryTitle.classList.toggle('dark-text');
    thirdCategoryTitle.classList.toggle('dark-text');
    form.classList.toggle('dark');
    form.classList.toggle('dark-text');
    orderFormBtn.classList.toggle('light-text');
    closeFormBtn.classList.toggle('light-text');
    formQuantity.classList.toggle('light-text');
    formTextArea.classList.toggle('light-text');
    navLinkFooter.classList.toggle('dark-text');
    secondNavLinkFooter.classList.toggle('dark-text');
    thirdNavLinkFooter.classList.toggle('dark-text');

    if (body.classList.contains('dark')) {
        changeThemeButton.innerText = 'Dark theme';
    } else {
        changeThemeButton.innerText = 'Light theme';
    }
});

function renderCards(data, selector) {
    const container = document.querySelector(selector);
    const renderedCards = data.map(function(item){
        const templateCard = document.querySelector('#template-card').content.querySelector('.card').cloneNode(true);
        const cardTitle = templateCard.querySelector('.card-name');
        const cardImg = templateCard.querySelector('.card-img');
        const cardDate = templateCard.querySelector('.card-date');
        const cardButton = templateCard.querySelector('.card-btn');
        cardTitle.textContent = item.title;
        cardDate.textContent = getDayInfo(item.date); 
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
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];  
      
    const monthes = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    const dayOfTheWeek = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const weekNumber = Math.ceil(date.getDate() / 7)
   
    return(`${days[dayOfTheWeek]}, ${weekNumber} week of ${monthes[month]} ${year}`);
}
