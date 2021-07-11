import { Header, Content } from './styles';
import { ClipboardCopier } from '../../ClipboardCopier';
import { Button } from '../../Button';

import logoImg from '../../../assets/images/logo.svg'

interface RoomHeaderProps {
  roomId: string;
  handleCloseRoom?: () => Promise<void>;
}

export const RoomHeader = ({ roomId, handleCloseRoom }: RoomHeaderProps) => {
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