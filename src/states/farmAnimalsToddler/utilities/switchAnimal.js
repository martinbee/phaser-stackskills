export default function switchAnimal(sprite) {
  if (this.isMoving) return false;

  this.isMoving = true;
  this.animalText.visible = false;

  const {
    centerX,
  } = this.game.world;

  let newAnimal;
  let endX;

  const isRightDirection = sprite.customParams.direction > 0;

  const outOfViewLeft = el => -(el.width / 2);
  const outOfViewRight = el => 640 + (el.width / 2);

  if (isRightDirection) {
    newAnimal = this.animals.next();
    newAnimal.x = outOfViewLeft(newAnimal);

    endX = outOfViewRight(this.currentAnimal);
  } else {
    newAnimal = this.animals.previous();
    newAnimal.x = outOfViewRight(newAnimal);

    endX = outOfViewLeft(this.currentAnimal);
  }

  const newAnimalMovement = this.game.add.tween(newAnimal);
  newAnimalMovement.to({ x: centerX }, 1000);
  newAnimalMovement.onComplete.add(() => {
    this.isMoving = false;
    this.showText(this.currentAnimal);
  });
  newAnimalMovement.start();

  const currentAnimalMovement = this.game.add.tween(this.currentAnimal);
  currentAnimalMovement.to({ x: endX }, 1000);
  currentAnimalMovement.start();

  this.currentAnimal = newAnimal;

  return true;
}
