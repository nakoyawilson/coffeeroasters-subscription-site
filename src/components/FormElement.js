import { useState } from "react";
import RadioButton from "./RadioButton";

const FormElement = (props) => {
  const [checkedIndex, setCheckedIndex] = useState(false);

  return (
    <div className="order-option">
      <button
        type="button"
        className={`question-wrapper ${
          props.questionDisabled ? "disabled-button" : ""
        }`}
        onClick={props.handleClick}
        disabled={props.questionDisabled}
        value={props.questionName}
        // autoFocus={props.isAutoFocused}
      >
        <h2 className="question">{props.question}</h2>
        <img
          src="assets/plan/desktop/icon-arrow.svg"
          alt=""
          className={`arrow-icon ${props.isActive ? "question-expanded" : ""}`}
        />
      </button>
      {props.isActive && (
        <div className="answers grid">
          <RadioButton
            labelClasses={props.labelClasses}
            questionName={props.questionName}
            answerId={props.firstAnswerValue}
            answerValue={props.firstAnswerValue}
            answer={props.firstAnswer}
            isChecked={checkedIndex === 0}
            handleChange={() => {
              setCheckedIndex(0);
            }}
          />
          <RadioButton
            labelClasses={props.labelClasses}
            questionName={props.questionName}
            answerId={props.secondAnswerValue}
            answerValue={props.secondAnswerValue}
            answer={props.secondAnswer}
            isChecked={checkedIndex === 1}
            handleChange={() => {
              setCheckedIndex(1);
            }}
          />
          <RadioButton
            labelClasses={props.labelClasses}
            questionName={props.questionName}
            answerId={props.thirdAnswerValue}
            answerValue={props.thirdAnswerValue}
            answer={props.thirdAnswer}
            isChecked={checkedIndex === 2}
            handleChange={() => {
              setCheckedIndex(2);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default FormElement;
