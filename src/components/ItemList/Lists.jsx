import "./Lists.css";

const Lists = (props) => {
  const deleteButtonHandler = (e) => {
    e.preventDefault();
    props.onItemList(props.id);
    // console.log(props);
  };

  return (
    <li className="lists">
      <div>{props.username}({props.age} years old)-{props.collegename}</div>
       
      <button type="button" className="btn btn-list" onClick={deleteButtonHandler}>
        Delete
      </button>
    </li>
  );
};

export default Lists;
