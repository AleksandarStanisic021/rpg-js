import { TILE_SIZE, COLS, ROWS } from "./main.js";

export class World {
  constructor() {
    this.level1 = {};
    this.drawGrid = function (context) {
      for (let i = 0; i < COLS; i++) {
        for (let j = 0; j < ROWS; j++) {
          context.strokeRect(
            i * TILE_SIZE,
            j * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE,
          );
        }
      }
    };
  }
}
