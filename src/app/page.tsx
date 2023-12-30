import data from "../../public/data.json";
import { QuestionCard } from "@/components/question_card/QuestionCard";

export default function Home() {
  return (
    <main>
      <h1>{data.title}</h1>
      {data.questions.map((question, i) => (
        <QuestionCard
          key={i}
          number={`Fråga ${i + 1}`}
          {...question}
          showAnswer={false}
        />
      ))}
      {data.tieBreaker && (
        <QuestionCard
          number={"Utslagsfråga"}
          {...data.tieBreaker}
          showAnswer={false}
        />
      )}
    </main>
  );
}
