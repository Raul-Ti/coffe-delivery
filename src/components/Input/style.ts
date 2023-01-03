import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
    display:flex;
    flex-direction: column;
    gap: 0.3rem;
    position: relative;

    >p{
        color: ${(props) => props.theme.colors["base-error"]};
    }
`

interface InputStyleContainerProps {
    hasError: boolean;
    //isFocused: boolean; /* opção para utilizar no lugar do focos-within */
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
    height: 2.625rem;
    border-radius 4px;
    border: 1px solid ${(props) => props.theme.colors["base-button"]};
    background: ${(props) => props.theme.colors["base-input"]};
    transition: 0.4s;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: space-between;

    // coloca um foco no elemento casa o input que está dentro dele está em foco (não funciona em todos os navegadores))
    &:focus-within{ 
        border-color: ${(props) => props.theme.colors["brand-yellow-dark"]};
    }

    ${(props) => 
    props.hasError&& 
    css`
        border-color: ${props.theme.colors["base-error"]};
    `}
`

export const InputStyled = styled.input`
    flex: 1;
    height: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.75rem;
    outline:none;

    &::placeholder{
        color: ${(props) => props.theme.colors["base-label"]};
    }
`

export const RightText = styled.p`
    font-size: 0.75rem;
    margin-right: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme.colors["base-label"]};
`