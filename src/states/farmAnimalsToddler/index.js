// can extract these methods into other files so long as this.object is
// correctly set throughout code
export default {
  preload() {
    this.load.image('background', 'assets/farmAnimalsToddler/images/background.png');
  },
  create() {
    this.background = this.game.add.sprite(0, 0, 'background');
  },
  update() {
  },
};
