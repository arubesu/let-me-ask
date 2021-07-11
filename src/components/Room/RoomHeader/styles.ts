import styled from 'styled-components';

export const Header = styled.header`
    padding: 1.5rem;
    border-bottom: 1px solid #e2e2e2;
`;

export const Content = styled.div`
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 2.875rem;
      }

      > div {
        display: flex;
        gap: 16px;

        button {
          height: 40px;
        }
      }

      .question-list {
      margin-top: 32px;
    }
`;

