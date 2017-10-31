export default game => ({
  preload() {
    game.load.image('logo', './assets/images/phaser.png');
  },
  create() {
    const logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');

    logo.anchor.setTo(0.5, 0.5);
  },
  update() {

  },
});
