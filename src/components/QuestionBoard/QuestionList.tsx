import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";
import { database } from "../../services/firebase";
import { Question } from '../../components/Question';

import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';
import { QuestionsListContainer } from "./styles";
import { ConfirmationModal } from "../Modals/ConfirmationModal";
import { EmptyQuestion } from "../EmptyQuestion";

interface QuestionListProps {
  isAdmin?: boolean;
}

export const QuestionList = ({
  isAdmin = false,
}: QuestionListProps) => {
  const { user } = useAuth();
  const { roomId, questions } = useRoom();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState('');

  const handleLikeQuestion = async (questionId: string, likeId: string | undefined) => {
    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove()
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      })
    }
  }

  const handleDeleteQuestionConfirmation = (questionId: string) => {
    onOpenModal();
    setSelectedQuestionId(questionId);
  }

  const handleDeleteQuestion = async () => {
    await database.ref(`rooms/${roomId}/questions/${selectedQuestionId}`).remove();
    onCloseModal();
  }

  const handleHighlightQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  const handleMarkQuestionAsAnswered = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  const onCloseModal = () => {
    setIsModalOpen(false);
  }

  const onOpenModal = () => {
    setIsModalOpen(true);
  }

  return (
    <>
      <ConfirmationModal
        isOpen={isModalOpen}
        title="Delete Question"
        content="Are you sure you want to delete this question?"
        onRequestClose={onCloseModal}
        onConfirm={handleDeleteQuestion}
      />
      <QuestionsListContainer>
        {
          questions.length == 0 &&
          <EmptyQuestion isAdmin={isAdmin} />
        }
        {questions.map(question => {
          return (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              {
                isAdmin ? (
                  <div className="button-group">
                    {
                      !question.isAnswered &&
                      <>
                        <button
                          type="button"
                          onClick={() => handleHighlightQuestion(question.id)}
                        >
                          <img src={checkImg} alt="Check Question" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleMarkQuestionAsAnswered(question.id)}
                        >
                          <img src={answerImg} alt="Answer Question" />
                        </button>
                      </>
                    }
                    <button
                      type="button"
                      onClick={() => handleDeleteQuestionConfirmation(question.id)}
                    >
                      <img src={deleteImg} alt="Remove Question" />
                    </button>
                  </div>
                ) : (
                  question.isAnswered ? null :
                    <button
                      className={`like-button ${question.likeId ? 'liked' : ''}`}
                      type="button"
                      aria-label="I like it"
                      onClick={() => handleLikeQuestion(question.id, question.likeId)}
                    >
                      {question.likeCount > 0 && <span>{question.likeCount}</span>}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                )
              }

            </Question>
          );
        })}
      </QuestionsListContainer>
    </>
  );
}
