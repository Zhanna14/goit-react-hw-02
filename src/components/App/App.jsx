import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import "./App.module.css"

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
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        updateFeedback={updateFeedback}
        onResetClick={onResetClick}
        positive={positive()}
      />
    </div>
  );
}

export default App;
