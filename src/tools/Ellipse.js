import Tool from "./Tool";

export default class Ellipse extends Tool {
  isMousDown = false;
  center = null;
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
    this.saved = this.canvas.toDataURL();
    this.isMousDown = true;
    this.center = {
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop,
    };
  }
  mouseMoveHandler(e) {
    if (this.isMousDown) {
      this.drow(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }
  }

  drow(x, y) {
    this.ctx.beginPath();
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.ellipse(
        this.center.x,
        this.center.y,
        Math.abs(this.center.x - x),
        Math.abs(this.center.y - y),
        0,
        90,
        90
      );
      this.ctx.stroke();
    };
  }
}
