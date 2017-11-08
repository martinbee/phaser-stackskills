import { ScaleManager } from 'phaser';

// initiate some game level settings
export default function init() {
  this.scale.scaleMode = ScaleManager.SHOW_ALL;
  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
}
