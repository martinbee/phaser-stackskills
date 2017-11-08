import 'pixi';
import 'p2';
import Phaser from 'phaser';

//import farmAnimalsToddlerState from './states/farmAnimalsToddler/index';
import virtualPetState from './states/virtualPet/index';

// config
const {
  GAME_WIDTH,
  GAME_HEIGHT,
  GAME_RENDERER,
  GAME_ENTRY_POINT,
} = process.env;

const width = GAME_WIDTH || 640;
const height = GAME_HEIGHT || 360;
const renderer = GAME_RENDERER || Phaser.AUTO;
const entryPoint = GAME_ENTRY_POINT || '';

// initialize game
const game = new Phaser.Game(width, height, renderer, entryPoint);

// farm animals toodler
//game.state.add('GameState', farmAnimalsToddlerState);

// virtual pet
game.state.add('GameState', virtualPetState);

game.state.start('GameState');
