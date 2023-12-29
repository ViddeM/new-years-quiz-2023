import Image from "next/image";
import styles from "./page.module.css";
import data from "../../public/data.json";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>{data.title}</h1>
      {data.questions.map((question, i) => (
        <QuestionCard key={i} number={i + 1} {...question} />
      ))}
    </main>
  );
}

interface QuestionCardProps {
  number: number;
  question: string;
  description: string;
  image?: string;
  alternatives?: string[];
}

const QuestionCard = ({
  number,
  question,
  description,
  image,
  alternatives,
}: QuestionCardProps) => {
  return (
    <div className={"card question-card"}>
      <h2>Fråga {number}</h2>
      <p>{description}</p>
      <p>
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
    </div>
  );
};
