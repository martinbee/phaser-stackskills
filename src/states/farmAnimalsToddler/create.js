import Phaser from 'phaser';

const animalData = [
  { key: 'chicken', text: 'CHICKEN' },
  { key: 'horse', text: 'HORSE' },
  { key: 'pig', text: 'PIG' },
  { key: 'sheep', text: 'SHEEP' },
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

  animalData.forEach(({ key, text }) => {
    const animal = this.animals.create(-1000, centerY, key);

    animal.customParams = { text };
    animal.anchor.setTo(0.5);

    enableClickEvents(animal);
    animal.events.onInputDown.add(this.animateAnimal, this);
  });

  this.currentAnimal = this.animals.next();
  this.currentAnimal.position.set(centerX, centerY);

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
};
