import React from 'react';
import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';

export const UserInfo: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <img src={user?.avatar} alt={user?.name} />
      <span>{user?.name}</span>
    </Container>
  )
}