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

export const MainContainer = styled.main`
  flex: 8;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
   display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20rem;
    align-items: stretch;
    text-align: center;

    >img {
      align-self: center;
    }

    h2 {
      font-size: 1.5rem;
      margin: 4rem 0 1.5rem;
      font-family: 'Poppins', sans-serif;
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

    p {
      font-size: 0.875rem;
      color: #737380;
      margin-top: 1rem;

      a {
        color: #e559f9;
      }
    }
`