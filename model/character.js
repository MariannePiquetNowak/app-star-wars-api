export class Character {
  constructor(character) {
    this.name = this.checkUnknown(character.name);
    this.birthYear = this.checkUnknown(character.birth_year);
    this.height = this.checkUnknown(character.height);
    this.mass = this.checkUnknown(character.mass);
    this.planet = this.checkUnknown(character.homeworld);
    this.films = [];
  }

  checkUnknown(value) {
    return value.toLowerCase().includes('unknown') ? 'Non renseignée' : value;
  }

  displayCharacter() {
    const films = document.getElementById('films');
    films.innerHTML = null;

    const nameCharacter = document.getElementById('name');
    nameCharacter.innerHTML = this.name;

    const birth = document.getElementById('birth');
    birth.innerHTML = this.birthYear;

    const height = document.getElementById('height');
    height.innerHTML = this.height;

    const mass = document.getElementById('mass');
    mass.innerHTML = this.mass;
    
    const planet = document.getElementById('planet');
    planet.innerHTML = this.planet;
  }

  displayFilms() {
    let filmList = '';
    const films = document.getElementById('films');
    for (const film of this.films) {
      filmList += `<li>${film.title}</li>`;
    }
    films.innerHTML = `<ul>${filmList}</ul>`;
  }
}


// Cette class sert à définir les caractéristiques du personnage
