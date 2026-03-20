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

let world = new World();
world.drawGrid(ctx);

let input = new Input();
console.log(input.keys);

const h = new Hero({
  position: { x: 3, y: 7 },
});
h.draw(ctx);
