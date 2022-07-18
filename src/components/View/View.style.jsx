import styled from "styled-components";

export const BackGround = styled.div`
  display: block;
  position: relative;
  padding-top: 100px;
  width: 100%;
  min-height: 100%;
  background-color: ${(props) => props.theme.colors.bg};
`;
