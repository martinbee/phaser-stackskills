import Phaser from 'phaser';

const animalData = [
  { key: 'chicken', text: 'CHICKEN', audio: 'chickenSound' },
  { key: 'horse', text: 'HORSE', audio: 'horseSound' },
  { key: 'pig', text: 'PIG', audio: 'pigSound' },
  { key: 'sheep', text: 'SHEEP', audio: 'sheepSound' },
];

const enableClickEvents = (object) => {
  object.inputEnabled = true;
  object.input.pixelPerfectClick = true;
};

export default function create() {
  const {
    centerX,
    centerY,
  } = this.game.world;

  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;

  this.background = this.game.add.sprite(0, 0, 'background');

  this.animals = this.game.add.group();

  animalData.forEach(({ key, text, audio }) => {
    const animal = this.animals.create(-1000, centerY, key, 0);

    animal.customParams = {
      text,
      sound: this.game.add.audio(audio),
    };

    animal.anchor.setTo(0.5);

    animal.animations.add('animate', [0, 1, 2, 1, 0, 1], 3, false);

    enableClickEvents(animal);
    animal.events.onInputDown.add(this.animateAnimal, this);
  });

  this.currentAnimal = this.animals.next();
  this.currentAnimal.position.set(centerX, centerY);

  // show animal text
  this.showText(this.currentAnimal);

  // left arrow
  this.leftArrow = this.game.add.sprite(60, centerY, 'arrow');
  this.leftArrow.anchor.setTo(0.5);
  this.leftArrow.scale.x = -1;
  this.leftArrow.customParams = { direction: -1 };

  enableClickEvents(this.leftArrow);
  this.leftArrow.events.onInputDown.add(this.switchAnimal, this);

  // right arrow
  this.rightArrow = this.game.add.sprite(580, centerY, 'arrow');
  this.rightArrow.anchor.setTo(0.5);
  this.rightArrow.customParams = { direction: 1 };

  enableClickEvents(this.rightArrow);
  this.rightArrow.events.onInputDown.add(this.switchAnimal, this);
}
