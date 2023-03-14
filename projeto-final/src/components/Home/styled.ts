import styled from "styled-components";

export const StyledHome = styled.div`
  h3 {
    color: var(--color-grey-00);
    margin: 20px;
  }
  img {
    width: 600px;
    height: 350px;
    border-radius: 8px;
    filter: drop-shadow(0px 0px 5px var(--color-blue-00));
  }
  img:hover {
    filter: invert(87%) drop-shadow(0px 0px 5px var(--color-red-00));
  }
`;
