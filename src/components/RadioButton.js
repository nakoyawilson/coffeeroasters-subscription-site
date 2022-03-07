const RadioButton = (props) => {
  return (
    <label className={props.labelClasses}>
      <input
        type="radio"
        name={props.questionName}
        id={props.answerId}
        value={props.answerValue}
        className="visually-hidden"
      />

      <h3 className="answer-value">{props.answerValue}</h3>
      <span>{props.answer}</span>
    </label>
  );
};

export default RadioButton;
