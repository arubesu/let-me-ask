import { FormEvent, useState } from 'react';
import { Button } from '../../components/Button';
import { QuestionsBoardFooter } from '../../components/QuestionBoard/styles';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { useRoom } from '../../hooks/useRoom';

export const QuestionForm: React.FC = () => {
  const { user } = useAuth();
  const { roomId } = useRoom();

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
  };

  return (
    <form onSubmit={handleSendQuestion}>
      <textarea
        placeholder="What do you want to ask?"
        onBlur={event => setNewQuestion(event.target.value)}
        defaultValue={newQuestion} />

      <QuestionsBoardFooter>
        {user ? (
          <UserInfo />
        ) : (
          <span>To send a question, <button>Login</button></span>
        )}
        <Button type="submit" disabled={!user}>Send a question</Button>
      </QuestionsBoardFooter>
    </form>
  );
};
