const dogName = document.getElementById('name')
const button = document.getElementById('btn')

const breed = document.getElementById('breed')
const bredFor = document.getElementById('bredfor')
const lifeSpan = document.getElementById('lifespan')
const tamperament = document.getElementById('tamperament')
const height = document.getElementById('height')
const weight = document.getElementById('weight')

const photo = document.getElementById('photo')

button.addEventListener('click', fetchDog)

async function fetchDog() {
    const response = (await axios.get('https://api.freeapi.app/api/v1/public/dogs/dog/random')).data
    console.log(response.data);
    dogName.innerText = response.data.name
    breed.innerText = response.data.breed_group
    bredFor.innerText = response.data.bred_for
    lifeSpan.innerText = response.data.life_span
    tamperament.innerText = response.data.temperament
    height.innerText = response.data.height.metric + " cm"
    weight.innerText = response.data.weight.metric + " kg"
    photo.style.backgroundImage = `url(${response.data.image.url})`
    photo.style.backgroundSize = "cover"

}