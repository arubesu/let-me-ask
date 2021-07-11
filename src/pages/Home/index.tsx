import { Container, Cover, SignInContainer, SignInContent, Separator } from './styles';
import illustrationImg from "../../assets/images/illustration.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import logoImg from "../../assets/images/logo.svg";
import { Button } from '../../components/Button';
import { useHistory } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../../services/firebase'
export const Home = () => {

  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');
  const history = useHistory();

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === '')
      return;

    const room = await database.ref(`rooms/${roomCode}`).get();

    if (!room.exists()) {
      alert('The room does not exist');
      return;
    }

    if (room.val().closedAt) {
      alert('Room already closed.');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  const handleCreateRoom = async () => {

    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  return (
    <Container>
      <Cover>
        <img src={illustrationImg} alt="illustration" />
        <strong>Every question has an answer</strong>
        <p>Learn and share your knowledge with others</p>
      </Cover>
      <SignInContainer>
        <SignInContent>
          <img src={logoImg} alt="let me ask" />
          <button onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="google logo" />
            Create your room with google
          </button>
          <Separator>Or join in an existing room</Separator>
          <form onSubmit={handleJoinRoom} >
            <input
              type="text"
              placeholder="Room code"
              defaultValue={roomCode}
              onBlur={(e) => setRoomCode(e.target.value)}
            />
            <Button
              type="submit"
            >
              Join the room
            </Button>
          </form>
        </SignInContent>
      </SignInContainer>
    </Container>
  )
}
