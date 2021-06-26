
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button/Button';
import { ClipboardCopier } from '../../components/ClipboardCopier';

import logoImg from '../assets/images/logo.svg';
import { Container, Content, QuestionsBoard, QuestionsBoardFooter, QuestionsBoardHeader } from './styles';

interface RoomParams {
  id: string;
}

export const Room = () => {
  const params = useParams<RoomParams>();

  return (
    <Container>
      <header>
        <Content>
          <img src={logoImg} alt="Letmeask" />
          <ClipboardCopier text={params.id} label="Room Code" />
        </Content>
      </header>

      <QuestionsBoard>
        <QuestionsBoardHeader>
          <h1>Room title</h1>
          <span>X Questions</span>
        </QuestionsBoardHeader>

        <form>
          <textarea
            placeholder="What do you want to ask?"
          />

          <QuestionsBoardFooter>
            <span>To send a question, <button>Login</button></span>
            <Button type="submit">Send a question</Button>
          </QuestionsBoardFooter>
        </form>
      </QuestionsBoard>
    </Container>
  );
}
