import styled from "styled-components";

export const Bar = styled.div`
  display: block;
  width: 100%;
  height: ${(props) => props.theme.sizes.height.bar};
  background-color: ${(props) => props.theme.colors.bar};
  box-shadow: ${(props) => props.theme.shadows.bar};
`;
