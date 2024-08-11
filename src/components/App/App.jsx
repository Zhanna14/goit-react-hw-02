import { useState } from "react";
import Feedback from "../Feedback/Feedback";

function App() {
  const [feedback, setupFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = feedback.good + feedback.neutral + feedback.bad;

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
    if (total > 0) {
      return Math.round((feedback.good / total) * 100);
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
        total={total}
        updateFeedback={updateFeedback}
        onResetClick={onResetClick}
        positive={positive()}
      />
    </div>
  );
}

export default App;
