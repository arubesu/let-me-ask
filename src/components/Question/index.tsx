import { ReactNode } from 'react';
import { Container, Footer, UserInfo } from './styles';
import classnames from 'classnames';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered?: boolean;
  isHighlighted?: boolean;
  children?: ReactNode;
}

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <Container className={
      classnames({
        answered: isAnswered,
        highlighted: isHighlighted && !isAnswered
      })
    }>
      <p>{content}</p>
      <Footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>
          {children}
        </div>
      </Footer>
    </Container>
  );
}