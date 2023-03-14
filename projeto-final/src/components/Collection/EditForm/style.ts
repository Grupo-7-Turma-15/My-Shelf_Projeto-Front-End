import styled from "styled-components";

export const StyledEditForm = styled.div`
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
  .modal {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
    padding: 20px;
    background-color: var(--color-grey-04);
    border: 2px solid var(--color-grey-00);
    .input {
      filter: saturate(32%) invert(87%)
        drop-shadow(0px 0px 5px var(--color-blue-00));
    }
    button {
      width: 100%;
      height: 38.97px;
      border-radius: 4px;
      border: none;
      color: var(--color-grey-00);
      font-size: var(--font-text-default);
    }

    select {
      width: 100%;
      height: 38.97px;
      border-radius: 4px;
      filter: drop-shadow(0px 0px 1px var(--color-grey-00));
      color: var(--color-grey-00);
      background-color: var(--color-grey-04);
    }
    select:focus,
    select:hover {
      filter: drop-shadow(0px 0px 5px var(--color-blue-00));
    }

    .aligneBtn {
      display: flex;
    }

    button:hover {
      filter: drop-shadow(0px 0px 5px var(--color-blue-00));
    }
    .editBtn {
      background-color: var(--color-blue-00);
      margin-right: 10px;
    }
    .cancelBtn {
      background-color: var(--color-red-00);
    }
    .cancelBtn:hover {
      filter: drop-shadow(0px 0px 5px var(--color-red-00));
    }
  }
`;
