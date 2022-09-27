import Tool from "./Tool";

import toolState from "../store/toolState";

export default class Rect extends Tool {
  isMousDown = false;
  startLine = null;
  saved = null;

  constructor(canvas) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  mouseUpHandler(e) {
    this.isMousDown = false;
  }
  mouseDownHandler(e) {
    this.isMousDown = true;
    this.startLine = {
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop,
    };
    this.saved = this.canvas.toDataURL();
  }
  mouseMoveHandler(e) {
    if (this.isMousDown) {
      this.drow(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }
  }

  drow(x, y) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.strokeStyle = toolState.color;
      this.ctx.beginPath();
      this.ctx.moveTo(this.startLine.x, this.startLine.y);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    };
  }
}
