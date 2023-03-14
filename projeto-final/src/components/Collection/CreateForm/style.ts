import styled from "styled-components";

export const StyledModalCreate = styled.div`
  z-index: 11;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  color: var(--color-grey-00);
  overflow-y: auto;
  padding: 16px;
`;
