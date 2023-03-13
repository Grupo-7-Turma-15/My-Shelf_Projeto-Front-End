import styled from "styled-components";

export const StyledHomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-04);
  width: 100vw;
  height: 100vh;
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
    h1 {
      color: var(--color-grey-00);
      font-size: var(--font-title);
    }
    button {
      width: 324px;
      height: 48px;
      border: none;
      border-radius: 4px;
      font-size: var(--font-text-default);
      font-weight: bold;
    }

    .input {
      filter: invert(100%);
    }

    button:hover {
      filter: saturate(32%) invert(87%)
        drop-shadow(0px 0px 5px var(--color-blue-00));
    }
    .loginBtn {
      background-color: var(--color-green-00);
      color: var(--color-grey-00);
    }
    p {
      color: var(--color-grey-01);
      font-size: var(--font-label);
    }
    .registerBtn {
      background-color: var(--color-grey-01);
      color: var(--color-grey-00);
    }
  }
`;
