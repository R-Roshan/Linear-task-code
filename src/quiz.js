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
          isCorrect: true,
        },
        {
          answerText: "Your manager's latest burning ask from you",
          isCorrect: false,
        },
        { answerText: "An actual frog", isCorrect: false },
      ],
      description:
        "The “Frog” is also known as your Most Important Task (MIT). This task is often important but not urgent, the type of difficult task that creates a lot of mental resistance and ensuing procrastination if you don't intentionally make time for it. You probably already know the task I’m talking about",
    },
    {
      questionText:
        "When do you 'eat the frog' i.e. do the most important task for the day?",
      answerOptions: [
        { answerText: "First thing in the morning", isCorrect: true },
        {
          answerText: "During an empty slot in the calendar",
          isCorrect: false,
        },
        { answerText: "Immediately after lunch", isCorrect: false },
        {
          answerText: "At night, when there are no distractions",
          isCorrect: false,
        },
      ],
      description:
        "We all know intuitively that not all work hours are created equal. The first hour of the morning when your energy and willpower are high is a helluva lot more productive than the hour after lunch when all you want to do is curl up and take a nap. Eat the Frog ensures that you’re using your best hours to do your most mentally taxing work and leaves less important tasks for times when you’ve already exhausted your brain power for the day.",
    },
    {
      questionText:
        "What should be size of the task that you choose as your frog? ",
      answerOptions: [
        {
          answerText: "A task you can complete in 30-60 mins",
          isCorrect: false,
        },
        {
          answerText: "A task you can complete in 1-4 hours",
          isCorrect: true,
        },
        {
          answerText: "A task you can complete in less that 30 mins",
          isCorrect: false,
        },
        {
          answerText: "A task you can complete in 4-8 hours",
          isCorrect: false,
        },
      ],
      description:
        "Your frog should take half a day’s work, tops. A clearly defined, realistic task will make it easier to get started and not procrastinate on. Checking it off your list before lunch will give you a concrete win and accompanying endorphin boost to carry you into the rest of your day.",
    },
    {
      questionText:
        "Why should you 'eat the frog' first thing in the morning??",
      answerOptions: [
        {
          answerText: "So that you can take the rest of the day off",
          isCorrect: false,
        },
        {
          answerText: "So that you can eat another frog in the afternoon",
          isCorrect: false,
        },
        {
          answerText: "So that you have the whole day to complete the task",
          isCorrect: false,
        },
        {
          answerText: "So that your most important task gets prioritized first",
          isCorrect: true,
        },
      ],
      description:
        "Whatever your frog for the day happens to be, do it first thing when you sit down to work. If at all possible, don’t schedule meetings. Don’t catch up on Twitter. Don’t check your email. Don’t even think about thinking about all the other less important things you’ll have to do later in the day. Focus all of your mental energy on your frog and only your frog",
    },
    {
      questionText: "How frequently should you 'eat the frog'?",
      answerOptions: [
        { answerText: "Once every week", isCorrect: false },
        { answerText: "Once every fortnight", isCorrect: false },
        { answerText: "Daily", isCorrect: true },
        { answerText: "Whenever you need", isCorrect: false },
      ],
      description:
        "Any day that you eat your frog is a good day. Furthermore, following the method means you’ll be making progress on something meaningful on a daily basis. Studies have shown that that kind of progress is a key motivator and predictor of happiness and engagement at work, and can lead to a virtuous cycle of getting things done. We feel good when we follow through on the things we intended to do which in turn makes it easier to continue doing them. When you experience a win first thing in the morning, you’re more likely to build momentum and good vibes to carry you through the rest of your workday.",
    },
    {
      questionText:
        "What important habit does 'eat the frog' help you develop? ",
      answerOptions: [
        { answerText: "Time management", isCorrect: false },
        { answerText: "Multi-tasking", isCorrect: false },
        { answerText: "Prioritization", isCorrect: false },
        { answerText: "Deep work", isCorrect: true },
      ],
      description:
        "The most valuable work in today’s knowledge economy is almost invariably work that requires all your mental resources to be focused on one thing — think cognitively demanding tasks like coding, designing, writing, strategizing, and problem-solving. Yet the modern workplace isn’t set up to support that kind of distraction-free “deep work” (a phrase coined by computer science professor Cal Newport). We’re distracted by so many emails, meetings, chat messages and requests for input that we don’t have the time or space to focus on our highest impact tasks.Eat The Frog requires us to push back against all of those distractions — both external (others interrupting us) and internal (us interrupting ourselves) — and prioritize the actions that will actually bring us closer to our goals.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [disc, setdisc] = useState(false);
  const [color, setcolor] = useState(false);

  const handleAnsOption = (isCorrect) => {
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
                onClick={() => handleAnsOption(answerOption.isCorrect)}
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
