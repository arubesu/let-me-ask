import { Container, Cover, SignInContainer, SignInContent, Separator } from './styles';
import illustrationImg from "../../assets/images/illustration.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import logoImg from "../../assets/images/logo.svg";
import { Button } from '../../components/Button/Button';
import { useHistory } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

export const Home = () => {

  const { user, signInWithGoogle } = useAuth();

  const history = useHistory();

  async function handleCreateRoom() {

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
          <form >
            <input
              type="text"
              placeholder="Room code"
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
