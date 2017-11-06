export default function showText(sprite) {
  if (!this.animalText) {
    const style = {
      font: 'bold 30pt Arial',
      align: 'center',
    };
    const textWidthPlacement = this.game.width / 2;
    const textHeightPlacement = this.game.height * 0.85;

    this.animalText = this.game.add.text(textWidthPlacement, textHeightPlacement, '', style);
    this.animalText.anchor.setTo(0.5);
  }

  this.animalText.setText(sprite.customParams.text);
  this.animalText.visible = true;
}
