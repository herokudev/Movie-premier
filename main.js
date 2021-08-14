const menuIcon = document.querySelector('#menuIcon');
const closeBtn = document.querySelector('#closeIcon');
const menuContainer = document.querySelector('.menu-container');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
  closeBtn.style.display = 'block';
  menuContainer.style.height = '500px';
  navList.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  closeBtn.style.display = 'none';
  menuContainer.style.height = '0px';
  navList.style.display = 'none';
});

navList.addEventListener('click', () => {
  closeBtn.style.display = 'none';
  menuContainer.style.height = '0px';
  navList.style.display = 'none';
});

// -------CODE TO LOAD PAGE DYNAMICALLY---------
const cardList = document.querySelector('#cardList');
const myCard = document.querySelector('#myCard');

const myData = [{
  actorImg: 'images/actor1.png',
  actorName: 'Scarlett Johansson',
  actorTitle: 'Natasha Romanoff',
  actorDataDesc: 'Natasha plays as the main character aka The Black Widow.',
},
{
  actorImg: 'images/actor2.png',
  actorName: 'Florence Pugh',
  actorTitle: 'Yelena',
  actorDataDesc: 'Yelena plays as young sister of Natasha.',
},
{
  actorImg: 'images/actor3.png',
  actorName: 'David Harbour',
  actorTitle: 'Alexi',
  actorDataDesc: 'Natasha plays as the Red Guardian.',
},
];

var temp1 = myCard.content;
var card1 = document.importNode(temp1,true);
const actorImg1 = card1.querySelector('#actorPicture');
const actorName1 = card1.querySelector('#actorPeopleName');
const actorTitle1 = card1.querySelector('#actorCharacterName');
const actorDataDesc1 = card1.querySelector('#actorDescription');
actorImg1.src = myData[0].actorImg;
actorName1.textContent = myData[0].actorName;
actorTitle1.textContent = myData[0].actorTitle;
actorDataDesc1.textContent = myData[0].actorDataDesc;
cardList.appendChild(card1);


var temp2 = myCard.content;
var card2 = document.importNode(temp2,true);
const actorImg2 = card2.querySelector('#actorPicture');
const actorName2 = card2.querySelector('#actorPeopleName');
const actorTitle2 = card2.querySelector('#actorCharacterName');
const actorDataDesc2 = card2.querySelector('#actorDescription');
actorImg2.src = myData[1].actorImg;
actorName2.textContent = myData[1].actorName;
actorTitle2.textContent = myData[1].actorTitle;
actorDataDesc2.textContent = myData[1].actorDataDesc;
cardList.appendChild(card2);

var temp3 = myCard.content;
var card3 = document.importNode(temp3,true);
const actorImg3 = card3.querySelector('#actorPicture');
const actorName3 = card3.querySelector('#actorPeopleName');
const actorTitle3 = card3.querySelector('#actorCharacterName');
const actorDataDesc3 = card3.querySelector('#actorDescription');
actorImg3.src = myData[2].actorImg;
actorName3.textContent = myData[2].actorName;
actorTitle3.textContent = myData[2].actorTitle;
actorDataDesc3.textContent = myData[2].actorDataDesc;
cardList.appendChild(card3);
