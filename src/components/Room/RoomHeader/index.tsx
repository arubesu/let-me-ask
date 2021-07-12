import { Header, Content } from './styles';
import { ClipboardCopier } from '../../ClipboardCopier';
import { Button } from '../../Button';

import logoImg from '../../../assets/images/logo.svg'
import { useRoom } from '../../../hooks/useRoom';

interface RoomHeaderProps {
  handleCloseRoom?: () => Promise<void>;
}

export const RoomHeader = ({ handleCloseRoom }: RoomHeaderProps) => {
  const { roomId } = useRoom();

  return (
    <Header>
      <Content>
        <img src={logoImg} alt="Letmeask" />
        <div>
          <ClipboardCopier text={roomId} />
          {
            handleCloseRoom &&
            <Button isOutlined onClick={handleCloseRoom}>Close room</Button>
          }
        </div>
      </Content>
    </Header>
  )
}