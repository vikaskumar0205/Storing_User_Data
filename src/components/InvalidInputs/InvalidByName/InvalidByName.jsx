import "./InvalidByName.css";

const InvalidByName = (props) => {
  const invalidNameButtonHandler = (e) => {
    e.preventDefault();
    props.onClickBtn(true);
  };

  return (
    <div className="invalid-name">
      <h2 className="invalid-heading">Invalid input</h2>
      <div className="invalid-message">
        <p>Please enter a valid name,college and age (non-empty values) </p>
        <button type="button" onClick={invalidNameButtonHandler}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default InvalidByName;
