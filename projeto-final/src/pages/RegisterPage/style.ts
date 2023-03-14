import styled from "styled-components";

export const StyledRegisterPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    align-items: center;
    background-color: var(--color-grey-04);
    color: white;

    .register__container {
        display: flex;
        flex-direction: column;
        max-width: 320px;

        gap: 20px;
    }

    .return__button {
        align-self: flex-end;

        height: 29px;
        width: fit-content;
        padding: 5px 10px;

        background-color: var(--color-grey-03);
        color: white;
    }

    button:hover {
        filter: saturate(32%) invert(87%)
            drop-shadow(0px 0px 5px var(--color-blue-00));
    }

    @media (min-width: 769px) {
        .register__container {
            width: 370px;
        }
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 42px 22px;
    gap: 15px;

    text-align: center;
    background-color: var(--color-grey-03);

    .input {
        filter: invert(100%);
    }

    .form__title {
        display: flex;
        flex-direction: column;

        gap: 22px;
    }

    .form__title > h1 {
        font-size: var(--font-sub-title);
    }

    .form__title > p {
        font-size: 12px;
        color: var(--color-grey-01);
    }

    .register__button {
        box-sizing: border-box;

        height: 48px;
        width: 100%;

        color: white;
        background-color: #868e96;
        font-size: var(--font-text-default);
        font-weight: bold;
        border: none;
        border-radius: 4px;
    }
`;
