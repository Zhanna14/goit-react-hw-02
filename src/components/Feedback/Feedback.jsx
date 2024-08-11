const Feedback = ({ good, neutral, bad, total, reviewAdd }) => {
  return (
    <div>
          <button type="button" onClick={() => reviewAdd("good")}>Good</button>
      <button type="button" onClick={() => reviewAdd("neutral")}>Neutral</button>
      <button type="button" onClick={() => reviewAdd("bad")}>Bad</button>
      <button type="button">Reset</button>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>
          <b>Total: {total}</b>
        </li>
        <li>Positive: 0%</li>
      </ul>
    </div>
  );
};

export default Feedback;
