import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom'

import { Button } from '../../components/Button';
import { RoomContainer } from '../../components/Room/Container';
import { QuestionsBoardContainer } from '../../components/QuestionBoard/QuestionsBoardContainer';
import { QuestionsBoardFooter } from '../../components/QuestionBoard/styles';
import { RoomHeader } from '../../components/Room/RoomHeader';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { UserInfo } from '../../components/UserInfo/UserInfo';
import { QuestionList } from '../../components/QuestionBoard/QuestionList';

interface RoomParams {
  id: string;
}

export const Room = () => {
  const { user } = useAuth();

  const params = useParams<RoomParams>();
  const roomId = params.id;

  const [newQuestion, setNewQuestion] = useState('');

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
    <RoomContainer>
      <RoomHeader roomId={roomId} />
      <QuestionsBoardContainer roomId={roomId}>
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
        <QuestionList roomId={roomId} />
      </QuestionsBoardContainer>
    </RoomContainer>
  );
}
