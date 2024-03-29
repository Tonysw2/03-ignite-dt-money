import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: none;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme['green-300']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    background: transparent;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-300']};
      border: 1px solid ${(props) => props.theme['green-300']};
      color: ${(props) => props.theme.white};
      transition: all 0.2s;
    }
  }
`
