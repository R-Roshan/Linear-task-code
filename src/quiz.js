import { useState } from "react";

function Quiz() {
  const questions = [
    {
      questionText:
        "The 'Eat the Frog' is one of simplest yet most effective productivity techniques around. What is the 'frog'in 'Eat the Frog'? ",
      answerOptions: [
        {
          answerText: "An or a set of easy tasks on your 'to do' list",
          isCorrect: false,
        },
        {
          answerText: "Your hardest, most important task for the day",
          isCorrect: false,
        },
        {
          answerText: "Your manager's latest burning ask from you",
          isCorrect: true,
        },
        { answerText: "An actual frog", isCorrect: false },
      ],
      description:
        "The “Frog” is also known as your Most Important Task (MIT). This task is often important but not urgent, the type of difficult task that creates a lot of mental resistance and ensuing procrastination if you don't intentionally make time for it. You probably already know the task I’m talking about",
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
      description: "This",
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
      description: "is",
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
      description: "Roshan",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [disc, setdisc] = useState(false);
  const [color, setcolor] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setcolor(true);
    }
    setdisc(true);
  };

  const handlNextQue = () => {
    const nextque = currentQuestion + 1;
    if (nextque < questions.length) {
      setCurrentQuestion(nextque);
    } else {
      setShowScore(true);
    }
    setdisc(false);
    setcolor(false);
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                style={{ backgroundColor: color ? "green" : null }}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <p className="disc">
            {disc ? questions[currentQuestion].description : null}
          </p>
          <div>
            <button className="btn-nxt" onClick={() => handlNextQue()}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
