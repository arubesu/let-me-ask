
import { FormEvent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { Button } from '../../components/Button/Button';
import { ClipboardCopier } from '../../components/ClipboardCopier';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';
import {
  Container, Content, QuestionsBoard,
  QuestionsBoardFooter, QuestionsBoardHeader
} from './styles';
import { UserInfo } from '../../components/UserInfo/UserInfo';

interface RoomParams {
  id: string;
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>

interface Question {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}

export const Room = () => {
  const { user } = useAuth();

  const params = useParams<RoomParams>();
  const roomId = params.id;

  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([])
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();

      if (!databaseRoom)
        return;

      const firebaseQuestions: FirebaseQuestions = databaseRoom?.questions ?? {};

      const roomQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
        }
      })

      setTitle(databaseRoom.title);
      setQuestions(roomQuestions);
    })

  }, [roomId]);

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }


  return (
    <Container>
      <header>
        <Content>
          <img src={logoImg} alt="Letmeask" />
          <ClipboardCopier text={roomId} label="Room#" />
        </Content>
      </header>

      <QuestionsBoard>
        <QuestionsBoardHeader>
          <h1>Room {title}</h1>
          {questions.length > 0 && <span>{questions.length} question(s)</span>}
        </QuestionsBoardHeader>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="What do you want to ask?"
            onBlur={event => setNewQuestion(event.target.value)}
            defaultValue={newQuestion}
          />

          <QuestionsBoardFooter>
            {user ? (
              <UserInfo />
            ) : (
              <span>To send a question, <button>Login</button></span>
            )}
            <Button type="submit" disabled={!user}>Send a question</Button>
          </QuestionsBoardFooter>
        </form>
      </QuestionsBoard>
    </Container>
  );
}
