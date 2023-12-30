"use client";

import { useParams } from "next/navigation";
import data from "../../../../public/data.json";
import { QuestionCard } from "@/components/question_card/QuestionCard";
import Link from "next/link";

export default function Answers() {
  const params = useParams<{ id: string }>();
  console.log("PARAMS", params);
  if (params.id !== "YW5zd2VyCg") {
    return (
      <main>
        <h1>Här finns inga svar!</h1>
        <Link
          href={"/"}
          style={{
            textDecoration: "underline",
            fontSize: "1.5em",
            marginTop: "2rem",
          }}
        >
          Tillbaka
        </Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{data.title} - Facit</h1>
      {data.questions.map((question, i) => (
        <QuestionCard
          key={i}
          number={`Fråga ${i + 1} - Facit`}
          {...question}
          showAnswer={true}
        />
      ))}
      {data.tieBreaker && (
        <QuestionCard
          number={"Utslagsfråga - Facit"}
          {...data.tieBreaker}
          showAnswer={true}
        />
      )}
    </main>
  );
}
