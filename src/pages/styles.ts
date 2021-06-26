import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Cover = styled.aside`
  flex: 7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8rem 5rem;
  
  background: #835AFD;
  color: white;

  img {
    max-width: 20rem;
  }

  strong {
    font: 700 2.25rem 'Poppins', sans-serif;
    line-height: 2.625rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;
    color:#F8F8F8;
  }
`;

export const SignInContainer = styled.main`
  flex: 8;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignInContent = styled.div`
   display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20rem;
    align-items: stretch;
    text-align: center;

    >img {
      align-self: center;
    }

    >button {
        margin-top: 4rem;
        height: 3.125rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        background: #ea4335;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        border: 0;

        transition: filter 0.2s;

        >img { 
          margin-right: 0.5rem;
        }

        &:hover {
          filter: brightness(0.9)
        }
      }

    form {
      input { 
        height: 3.125rem;
        border-radius: 0.5rem;
        padding: 0 1rem;
        background: white;
        border: 1px solid #a8a8b3;
      }

      button {
        margin-top: 1rem;
      }

      button, input {
        width: 100%;
      }

    }
`

export const Separator = styled.div`
  font-size: 0.875rem;
  color: #a8a8b3;
  display: flex;
  margin: 2rem 0;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 16px;
  }
`

