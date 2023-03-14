import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-grey-04);
  width: 100vw;
  height: 100vh;
  .backBtn {
    background-color: var(--color-grey-03);
    border: none;
    color: var(--color-grey-00);
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 5px;
    margin-left: 250px;
  }
  .backBtn:hover {
    filter: saturate(32%) invert(87%)
      drop-shadow(0px 0px 5px var(--color-blue-00));
  }
  form {
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-03);
    justify-content: center;
    align-items: center;
    gap: 22px;
    width: 369px;
    height: 502px;
    padding: 22px;
    h2 {
      color: var(--color-grey-00);
      font-size: var(--font-title);
    }
    p {
      color: var(--color-grey-01);
      font-size: var(--font-label);
    }
    button {
      width: 324px;
      height: 48px;
      border: none;
      border-radius: 4px;
      font-size: var(--font-text-default);
      font-weight: bold;
    }
    button:hover {
      background-color: var(--color-blue-00);
      color: var(--color-grey-00);
      filter: drop-shadow(0px 0px 5px var(--color-blue-00));
    }
    .input {
      filter: saturate(32%) invert(87%)
        drop-shadow(0px 0px 5px var(--color-blue-00));
    }
  }
`;
