const RadioButton = (props) => {
  return (
    <label
      className={`${props.labelClasses} ${
        props.isChecked ? "checked-option" : ""
      }`}
    >
      <input
        type="radio"
        name={props.questionName}
        id={props.answerId}
        value={props.answerValue}
        className="visually-hidden"
        checked={props.isChecked}
        onChange={props.handleChange}
      />

      <h3 className="answer-value">{props.answerValue}</h3>
      <span>{props.answer}</span>
    </label>
  );
};

export default RadioButton;
