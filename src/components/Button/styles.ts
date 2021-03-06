import styled from 'styled-components';

export const CustomButton = styled.button`
  height: 3.125rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: ${props => props.color ? props.color : '#835afd'};
  color: white;
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  >img { 
    margin-right: 0.5rem;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9)
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.outlined {
    background: #FFF;
    border: 1px solid ${props => props.color ? props.color : '#835afd'};
    color: ${props => props.color ? props.color : '#835afd'};
  }
`;
