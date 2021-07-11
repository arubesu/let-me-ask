import React from 'react';
import { useRoom } from '../../hooks/useRoom';

import {
  QuestionsBoard,
  QuestionsBoardHeader
} from './styles';

interface QuestionsBoardContainerProps {
  roomId: string;
  children: React.ReactNode;
}

export const QuestionsBoardContainer = ({ children, roomId }:
  QuestionsBoardContainerProps) => {
  const { title, questions } = useRoom(roomId)

  return (
    <QuestionsBoard>
      <QuestionsBoardHeader>
        <h1>Room {title}</h1>
        {questions.length > 0 && <span>{questions.length} question(s)</span>}
      </QuestionsBoardHeader>

      {
        children
      }
    </QuestionsBoard>
  )
}