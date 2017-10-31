import Phaser from 'phaser';

// can extract these methods into other files so long as this.object is
// correctly set throughout code

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

export default {
  preload() {
    this.load.image('background', 'assets/farmAnimalsToddler/images/background.png');
    this.load.image('chicken', 'assets/farmAnimalsToddler/images/chicken.png');
    this.load.image('horse', 'assets/farmAnimalsToddler/images/horse.png');
    this.load.image('pig', 'assets/farmAnimalsToddler/images/pig.png');
    this.load.image('sheep', 'assets/farmAnimalsToddler/images/sheep.png');
    this.load.image('arrow', 'assets/farmAnimalsToddler/images/arrow.png');
  },

  create() {
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
  },

  update() {
  },

  switchAnimal(sprite) {
    let newAnimal;
    let endX;

    const isRightDirection = sprite.customParams.direction > 0;

    if (isRightDirection) {
      newAnimal = this.animals.next();
      endX = 640 + (this.currentAnimal.width / 2);
    } else {
      newAnimal = this.animals.previous();
      endX = -(this.currentAnimal.width / 2);
    }

    this.currentAnimal.x = endX;

    newAnimal.x = this.game.world.centerX;
    this.currentAnimal = newAnimal;
  },

  animateAnimal(sprite) {
    console.log('animate animal', sprite);
  },
};
