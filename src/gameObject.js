import { TILE_SIZE, COLS, ROWS } from "./main.js";

export class GameObject {
  constructor({ game, sprite, position, scale }) {
    this.game = game;
    this.sprite = sprite ?? {
      x: 0,
      y: 0,
      width: TILE_SIZE,
      height: TILE_SIZE,
      image: "",
    };
    this.position = position ?? { x: 0, y: 0 };
    this.scale = scale ?? 1;
  }
  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, TILE_SIZE, TILE_SIZE);
  }
}
