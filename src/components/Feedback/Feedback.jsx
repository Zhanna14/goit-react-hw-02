const Feedback = ({ good, neutral, bad, total }) => {
  return (
    <div>
      {/* <button type="button">Good</button>
      <button type="button">Neutral</button>
      <button type="button">Bad</button>
      <button type="button">Reset</button> */}
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
