import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";
import Options from "../Options/Options";
import css from "./App.module.css";

function App() {
  const [feedback, setupFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = (feedbackType) => {
    setupFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const onResetClick = () => {
    setupFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const positive = () => {
    if (totalFeedback > 0) {
      return Math.round((feedback.good / totalFeedback) * 100);
    }
    return 0;
  };

  return (
    <div className={css.mainContainer}>
      <Description />
      <Options updateFeedback={updateFeedback} onResetClick={onResetClick} />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        positive={positive()}
      />
    </div>
  );
}

export default App;
