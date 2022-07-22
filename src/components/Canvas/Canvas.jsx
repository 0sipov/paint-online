import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import canvasState from "../../store/canvasState";

import Brush from "../../tools/Brush";

import { CanvasWrapper } from "./Canvas.style";

import theme from "../../theme/theme";
import toolState from "../../store/toolState";
const canvasWidth = parseInt(theme.sizes.width.canvas);
const canvasHeight = parseInt(theme.sizes.height.canvas);

const Canvas = observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  return (
    <CanvasWrapper>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </CanvasWrapper>
  );
});

export default Canvas;
