import React from "react";

import toolState from "../../store/toolState";
import canvasState from "../../store/canvasState";

import Brush from "../../tools/Brush";
import Rect from "../../tools/Rect";
import Ellipse from "../../tools/Ellipse";
import Eraser from "../../tools/Eraser";
import Line from "../../tools/Line";

import { SettingBarWrapper, StyledButton } from "./SettingBar.styles";
import { Menu } from "../Menu";

import BrushImg from "../../img/brush.svg";
import RectImg from "../../img/rect.svg";
import CircleImg from "../../img/circle.svg";
import EraserImg from "../../img/eraser.svg";
import LineImg from "../../img/line.svg";
import RedoImg from "../../img/redo.svg";
import UndoImg from "../../img/undo.svg";
import SaveImg from "../../img/save.svg";

const SettingBar = () => {
  return (
    <SettingBarWrapper>
      <Menu>
        <StyledButton
          imgPath={BrushImg}
          onClick={() => {
            toolState.setTool(new Brush(canvasState.canvas));
          }}
        />
        <StyledButton
          imgPath={RectImg}
          onClick={() => {
            toolState.setTool(new Rect(canvasState.canvas));
          }}
        />
        <StyledButton
          imgPath={CircleImg}
          onClick={() => {
            toolState.setTool(new Ellipse(canvasState.canvas));
          }}
        />
        <StyledButton
          imgPath={EraserImg}
          onClick={() => {
            toolState.setTool(new Eraser(canvasState.canvas));
          }}
        />
        <StyledButton
          imgPath={LineImg}
          onClick={() => {
            toolState.setTool(new Line(canvasState.canvas));
          }}
        />
        <input type="color" />
      </Menu>
      <Menu>
        <StyledButton imgPath={UndoImg} />
        <StyledButton imgPath={RedoImg} />
        <StyledButton imgPath={SaveImg} />
      </Menu>
    </SettingBarWrapper>
  );
};

export default SettingBar;
