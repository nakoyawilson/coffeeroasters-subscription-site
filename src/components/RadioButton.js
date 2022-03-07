const RadioButton = (props) => {
  return (
    <label className={props.labelClasses}>
      <input
        type="radio"
        name={props.questionName}
        id={props.answerId}
        value={props.answerValue}
      />
      {props.answer}
    </label>
  );
};

export default RadioButton;
