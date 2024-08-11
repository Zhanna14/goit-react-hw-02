import { useState } from "react";
import Feedback from "../Feedback/Feedback";

function App() {
  const [review, setReview] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

    const total = review.good + review.neutral + review.bad;
    
    const reviewAdd = (kindReview) => {
        setReview({ ...review, [kindReview]: review[kindReview] + 1 });
    }

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Feedback
        good={review.good}
        neutral={review.neutral}
        bad={review.bad}
        total={total}
        reviewAdd={reviewAdd}
      />
    </div>
  );
}

export default App;
