import { Character } from './model/character.js';
import { Film } from './model/film.js';

window.loadRandomCharacter = loadRandomCharacter;
window.loadRandomCharacterFilms = loadRandomCharacterFilms;


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

let character;

async function loadRandomCharacter() { 
  const i = (Math.floor(Math.random() * (characterList.length - 0 + 1)) + 0) - 1 ;
  const randomCharacter = characterList[i];
  console.log(randomCharacter);
  console.log(characterList);
  console.log(i);
  
  const planet = await axios.get(randomCharacter.homeworld);  
  randomCharacter.homeworld = planet.data.name;  
  character = new Character(randomCharacter);  
  character.displayCharacter();

  for (const filmUrl of randomCharacter.films) {
    const film = await axios.get(filmUrl);

    // film = new Film(film.data)
    // character.films.push(film);
    // Ou sinon, plus rapide : 
    character.films.push(new Film(film.data));
  }
}

function loadRandomCharacterFilms() {
  character.displayFilms();
}



/* 
Note à moi-même : 
Penser à réaliser des pop-up pour expliquer le principe de l'app
et permettre de faire attendre l'utilisateur, le temps que tous 
les appels soient chargés
*/


