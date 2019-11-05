import { Character } from './model/character.js';

window.loadRandomCharacter = loadRandomCharacter;

const baseUrl = `https://swapi.co/api/`;  
let characterList = [];

window.onload = () => { // Window.onload : le code ne s'éxécutera qu'au moment où l'on arrive sur la page.
getCharacterList(); // J'appelle ma liste au chargement de la page
let opacity = 0.1;
  const fader = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(fader);
    }
    document.body.style.opacity = opacity;
    opacity += opacity * 0.1;

  }, 60);
}

async function getCharacterList() {
  let lastPage = false;
  let i = 1;

  while (!lastPage) {
    const response = await axios.get(`${baseUrl}people/?page=${i}`);
    characterList = characterList.concat(response.data.results);
    response.data.next ? i++ : lastPage = true;
  }
}

async function loadRandomCharacter() {
  // console.log(characterList.length);  
  const i = Math.floor(Math.random() * (characterList.length - 0 + 1)) + 0;
  const randomCharacter = characterList[i]
  const planet = await axios.get(randomCharacter.homeworld);
  randomCharacter.homeworld = planet.data.name.toLowerCase().includes('unknown') ? 'Non renseignée' : planet.data.name;  
  const character = new Character(randomCharacter);  
  // console.log(character);
  character.displayCharacter();
}



