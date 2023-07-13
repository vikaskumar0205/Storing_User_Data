import "./InvalidByAge.css";

const InvalidByAge = (props) => {
  const invalideAgeBtnHandler = () => {
    props.onClickBtn(true);
  };
  return (
    <div className="invalid-age">
      <h2 className="invalid-age__heading">Invalid input</h2>
      <div className="invalid-age__message">
        <p>Please enter a valid age ({">"}0) </p>
        <button type="button" onClick={invalideAgeBtnHandler}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default InvalidByAge;
