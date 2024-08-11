import "./Feedback.module.css";

const Feedback = ({
  good,
  neutral,
  bad,
  total,
  updateFeedback,
  onResetClick,
  positive,
}) => {
  return (
    <div>
      <button type="button" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      <button type="button" onClick={onResetClick}>
        Reset
      </button>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>
          <b>Total: {total}</b>
        </li>
        <li>Positive: {positive}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
