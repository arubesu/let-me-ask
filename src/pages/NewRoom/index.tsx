import { FormEvent, useState } from 'react';
import { Container, Cover, MainContainer, MainContent } from './styles';
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import { Button } from '../../components/Button';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { firebase } from '../../services/firebase';

export const NewRoom = () => {
  const { user } = useAuth();
  const [roomName, setRoomName] = useState('');
  const history = useHistory();

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomName.trim() === '') {
      return;
    }

    const roomsRef = firebase.database().ref('rooms');

    const newRoomRef = roomsRef.push({
      title: roomName,
      ownerId: user?.id,
    });

    history.push(`/admin/rooms/${newRoomRef.key}`)
  }

  return (
    <Container>
      <Cover>
        <img src={illustrationImg} alt="illustration" />
        <strong>Every question has an answer</strong>
        <p>Learn and share your knowledge with others</p>
      </Cover>
      <MainContainer>
        <MainContent>
          <img src={logoImg} alt="let me ask" />
          <h2>Create a new room</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Room name"
              defaultValue={roomName}
              onBlur={(e) => setRoomName(e.target.value)}
            />
            <Button
              type="submit"
            >
              Create new room
            </Button>
          </form>
          <p>Join in an existing room <Link to='/'>Click here</Link></p>
        </MainContent>
      </MainContainer>
    </Container>
  )
}
