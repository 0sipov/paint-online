import styled from "styled-components";
import { Bar } from "../Bar";

export const ToolBarWrapper = styled(Bar)`
  position: absolute;
  top: 0;
  top: ${(props) => props.theme.sizes.height.bar};
`;
