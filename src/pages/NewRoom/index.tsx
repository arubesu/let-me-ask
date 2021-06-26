import { Container, Cover, MainContainer, MainContent } from './styles';
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';

export const NewRoom = () => {
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
          <form >
            <input
              type="text"
              placeholder="Room name"
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
