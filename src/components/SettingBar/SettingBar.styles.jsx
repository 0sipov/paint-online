import styled from "styled-components";
import { Bar } from "../Bar";
import { Button } from "../Button";

export const SettingBarWrapper = styled(Bar)`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const StyledButton = styled(Button)`
  margin: 0 5px;
  background: url(${(props) => props.imgPath}) no-repeat center center;
`;
