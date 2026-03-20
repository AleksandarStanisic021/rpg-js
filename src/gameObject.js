import { TILE_SIZE, COLS, ROWS } from "./main.js";

export class GameObject {
  constructor() {}
  draw(ctx) {
    ctx.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
  }
}

