import styled from 'styled-components';

export const QuestionsBoard = styled.main`
  max-width: 800px;
  margin: 0 auto;

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 1rem;
      border-radius: 0.5rem;
      background: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
    }
  }
`;

export const QuestionsBoardHeader = styled.div`
  margin: 2rem 0 1.5rem;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: #29292e;
  }

  span {
    margin-left: 1rem;
    background: #e559f9;
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    color: #FFF;
    font-weight: 500;
    font-size: 0.875rem;
  }
`

export const QuestionsBoardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  span {
    font-size: 0.875rem;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835AFD;
      text-decoration: underline;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
    }
  }
`
export const QuestionsListContainer = styled.div`
    margin-top: 32px;
`