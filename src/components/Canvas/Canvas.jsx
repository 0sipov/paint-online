import React from "react";
import { CanvasWrapper } from "./Canvas.style";
import theme from "../../theme/theme";
const canvasWidth = parseInt(theme.sizes.width.canvas);
const canvasHeight = parseInt(theme.sizes.height.canvas);

const Canvas = () => {
  return (
    <CanvasWrapper>
      <canvas width={canvasWidth} height={canvasHeight} />
    </CanvasWrapper>
  );
};

export default Canvas;
