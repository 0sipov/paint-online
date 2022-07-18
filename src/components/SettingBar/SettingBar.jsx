import React from "react";

import { SettingBarWrapper, StyledButton } from "./SettingBar.styles";
import { Menu } from "../Menu";

import Brush from "../../img/brush.svg";
import Rect from "../../img/rect.svg";
import Circle from "../../img/circle.svg";
import Eraser from "../../img/eraser.svg";
import Line from "../../img/line.svg";
import Redo from "../../img/redo.svg";
import Undo from "../../img/undo.svg";
import Save from "../../img/save.svg";

const SettingBar = () => {
  return (
    <SettingBarWrapper>
      <Menu>
        <StyledButton imgPath={Brush} />
        <StyledButton imgPath={Rect} />
        <StyledButton imgPath={Circle} />
        <StyledButton imgPath={Eraser} />
        <StyledButton imgPath={Line} />
        <input type="color" />
      </Menu>
      <Menu>
        <StyledButton imgPath={Undo} />
        <StyledButton imgPath={Redo} />
        <StyledButton imgPath={Save} />
      </Menu>
    </SettingBarWrapper>
  );
};

export default SettingBar;
