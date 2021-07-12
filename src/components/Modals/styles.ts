import Modal from 'styled-react-modal'

export const StyledModal = Modal.styled`
  width: 37.5rem;
  height: 20rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  background-color: #F8F8F8;

  strong {
    font-family: 'Poppins';
    font-size: 24px;
  }

  div {
    display: flex;
    margin-top: 2rem;
    gap: 1rem;
  }
`
