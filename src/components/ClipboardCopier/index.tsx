import copyImg from '../../assets/images/copy.svg';

import { CopyToClipboardButton } from './styles';

interface ClipboardCopierProps {
  text: string;
  label: string;
}

export const ClipboardCopier = ({ text, label }: ClipboardCopierProps) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <CopyToClipboardButton onClick={copyToClipboard}>
      <div>
        <img src={copyImg} alt="Copy text" />
      </div>
      <span>{label} #{text}</span>
    </CopyToClipboardButton>
  )
}
