import React, { useEffect, useState } from "react";

const Trivia = (data, steTimeOut, questionNumber, setQuestionNumber) => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  return (
    <div className="trivia">
      <div className="question">what's the best youtube channel</div>
      <div className="answers">
        <div className="answer">Lama Dev</div>
        <div className="answer">Lama Dev</div>
        <div className="answer">Lama Dev</div>
        <div className="answer">Lama Dev</div>
      </div>
    </div>
  );
};

export default Trivia;
