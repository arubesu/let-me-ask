import React from 'react';
import { useRoom } from '../../hooks/useRoom';

import {
  QuestionsBoard,
  QuestionsBoardHeader
} from './styles';

interface QuestionsBoardContainerProps {
  children: React.ReactNode;
}

export const QuestionsBoardContainer = ({ children }:
  QuestionsBoardContainerProps) => {
  const { title, questions } = useRoom();

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