import './index.html'
import './pets.html'
import './sass/main.scss'

const bd =  [
  {
    "name": "Jennifer",
    "img": "assets/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Lebed",
    "img": "assets/lebed.png",
    "type": "lebed",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "assets/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", " distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "assets/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "assets/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "assets/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "assets/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "assets/charly.png",
    "type": "lebed",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other lebeds, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

//----------------------Carusel-------------------------//
const prevSlide = document.querySelector('.pagination-wrapper-btn_left-wrapper')
const nextSlide = document.querySelector('.pagination-wrapper-btn_right-wrapper')
const pagination = document.querySelector('.pagination')
const cardPrev = document.querySelector('.card__first');
const cardSecond = document.querySelector('.card__second');
const cardTherd = document.querySelector('.card__last');
const cards = document.querySelectorAll('.card');


let pastArr = [];
let currArr = [];
let nextArr = [];

const rundomCurrentNextArr = () => {
  while (currArr.length < 6 ) {
    let num = Math.ceil(Math.random()*7)
    if(!currArr.includes(num)){
      currArr.push(num)
    }
  }
  
  nextArr = currArr.splice(3, 6)
}

rundomCurrentNextArr()

const rundomCurrentPrevArr = () => { //нет ноля
  while (currArr.length < 6 ) {
    let num = Math.ceil(Math.random()*7)
    if(!currArr.includes(num)){
      currArr.push(num)
    }
  }
  
  pastArr = currArr.splice(3, 6)
}

rundomCurrentPrevArr()
// console.log(pastArr, currArr, nextArr);

const initCurrArr = () => {
  const[first, second, therd] = currArr;

    cardSecond.insertAdjacentHTML('beforeend', 
    `<div class="card" data-animal="${bd[first].name}"><img src="${bd[first].img}" alt="${bd[first].name}"> <span class="card__title">${bd[first].name}</span><button class="button card__button">Learn more</button></div>`)
 
    cardSecond.insertAdjacentHTML('beforeend', 
    `<div class="card " data-animal="${bd[second].name}"><img src="${bd[second].img}" alt="${bd[second].name}"> <span class="card__title">${bd[second].name}</span><button class="button card__button">Learn more</button></div>`)
 
    cardSecond.insertAdjacentHTML('beforeend', 
    `<div class="card" data-animal="${bd[therd].name}"><img src="${bd[therd].img}" alt="${bd[therd].name}"> <span class="card__title">${bd[therd].name}</span><button class="button card__button">Learn more</button></div>`)
}

initCurrArr()

const initNextArr = () => {
  const[first, second, therd] = nextArr;

   cardTherd.insertAdjacentHTML('beforeend', 
    `<div class="card" data-animal="${bd[first].name}"><img src="${bd[first].img}" alt="${bd[first].name}"> <span class="card__title">${bd[first].name}</span><button class="button card__button">Learn more</button></div>`)
 
    cardTherd.insertAdjacentHTML('beforeend', 
    `<div class="card" data-animal="${bd[second].name}"><img src="${bd[second].img}" alt="${bd[second].name}"> <span class="card__title">${bd[second].name}</span><button class="button card__button">Learn more</button></div>`)
 
    cardTherd.insertAdjacentHTML('beforeend', 
    `<div class="card" data-animal="${bd[therd].name}"><img src="${bd[therd].img}" alt="${bd[therd].name}"> <span class="card__title">${bd[therd].name}</span><button class="button card__button">Learn more</button></div>`)
}

initNextArr()

const initPastArr = () => {
  const[first, second, therd] = pastArr;

    cardPrev.insertAdjacentHTML('beforeend', 
    `<div class="card" data-animal="${bd[first].name}"><img src="${bd[first].img}" alt="${bd[first].name}"> <span class="card__title">${bd[first].name}</span><button class="button card__button">Learn more</button></div>`)
 
    cardPrev.insertAdjacentHTML('beforeend', 
    `<div class="card" data-animal="${bd[second].name}"><img src="${bd[second].img}" alt="${bd[second].name}"> <span class="card__title">${bd[second].name}</span><button class="button card__button">Learn more</button></div>`)
 
    cardPrev.insertAdjacentHTML('beforeend', 
    `<div class="card" data-animal="${bd[therd].name}"><img src="${bd[therd].img}" alt="${bd[therd].name}"> <span class="card__title">${bd[therd].name}</span><button class="button card__button">Learn more</button></div>`)
}

initPastArr()


const transitionLeft = () => {
  pagination.classList.add('slideLeft')
}

const transitionRight = () => {
  pagination.classList.add('slideRight')
}

prevSlide.addEventListener('click', () => {
  transitionLeft()
  nextSlide.classList.add('disabled__carusel')
  prevSlide.classList.add('disabled__carusel')
})

nextSlide.addEventListener('click', () => {
  transitionRight()
  nextSlide.classList.add('disabled__carusel')
  prevSlide.classList.add('disabled__carusel')
})

pagination.addEventListener('animationend', (animationEvent) => {
  const cards = document.querySelectorAll('.card');
  if(animationEvent.animationName === 'slideToRight'){
    prevSlide.classList.remove('disabled__carusel')
    nextSlide.classList.remove('disabled__carusel')
    pagination.classList.remove('slideRight')
    cardSecond.innerHTML = cardTherd.innerHTML
    cardPrev.innerHTML = ''
    cardTherd.innerHTML = ''
    currArr = nextArr;
    rundomCurrentNextArr()
    rundomCurrentPrevArr()
    initNextArr()
    initPastArr()
    modalActive(cards)
  } else {
    prevSlide.classList.remove('disabled__carusel')
    nextSlide.classList.remove('disabled__carusel')
    pagination.classList.remove('slideLeft')
    cardSecond.innerHTML = cardPrev.innerHTML;
    cardPrev.innerHTML = ''
    cardTherd.innerHTML = ''
    currArr = pastArr;
    rundomCurrentNextArr()
    rundomCurrentPrevArr()
    initPastArr()
    initNextArr()
    modalActive(cards)
  }
})

//----------------------burger-------------------------//
const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const burgerBody = document.querySelector('.burger__body');
const navigation = document.querySelector('.navigation');
const nav = document.querySelector('.nav');

//remove berger fn
const removeBurger = () => {
  nav.classList.remove('open');
  body.classList.remove('lock')
}

//on-off burger menu
const burgerOnOff = () => {
  nav.classList.toggle('open');
  body.classList.toggle('lock')
}

//click onto links
const linkSets = (event) => {
  if(event.target.classList.contains('navigation__link')){
    removeBurger()
  }
}

burger && burger.addEventListener('click', () => {
  burgerOnOff()
})

navigation.addEventListener('click', (event) => {
  linkSets(event)
})

//close burgerMenu clicking out burgerMenu
body.addEventListener('click', (event) => {
  if(!event.target.closest('.burger')){
    removeBurger()
  } 
})

//stop bubling
burgerBody && burgerBody.addEventListener('click', (event) => {
  event.stopPropagation()
})

//----------------------modal-------------------------//
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');

//appear modal window
const modalView = () => {
  modal.classList.add('active')
  body.classList.add('lock__cards')
}

//close modal window by outClick
const closeModal = () => {
  modal.addEventListener('click', (event) => {
    if(!event.target.closest('.modal__body')){
      modal.classList.remove('active')
      body.classList.remove('lock__cards')
    }
  })
}

//close modal window by button
close && close.addEventListener('click', () => {
  modal.classList.remove('active')
  body.classList.remove('lock__cards')
})

//set data
const modalData = (data) => {
  for (let i = 0; i < bd.length; i++) {
    if (data === bd[i].name) {

      const title = document.querySelector('.modal__title');
      const img = document.querySelector('.modal__img');
      const type = document.querySelector('.modal__type');
      const text = document.querySelector('.modal__text');
      const age = document.querySelector('.modal__age');
      const inoculations = document.querySelector('.modal__inoculations');
      const diseases = document.querySelector('.modal__diseases');
      const parasites = document.querySelector('.modal__parasites');

      title.textContent = bd[i].name;
      img.src = bd[i].img;
      type.textContent = `${bd[i].type} - ${bd[i].breed}`
      text.textContent = bd[i].description;
      age.textContent = bd[i].age;
      inoculations.textContent = bd[i].inoculations;
      diseases.textContent = bd[i].diseases;
      parasites.textContent = bd[i].parasites;

    }
}}
  
//modal working
const modalActive = () => {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      
      let data = card.getAttribute('data-animal')
      modalView()
      modalData(data)
      closeModal()
    })
  })
}

modalActive()