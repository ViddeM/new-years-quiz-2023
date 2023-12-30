import Image from "next/image";

export interface QuestionCardProps {
  number: number;
  question: string;
  description: string;
  image?: string;
  alternatives?: string[];
  ans: string;
  ansDescription?: string;
  showAnswer: boolean;
}

export const QuestionCard = ({
  number,
  question,
  description,
  image,
  alternatives,
  ans,
  ansDescription,
  showAnswer,
}: QuestionCardProps) => {
  return (
    <div className={"card question-card"}>
      <h2>Fråga {number}</h2>
      <p>{description}</p>
      <p className="question">
        <b>{question}</b>
      </p>
      {image && (
        <div className="image-container">
          <Image
            src={`/images/${image}`}
            alt={image}
            width={380}
            height={380}
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
      <div>
        {alternatives && (
          <ol>
            {alternatives.map((alt, i) => (
              <li key={i}>{alt}</li>
            ))}
          </ol>
        )}
      </div>
      {showAnswer && (
        <div className="answers-container">
          <b>Svar: {ans}</b> {ansDescription && <p>{ansDescription}</p>}
        </div>
      )}
    </div>
  );
};
