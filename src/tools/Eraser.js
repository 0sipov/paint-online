import Tool from "./Tool";

export default class Brush extends Tool {
  isMousDown = false;

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
    this.ctx.beginPath();
    this.ctx.moveTo(
      e.pageX - e.target.offsetLeft,
      e.pageY - e.target.offsetTop
    );
  }
  mouseMoveHandler(e) {
    if (this.isMousDown) {
      this.drow(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }
  }

  drow(x, y) {
    this.ctx.lineTo(x, y);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
  }
}
