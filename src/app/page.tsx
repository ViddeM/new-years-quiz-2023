import data from "../../public/data.json";
import { QuestionCard } from "@/components/question_card/QuestionCard";

export default function Home() {
  return (
    <main>
      <h1>{data.title}</h1>
      {data.questions.map((question, i) => (
        <QuestionCard key={i} number={i + 1} {...question} showAnswer={false} />
      ))}
    </main>
  );
}
