import styled from "styled-components";

interface iNav {
  page: string;
}

export const NavAside = styled.aside<iNav>`
  .home {
    background-color: ${({ page }) =>
      page === "home" ? "var(--color-blue-00)" : "none"};
  }
  .collection {
    background-color: ${({ page }) =>
      page === "collection" ? "var(--color-blue-00)" : "none"};
  }
  .favourites {
    background-color: ${({ page }) =>
      page === "favourites" ? "var(--color-blue-00)" : "none"};
  }
  .home,
  .collection,
  .favourites {
    padding: 10px;
    border-radius: 4px;
  }
`;
