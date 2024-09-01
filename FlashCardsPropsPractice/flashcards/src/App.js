import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}
const questions = [
  {
    id: 3457,
    question: "what language is react based on?",
    answer: "Javascript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={questions.id}
          onClick={() =>
            setSelectedId(question.id !== selectedId ? question.id : null)
          }
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
