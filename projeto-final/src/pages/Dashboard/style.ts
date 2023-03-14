import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-04);
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
  .colorBlue {
    color: var(--color-blue-00);
  }
  .iconBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 25px;
      height: 19px;
      margin-right: 4px;
    }
    span {
      color: var(--color-grey-00);
      font-size: 20px;
    }
  }
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    span {
      color: var(--color-grey-00);
      font-size: 20px;
      font-weight: bold;
    }
    .iconBtn:hover {
      padding-inline: 0.2px;
      filter: drop-shadow(0px 0px 5px var(--color-blue-00));
    }
  }
  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    gap: 20px;
    left: 0;
    top: 100px;
    padding-left: 10px;
  }
  @media screen and (min-width: 800px) {
    overflow-x: auto;
    overflow-y: auto;
  }
`;
