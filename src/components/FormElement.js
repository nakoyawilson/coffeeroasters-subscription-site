import RadioButton from "./RadioButton";

const FormElement = (props) => {
  return (
    <div>
      <p className="question">{props.question}</p>
      <div className="answers">
        <RadioButton
          labelClasses=""
          questinName=""
          answerId=""
          answerValue=""
          answer=""
        />
        <RadioButton
          labelClasses=""
          questinName=""
          answerId=""
          answerValue=""
          answer=""
        />
        <RadioButton
          labelClasses=""
          questinName=""
          answerId=""
          answerValue=""
          answer=""
        />
      </div>
    </div>
  );
};

export default FormElement;
