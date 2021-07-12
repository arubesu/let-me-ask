import { Container } from './styles';

import emptyQuestionImg from '../../assets/images/empty-questions.svg';

export const EmptyQuestion = ({ isAdmin = false }) => {
  return (
    <Container>
      <img src={emptyQuestionImg} alt="Empty Questions" />
      <h2>No questions here :(</h2>
      <p>{
        isAdmin ?
          "Send the room code for your audience and start answering questions" :
          "Be the first to send a question"}
      </p>
    </Container>
  )
}