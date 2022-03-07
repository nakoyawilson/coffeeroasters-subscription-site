import RadioButton from "./RadioButton";

const FormElement = (props) => {
  return (
    <div className="order-option">
      <button className="question-wrapper">
        <h2 className="question">{props.question}</h2>
        <img src="assets/plan/desktop/icon-arrow.svg" alt="" />
      </button>
      <div className="answers grid">
        <RadioButton
          labelClasses={props.labelClasses}
          questionName={props.questionName}
          answerId={props.firstAnswerValue}
          answerValue={props.firstAnswerValue}
          answer={props.firstAnswer}
        />
        <RadioButton
          labelClasses={props.labelClasses}
          questionName={props.questionName}
          answerId={props.secondAnswerValue}
          answerValue={props.secondAnswerValue}
          answer={props.secondAnswer}
        />
        <RadioButton
          labelClasses={props.labelClasses}
          questionName={props.questionName}
          answerId={props.thirdAnswerValue}
          answerValue={props.thirdAnswerValue}
          answer={props.thirdAnswer}
        />
      </div>
    </div>
  );
};

export default FormElement;
