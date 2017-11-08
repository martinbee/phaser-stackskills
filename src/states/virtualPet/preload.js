// load the game assets before the game starts
export default function preload() {
  this.load.image('backyard', 'assets/virtualPet/images/backyard.png');
  this.load.image('apple', 'assets/virtualPet/images/apple.png');
  this.load.image('candy', 'assets/virtualPet/images/candy.png');
  this.load.image('rotate', 'assets/virtualPet/images/rotate.png');
  this.load.image('toy', 'assets/virtualPet/images/rubber_duck.png');
  this.load.image('arrow', 'assets/virtualPet/images/arrow.png');
  this.load.spritesheet('pet', 'assets/virtualPet/images/pet.png', 97, 83, 5, 1, 1);
}
