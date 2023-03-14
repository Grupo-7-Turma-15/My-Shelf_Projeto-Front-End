import styled from "styled-components";

export const StyledCard = styled.li`
  z-index: 10;
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
  .modal {
    margin-top: 200px;
    max-width: 400px;
    padding: 15px;
    background-color: var(--color-grey-04);
    border: 2px solid var(--color-grey-00);

    .headerModal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: var(--font-nav);
      }
      .closeBtn {
        font-size: 25px;
        cursor: pointer;
      }
      .closeBtn:hover {
        color: var(--color-red-00);
        filter: drop-shadow(0px 0px 5px var(--color-blue-00));
      }
    }
    img {
      width: 201px;
      height: 263px;
      margin: 10px 0 10px 0;
    }
    .synopsis {
      max-height: 200px;
      overflow-y: auto;
      font-size: var(--font-label);
    }

    section > div {
      display: flex;
      margin-top: 10px;
      h4 {
        margin-right: 10px;
      }
    }
    .divBtnsModal {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      button {
        width: 116.39px;
        height: 38.97px;
        border-radius: 4px;
        border: none;
        color: var(--color-grey-00);
        font-size: var(--font-text-default);
      }
      .editBtn {
        background-color: var(--color-green-00);
        margin-right: 10px;
      }
      .editBtn:hover {
        background-color: var(--color-red-00);
        filter: invert(87%) drop-shadow(0px 0px 5px var(--color-blue-00));
      }
      .deleteBtn {
        background-color: var(--color-red-00);
      }
      .deleteBtn:hover {
        filter: drop-shadow(0px 0px 5px var(--color-red-00));
      }
    }
  }
`;
