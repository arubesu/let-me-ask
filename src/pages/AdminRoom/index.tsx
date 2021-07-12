import { useHistory } from 'react-router-dom'

import { RoomHeader } from '../../components/Room/RoomHeader';
import { RoomContainer } from '../../components/Room/Container';
import { QuestionsBoardContainer } from '../../components/QuestionBoard/QuestionsBoardContainer';
import { database } from '../../services/firebase';

import { QuestionList } from '../../components/QuestionBoard/QuestionList';
import { useRoom } from '../../hooks/useRoom';

export function AdminRoom() {
  const history = useHistory()
  const { roomId } = useRoom();

  const handleCloseRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    })

    history.push('/');
  }

  return (
    <RoomContainer>
      <RoomHeader handleCloseRoom={handleCloseRoom} />
      <QuestionsBoardContainer  >
        <QuestionList isAdmin />
      </QuestionsBoardContainer>
    </RoomContainer>
  );
}