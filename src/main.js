import "./style.css";
import { World } from "./world.js";
import { Hero } from "./hero.js";
import { Input } from "./input.js";

export const TILE_SIZE = 32;
export const COLS = 15;
export const ROWS = 20;
export const GAME_WIDTH = TILE_SIZE * COLS;
export const GAME_HEIGHT = TILE_SIZE * ROWS;

let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

class Game {
  constructor() {
    this.world = new World();
    this.input = new Input();
    this.hero = new Hero({ game: this, position: { x: 3, y: 7 } });
  }
  update() {}

  render(ctx) {
    this.world.drawGrid(ctx);
    this.hero.update();
    this.hero.draw(ctx);
  }
}

const game = new Game();

function animate(timestamp) {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.render(ctx);
  requestAnimationFrame(animate);
}
animate(0);
