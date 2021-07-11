import copyImg from '../../assets/images/copy.svg';

import { CopyToClipboardButton } from './styles';
import { toast } from 'react-hot-toast'

interface ClipboardCopierProps {
  text: string;
  label?: string;
}

export const ClipboardCopier = ({ text, label }: ClipboardCopierProps) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard')
  }

  return (
    <CopyToClipboardButton onClick={copyToClipboard}>
      <div>
        <img src={copyImg} alt="Copy text" />
      </div>
      <span>{label} {text}</span>
    </CopyToClipboardButton>
  )
}
