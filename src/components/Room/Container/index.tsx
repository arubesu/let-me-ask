import React from 'react';

import { Container } from './styles';

export const RoomContainer: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container >
  )
}