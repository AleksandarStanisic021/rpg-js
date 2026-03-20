import { GameObject } from "./gameObject.js";

export class Hero extends GameObject {
  constructor({ game, sprite, position, scale }) {
    super({ game, sprite, position, scale });
  }
  update() {
    if (this.game.input.keys.indexOf("ArrowUp") > -1) {
      this.position.y -= 0.1;
    } else if (this.game.input.keys.indexOf("ArrowDown") > -1) {
      this.position.y += 0.1;
    } else if (this.game.input.keys.indexOf("ArrowLeft") > -1) {
      this.position.x -= 0.1;
    } else if (this.game.input.keys.indexOf("ArrowRight") > -1) {
      this.position.x += 0.1;
    }
  }
}
