import { Button } from '../Button';
import { StyledModal } from './styles';
import { FiXCircle } from 'react-icons/fi'

interface ConfirmationModalProps {
  title?: string;
  content?: string;
  onRequestClose: () => void;
  onConfirm: () => void | Promise<void>;
  isOpen: boolean;
}

export const ConfirmationModal = ({
  onRequestClose,
  onConfirm,
  isOpen,
  title,
  content
}: ConfirmationModalProps) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={onRequestClose}
      onEscapeKeydown={onRequestClose}
    >
      <FiXCircle size={60} style={{ color: 'red' }} />
      <strong>{title}</strong>
      <p>{content}</p>

      <div>
        <Button color="#DBDCCC" onClick={onRequestClose} >Cancelar</Button>
        <Button color="#E73F5D" onClick={onConfirm}>Confirmar </Button>
      </div>
    </StyledModal>
  )
}
