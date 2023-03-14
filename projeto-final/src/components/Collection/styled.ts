import styled from "styled-components";

export const StyledCollection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--color-grey-00);
  margin-top: 30px;
  .createTitleBtn {
    display: flex;
    align-items: center;
    color: var(--color-grey-00);
    background-color: var(--color-blue-00);
    padding-inline: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
    cursor: pointer;
    span {
      font-size: 30px;
      margin-left: 4px;
    }
  }
  .createTitleBtn:hover {
    filter: drop-shadow(0px 0px 5px var(--color-blue-00));
  }
  ul {
    /* margin-left: 200px; */
    display: flex;
    justify-content: center;
    overflow-x: auto;
    width: 100%;
    max-width: 200px;
    li {
      background-color: var(--color-grey-04);
      padding: 15px;
      img {
        border-radius: 4px;
      }
      div {
        background-color: var(--color-grey-04);
      }
    }
    li:hover {
      img {
        filter: drop-shadow(0px 0px 5px var(--color-blue-00));
      }
    }
  }
  @media screen and (min-width: 800px) {
    ul {
      width: 600px;
      max-width: 100%;
    }
  }
  @media screen and (min-width: 900px) {
    ul {
      width: 700px;
    }
  }
  @media screen and (min-width: 1000px) {
    ul {
      width: 800px;
    }
  }
`;
