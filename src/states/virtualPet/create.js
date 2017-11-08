// execute after everything is loaded
export default function create() {
  this.background = this.game.add.sprite(0, 0, 'backyard');

  this.pet = this.game.add.sprite(100, 400, 'pet');
  this.pet.anchor.setTo(0.5);
  this.pet.customParams = {
    health: 100,
    fun: 100,
  };

  this.apple = this.game.add.sprite(72, 570, 'apple');
  this.candy = this.game.add.sprite(144, 570, 'candy');
  this.toy = this.game.add.sprite(216, 570, 'toy');
  this.rotate = this.game.add.sprite(288, 570, 'rotate');
}
