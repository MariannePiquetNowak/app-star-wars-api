export class Character {
  constructor(character) {
    this.name = character.name;
    this.birthYear = character.birth_year;
    this.height = character.height;
    this.mass = character.mass;
    this.planet = character.homeworld;
  }

  displayCharacter() {
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
}


// Cette class sert à définir les caractéristiques du personnage
