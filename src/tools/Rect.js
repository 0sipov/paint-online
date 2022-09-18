import Tool from "./Tool";

export default class Rect extends Tool {
  isMousDown = false;
  startRect = null;
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
    this.startRect = {
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
      this.ctx.beginPath();
      this.ctx.strokeRect(
        this.startRect.x,
        this.startRect.y,
        x - this.startRect.x,
        y - this.startRect.y
      );
    };
  }
}
