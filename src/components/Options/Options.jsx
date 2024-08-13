import css from "./Options.module.css";

const Options = ({ updateFeedback, onResetClick, totalFeedback }) => {
  return (
    <section className={css.options}>
      <button type="button" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="buton" onClick={onResetClick}>
          Reset
        </button>
      )}
    </section>
  );
};

export default Options;
