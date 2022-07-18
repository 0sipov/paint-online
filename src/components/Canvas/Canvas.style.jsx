import styled from "styled-components";

export const CanvasWrapper = styled.div`
  width: ${(props) => props.theme.sizes.width.canvas};
  height: ${(props) => props.theme.sizes.height.canvas};
  margin: auto;
  background-color: ${(props) => props.theme.colors.canvas};
  border: 1px solid ${(props) => props.theme.colors.canvasBorder};
`;
