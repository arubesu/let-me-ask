
import { RoomContainer } from '../../components/Room/Container';
import { QuestionsBoardContainer } from '../../components/QuestionBoard/QuestionsBoardContainer';
import { RoomHeader } from '../../components/Room/RoomHeader';

import { QuestionList } from '../../components/QuestionBoard/QuestionList';
import { QuestionForm } from './QuestionForm';

export const Room = () => {

  return (
    <RoomContainer>
      <RoomHeader />
      <QuestionsBoardContainer >
        <QuestionForm />
        <QuestionList />
      </QuestionsBoardContainer>
    </RoomContainer>
  );
}
