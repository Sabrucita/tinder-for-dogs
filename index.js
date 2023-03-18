const currentDogElement = document.getElementById('currentDog')
const API = 'https://dog.ceo/api/breeds/image/random'
const spinner = document.getElementById('spinner')
const likeDogsContainer = document.getElementById('likeDogsContainer')
const dislikeDogsContainer = document.getElementById('dislikeDogsContainer')

spinner.classList.add('hidden')
// likeDogsContainer.classList.add('hidden')
// dislikeDogsContainer.classList.add('hidden')

document.getElementById('like').addEventListener('click', ()=> rankingDogs('+'))
document.getElementById('dislike').addEventListener('click', ()=> rankingDogs('-'))
document.getElementById('skip').addEventListener('click', newDog)

currentDogElement.addEventListener('load', ()=>{
  currentDogElement.classList.toggle('hidden',false)
  spinner.classList.toggle('hidden',true)
})

async function newDog() {
  spinner.classList.toggle('hidden',false)
  currentDogElement.classList.toggle('hidden',true)
  const res = await fetch(API);
  const resJson = await res.json();
  currentDogElement.src = resJson.message;
}

function rankingDogs(ranking) {
  const newImg = document.createElement('img')
  newImg.src = currentDogElement.src
  if(ranking === '+'){
    likeDogsContainer.appendChild(newImg)
    likeDogsContainer.classList.toggle('hidden',false)
  } else {
    dislikeDogsContainer.appendChild(newImg)
    dislikeDogsContainer.classList.toggle('hidden',false)
  }
  newDog()
}

newDog();