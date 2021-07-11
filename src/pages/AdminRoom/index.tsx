import { useHistory, useParams } from 'react-router-dom'

import { RoomHeader } from '../../components/Room/RoomHeader';
import { RoomContainer } from '../../components/Room/Container';
import { QuestionsBoardContainer } from '../../components/QuestionBoard/QuestionsBoardContainer';
import { database } from '../../services/firebase';

import { QuestionList } from '../../components/QuestionBoard/QuestionList';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const history = useHistory()
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const handleCloseRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    })

    history.push('/');
  }

  return (
    <RoomContainer>
      <RoomHeader roomId={roomId} handleCloseRoom={handleCloseRoom} />
      <QuestionsBoardContainer roomId={roomId} >
        <QuestionList roomId={roomId} isAdmin />
      </QuestionsBoardContainer>
    </RoomContainer>
  );
}