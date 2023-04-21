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

// -----------pagination-------------------//

const newPats = []
const page1 = []
const page2 = []
const page3 = []
const page4 = []
const page5 = []
const page6 = []
const page7 = []
const page8 = []
const page9 = []
const page10 = []
const page11 = []
const page12 = []
const page13 = []
const page14 = []
const page15 = []
const page16 = []

const generatePats = () => {
  bd.forEach((pet) => {
    for (let i = 0; i < 6; i++) {
      newPats.push(Object.assign({}, pet))
    }
  })
}

generatePats()

let countItems = 0;

const sizeScreen = () => {
  if(window.screen.width > 768){
    countItems = 8
    console.log(countItems);

  }
  else if(window.screen.width <= 768 && window.screen.width > 649){
    countItems = 6
    console.log(countItems);

  } 
  else if(window.screen.width<=649) {
      countItems = 3
      console.log(countItems);
  }
}

sizeScreen()

window.addEventListener('resize', sizeScreen)

const generatePage1 = (countItems) => {
  if(newPats.length > 0){
    while (page1.length < countItems) {
      const num = Math.round(Math.random()*47)
      let commonItem = page1.find(el => el && el.name ===  newPats[num].name)
      if (!commonItem) {
        page1.push(newPats[num])
      }
    }
  } 
}
  
const generatePage2 = (countItems) => {
  if(newPats.length > 0){
    while (page2.length < countItems) {
      const num = Math.round(Math.random()*47)
    let commonItem = page2.find(el => el && el.name ===  newPats[num].name)  
    if (!commonItem) {
      page2.push(newPats[num])
    }
    }
  }
}

const generatePage3 = countItems => {
  if(newPats.length > 0){
    while (page3.length < countItems) {
      const num = Math.round(Math.random()*47)
    let commonItem = page3.find(el => el && el.name ===  newPats[num].name)
    if (!commonItem) {
      page3.push(newPats[num])
    }
    }
  }
}

const generatePage4 = (countItems) => {
  if(newPats.length > 0){
    while (page4.length < countItems) {
      const num = Math.round(Math.random()*47)

      if(page4.length > 0){
        let commonItem = page4.find(el => el.name ===  newPats[num].name)
        if (!commonItem) {
          page4.push(newPats[num])
        }
      } else {
        page4.push(newPats[num])
      }
    }
  }
}

const generatePage5 = (countItems) => {
  if(newPats.length > 0){
    while (page5.length < countItems) {
      const num = Math.round(Math.random()*47)
    let commonItem = page5.find(el => el && el.name ===  newPats[num].name)
    if (!commonItem) {
      page5.push(newPats[num])
    }
  }
  }
}

const generatePage6 = (countItems) => {
  if(newPats.length > 0){
    while (page6.length < countItems) {
      const num = Math.round(Math.random()*47)
    let commonItem = page6.find(el => el && el.name ===  newPats[num].name)
    if (!commonItem) {
      page6.push(newPats[num])
    }
  }
  }
}

const generatePage7 = (countItems) => {
  if(newPats.length > 0){
    while (page7.length < countItems) {
      const num = Math.round(Math.random()*47)
      let commonItem = page7.find(el => el && el.name ===  newPats[num].name)
      if (!commonItem) {
        page7.push(newPats[num])
      }
    }
  } 
}
  
const generatePage8 = (countItems) => {
  if(newPats.length > 0){
    while (page8.length < countItems) {
      const num = Math.round(Math.random()*47)
    let commonItem = page8.find(el => el && el.name ===  newPats[num].name)  
    if (!commonItem) {
      page8.push(newPats[num])
    }
    }
  }
}

const generatePage9 = countItems => {
  if(newPats.length > 0){
    while (page9.length < countItems) {
      const num = Math.round(Math.random()*47)
    let commonItem = page9.find(el => el && el.name ===  newPats[num].name)
    if (!commonItem) {
      page9.push(newPats[num])
    }
    }
  }

}

const generatePage10 = (countItems) => {
  if(newPats.length > 0){
    while (page10.length < countItems) {
      const num = Math.round(Math.random()*47)
      if(page10.length > 0){
        let commonItem = page10.find(el => el.name ===  newPats[num].name)
        if (!commonItem) {
          page10.push(newPats[num])
        }
      } else {
        page10.push(newPats[num])
      }
    }
  }
}

const generatePage11 = (countItems) => {
  if(newPats.length > 0){
    while (page11.length < countItems) {
      const num = Math.round(Math.random()*47)
    let commonItem = page11.find(el => el && el.name ===  newPats[num].name)
    if (!commonItem) {
      page11.push(newPats[num])
    }
  }
  }
}

const generatePage12 = (countItems) => {
  if(newPats.length > 0){
    while (page12.length < countItems) {
      const num = Math.round(Math.random()*47)
    let commonItem = page12.find(el => el && el.name ===  newPats[num].name)
    if (!commonItem) {
      page12.push(newPats[num])
    }
  }
  }
}
const generatePage13 = (countItems) => {
  if(newPats.length > 0){
    while (page13.length < countItems) {
      const num = Math.round(Math.random()*47)
    let commonItem = page13.find(el => el && el.name ===  newPats[num].name)
    if (!commonItem) {
      page13.push(newPats[num])
    }
  }
  }
}
const generatePage14 = (countItems) => {
  if(newPats.length > 0){
    while (page14.length < countItems) {
      const num = Math.round(Math.random()*47)
    let commonItem = page14.find(el => el && el.name ===  newPats[num].name)
    if (!commonItem) {
      page14.push(newPats[num])
    }
  }
  }
}
const generatePage15 = (countItems) => {
  if(newPats.length > 0){
    while (page15.length < countItems) {
      const num = Math.round(Math.random()*47)
    let commonItem = page15.find(el => el && el.name ===  newPats[num].name)
    if (!commonItem) {
      page15.push(newPats[num])
    }
  }
  }
}
const generatePage16 = (countItems) => {
  if(newPats.length > 0){
    while (page16.length < countItems) {
      const num = Math.round(Math.random()*47)
    let commonItem = page16.find(el => el && el.name ===  newPats[num].name)
    if (!commonItem) {
      page16.push(newPats[num])
    }
  }
  }
}

generatePage1(countItems)
generatePage2(countItems)
generatePage3(countItems)
generatePage4(countItems)
generatePage5(countItems)
generatePage6(countItems)
generatePage7(countItems)
generatePage8(countItems)
generatePage9(countItems)
generatePage10(countItems)
generatePage11(countItems)
generatePage12(countItems)
generatePage13(countItems)
generatePage14(countItems)
generatePage15(countItems)
generatePage16(countItems)
// console.log(page1)
// console.log(page2)
// console.log(page3)
// console.log(page4)
// console.log(page5)
// console.log(page6)
// console.log(page7)
// console.log(page8)
// console.log(page9)
// console.log(page10)
// console.log(page11)
// console.log(page12)
// console.log(page13)
// console.log(page14)
// console.log(page15)
// console.log(page16)

const insertPage = (arr) => {
  
  const firstPat = document.querySelector('.pets__first')
  const secondPat = document.querySelector('.pets__second')
  const therdPat = document.querySelector('.pets__therd')
  const fourPat = document.querySelector('.pets__four')
  const fivePat = document.querySelector('.pets__five')
  const sixPat = document.querySelector('.pets__six')
  const sevenPat = document.querySelector('.pets__seven')
  const eightPat = document.querySelector('.pets__eight')

  if(countItems === 8){
    firstPat.dataset.animal = arr[0].name;
    firstPat.children[0].alt = arr[0].name
    firstPat.children[0].src = arr[0].img
    firstPat.children[1].textContent = arr[0].name;
    
    secondPat.dataset.animal = arr[1].name;
    secondPat.children[0].alt = arr[1].name
    secondPat.children[1].textContent = arr[1].name;
    secondPat.children[0].src = arr[1].img
  
    therdPat.dataset.animal = arr[2].name;
    therdPat.children[0].alt = arr[2].name
    therdPat.children[1].textContent = arr[2].name;
    therdPat.children[0].src = arr[2].img
  
    fourPat.dataset.animal = arr[3].name;
    fourPat.children[0].alt = arr[3].name
    fourPat.children[1].textContent = arr[3].name;
    fourPat.children[0].src = arr[3].img
  
    fivePat.dataset.animal = arr[4].name;
    fivePat.children[0].alt = arr[4].name
    fivePat.children[1].textContent = arr[4].name;
    fivePat.children[0].src = arr[4].img
  
    sixPat.dataset.animal = arr[5].name;
    sixPat.children[0].alt = arr[5].name
    sixPat.children[1].textContent = arr[5].name;
    sixPat.children[0].src = arr[5].img
  
    sevenPat.dataset.animal = arr[6].name;
    sevenPat.children[0].alt = arr[6].name
    sevenPat.children[1].textContent = arr[6].name;
    sevenPat.children[0].src = arr[6].img
  
    eightPat.dataset.animal = arr[7].name;
    eightPat.children[0].alt = arr[7].name
    eightPat.children[1].textContent = arr[7].name;
    eightPat.children[0].src = arr[7].img

   } else if (countItems === 6){
    firstPat.dataset.animal = arr[0].name;
    firstPat.children[0].alt = arr[0].name
    firstPat.children[1].textContent = arr[0].name;
    firstPat.children[0].src = arr[0].img
  
    secondPat.dataset.animal = arr[1].name;
    secondPat.children[0].alt = arr[1].name
    secondPat.children[1].textContent = arr[1].name;
    secondPat.children[0].src = arr[1].img
  
    therdPat.dataset.animal = arr[2].name;
    therdPat.children[0].alt = arr[2].name
    therdPat.children[1].textContent = arr[2].name;
    therdPat.children[0].src = arr[2].img
  
    fourPat.dataset.animal = arr[3].name;
    fourPat.children[0].alt = arr[3].name
    fourPat.children[1].textContent = arr[3].name;
    fourPat.children[0].src = arr[3].img
  
    fivePat.dataset.animal = arr[4].name;
    fivePat.children[0].alt = arr[4].name
    fivePat.children[1].textContent = arr[4].name;
    fivePat.children[0].src = arr[4].img
  
    sixPat.dataset.animal = arr[5].name;
    sixPat.children[0].alt = arr[5].name
    sixPat.children[1].textContent = arr[5].name;
    sixPat.children[0].src = arr[5].img

    } else if (countItems === 3){
    firstPat.dataset.animal = arr[0].name;
    firstPat.children[0].alt = arr[0].name
    firstPat.children[1].textContent = arr[0].name;
    firstPat.children[0].src = arr[0].img
  
    secondPat.dataset.animal = arr[1].name;
    secondPat.children[0].alt = arr[1].name
    secondPat.children[1].textContent = arr[1].name;
    secondPat.children[0].src = arr[1].img
  
    therdPat.dataset.animal = arr[2].name;
    therdPat.children[0].alt = arr[2].name
    therdPat.children[1].textContent = arr[2].name;
    therdPat.children[0].src = arr[2].img
 } 
}

insertPage(page1)

const buttons = document.querySelectorAll('.pagination_pets_value')
const btnPage = document.querySelector('.btn-page1')
const doubleLeft = document.querySelector('.double_left')
const doubleRight = document.querySelector('.double_right')
const oneLeft = document.querySelector('.one_left')
const oneRight = document.querySelector('.one_right')

const disable = () => {
  btnPage.textContent === '1' ? doubleLeft.classList.add('disabled') : doubleLeft.classList.remove('disabled') 
  btnPage.textContent === '1' ? oneLeft.classList.add('disabled') : oneLeft.classList.remove('disabled')
  if(countItems === 8){
    btnPage.textContent === '6' ? doubleRight.classList.add('disabled') : doubleRight.classList.remove('disabled') 
    btnPage.textContent === '6' ? oneRight.classList.add('disabled') : oneRight.classList.remove('disabled')
  } else if (countItems === 6){
    btnPage.textContent === '8' ? doubleRight.classList.add('disabled') : doubleRight.classList.remove('disabled') 
    btnPage.textContent === '8' ? oneRight.classList.add('disabled') : oneRight.classList.remove('disabled')
  } else if (countItems === 3){
    btnPage.textContent === '16' ? doubleRight.classList.add('disabled') : doubleRight.classList.remove('disabled') 
    btnPage.textContent === '16' ? oneRight.classList.add('disabled') : oneRight.classList.remove('disabled')
  } 
}

disable()

doubleRight.addEventListener('click', () => {
  if(countItems === 8){
    insertPage(page6)
    btnPage.textContent ='6' 
    disable()
  } else if (countItems === 6){
      insertPage(page8)
      btnPage.textContent ='8' 
      disable()
  } else if (countItems === 3){
      insertPage(page16)
      btnPage.textContent ='16' 
      disable()
  } 
})

doubleLeft.addEventListener('click', () => {
  insertPage(page1)
  btnPage.textContent = '1' 
  disable()
})

const nextPage = () => {
  
  if(btnPage.textContent === '1'){
    btnPage.textContent ='2'
    insertPage(page2)
    disable()
  } else if(btnPage.textContent === '2'){
    btnPage.textContent ='3'
    insertPage(page3)
    disable()
  } else if(btnPage.textContent === '3'){
    btnPage.textContent ='4'
    insertPage(page4)
    disable()
  } else if(btnPage.textContent === '4'){
    btnPage.textContent ='5'
    insertPage(page5)
    disable()
  } else if(btnPage.textContent === '5'){
    btnPage.textContent ='6'
    insertPage(page6)
    disable()
  } else if(btnPage.textContent === '6'){
    btnPage.textContent ='7'
    insertPage(page7)
    disable()
  } else if(btnPage.textContent === '7'){
    btnPage.textContent ='8'
    insertPage(page8)
    disable()
  } else if(btnPage.textContent === '8'){
    btnPage.textContent ='9'
    insertPage(page9)
    disable()
  } else if(btnPage.textContent === '9'){
    btnPage.textContent ='10'
    insertPage(page10)
    disable()
  } else if(btnPage.textContent === '10'){
    btnPage.textContent ='11'
    insertPage(page11)
    disable()
  } else if(btnPage.textContent === '11'){
    btnPage.textContent ='12'
    insertPage(page12)
    disable()
  } else if(btnPage.textContent === '12'){
    btnPage.textContent ='13'
    insertPage(page13)
    disable()
  } else if(btnPage.textContent === '13'){
    btnPage.textContent ='14'
    insertPage(page14)
    disable()
  } else if(btnPage.textContent === '14'){
    btnPage.textContent ='15'
    insertPage(page15)
    disable()
  } else if(btnPage.textContent === '15'){
    btnPage.textContent ='16'
    insertPage(page16)
    disable()
  } 
}
const prevPage = () => {
  if(btnPage.textContent === '16'){
    btnPage.textContent ='15'
    insertPage(page15)
    disable()
  } else if(btnPage.textContent === '15'){
    btnPage.textContent ='14'
    insertPage(page14)
    disable()
  } else if(btnPage.textContent === '14'){
    btnPage.textContent ='13'
    insertPage(page13)
    disable()
  } else if(btnPage.textContent === '13'){
    btnPage.textContent ='12'
    insertPage(page12)
    disable()
  } else if(btnPage.textContent === '12'){
    btnPage.textContent ='11'
    insertPage(page11)
    disable()
  } else if(btnPage.textContent === '11'){
    btnPage.textContent ='10'
    insertPage(page10)
    disable()
  } else if(btnPage.textContent === '10'){
    btnPage.textContent ='9'
    insertPage(page9)
    disable()
  } else if(btnPage.textContent === '9'){
    btnPage.textContent ='8'
    insertPage(page8)
    disable()
  } else if(btnPage.textContent === '8'){
    btnPage.textContent ='7'
    insertPage(page7)
    disable()
  } else if(btnPage.textContent === '7'){
    btnPage.textContent ='6'
    insertPage(page6)
    disable()
  } else if(btnPage.textContent === '6'){
    btnPage.textContent ='5'
    insertPage(page5)
    disable()
  } else if(btnPage.textContent === '5'){
    btnPage.textContent ='4'
    insertPage(page4)
    disable()
  } else if(btnPage.textContent === '4'){
    btnPage.textContent ='3'
    insertPage(page3)
    disable()
  } else if(btnPage.textContent === '3'){
    btnPage.textContent ='2'
    insertPage(page2)
    disable()
  } else if(btnPage.textContent === '2'){
    btnPage.textContent ='1'
    insertPage(page1)
    disable()
  } 
}

oneRight.addEventListener('click', nextPage)
oneLeft.addEventListener('click', prevPage)

// // -------------- modal -----------------//
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
  const cards = document.querySelectorAll('.pats__card');
  console.log(cards);
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
//for test
// ------------------burger---------------------//

const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const burgerBody = document.querySelector('.burger__body');
const navigation = document.querySelector('.navigation');
const nav = document.querySelector('.nav');
console.log(nav);

//remove berger fn
const removeBurger = () => {
  nav.classList.remove('open');
  // navigation.classList.remove('open');
  // burgerBody.classList.remove('openBurger');
  // burgerBody.classList.add('closeBurger');
  body.classList.remove('lock')
}


//on-off burger menu
const burgerOnOff = () => {
  nav.classList.toggle('open');
  // navigation.classList.toggle('open');
  // navigation.classList.toggle('burgerActive');
  // burgerBody.classList.toggle('openBurger');
  // burgerBody.classList.toggle('closeBurger');
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
