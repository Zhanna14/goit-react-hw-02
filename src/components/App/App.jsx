import { useEffect } from "react";
import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

function App() {
  const [feedback, setupFeedback] = useState(() => {
    const savedObject = window.localStorage.getItem("feedback");
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  // const [obj, setObj] = useState(() => {
  //   // Зчитуємо значення за ключем
  //   const savedObject = window.localStorage.getItem("key");

  //   // Якщо там щось є, парсимо і повертаємо
  //   // це значення як початкове значення стану
  //   if (savedObject !== null) {
  //     return JSON.parse(savedObject);
  //   }

  //   // У протилежному випадку повертаємо
  //   // яке-небудь значення за замовчуванням
  //   return {};
  // });


  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = (feedbackType) => {
    setupFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const onResetClick = () => {
    setupFeedback({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("feedback");
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
      <Options
        updateFeedback={updateFeedback}
        onResetClick={onResetClick}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positive()}
        />
      )}
    </div>
  );
}

export default App;
