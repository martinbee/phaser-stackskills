export default function preload() {
  this.load.image('background', 'assets/farmAnimalsToddler/images/background.png');
  this.load.image('arrow', 'assets/farmAnimalsToddler/images/arrow.png');

  this.load.spritesheet('chicken', 'assets/farmAnimalsToddler/images/chicken_spritesheet.png', 131, 200, 3);
  this.load.spritesheet('horse', 'assets/farmAnimalsToddler/images/horse_spritesheet.png', 212, 200, 3);
  this.load.spritesheet('pig', 'assets/farmAnimalsToddler/images/pig_spritesheet.png', 297, 200, 3);
  this.load.spritesheet('sheep', 'assets/farmAnimalsToddler/images/sheep_spritesheet.png', 244, 200, 3);

  this.load.audio('chickenSound', ['assets/farmAnimalsToddler/audio/chicken.ogg', 'assets/farmAnimalsToddler/audio/chicken.mp3']);
  this.load.audio('horseSound', ['assets/farmAnimalsToddler/audio/horse.ogg', 'assets/farmAnimalsToddler/audio/horse.mp3']);
  this.load.audio('pigSound', ['assets/farmAnimalsToddler/audio/pig.ogg', 'assets/farmAnimalsToddler/audio/pig.mp3']);
  this.load.audio('sheepSound', ['assets/farmAnimalsToddler/audio/sheep.ogg', 'assets/farmAnimalsToddler/audio/sheep.mp3']);
}
