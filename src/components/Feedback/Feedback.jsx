import css from "./Feedback.module.css";

const Feedback = ({
  good,
  neutral,
  bad,
  total,
  positive,
}) => {
  return (
    <div>
      <ul className={css.ulFeedback}>
        <li className={css.liFeedback}>Good: {good}</li>
        <li className={css.liFeedback}>Neutral: {neutral}</li>
        <li className={css.liFeedback}>Bad: {bad}</li>
        <li className={css.liFeedback}>
          <b>Total: {total}</b>
        </li>
        <li className={css.liFeedback}>Positive: {positive}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
