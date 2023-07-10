import React, { useEffect, useState } from "react";

export default function Trivia({ data, questionNumber, setQuestionNumber, setTimeOut }) {
  
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div className="answer">{a.text}</div>
        ))}
      </div>
    </div>
  );
}
