export class Character {
  constructor(character) {
    this.name = character.name;
    this.birthYear = character.birth_year;
    this.height = character.height;
    this.mass = character.mass;
    this.planet = character.homeworld;
  }

  displayCharacter() {
    const desc = document.getElementById('desc');
    desc.innerHTML = `Nom: ${this.name}</br>`
    desc.innerHTML += `Date de Naissance: ${this.birthYear}</br>`;
    desc.innerHTML += `Mesure: ${this.height}</br>`;
    desc.innerHTML += `Pèse: ${this.mass}</br>`;
    desc.innerHTML += `Planète d'origine: ${this.planet}</br>`
  }
}

// Cette class sert à définir les caractéristiques du personnage
