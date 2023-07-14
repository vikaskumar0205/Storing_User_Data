import React, {useState} from "react";
import "./Forms.css";

const Forms = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const usernameHandler=(e)=> {
    e.preventDefault();
    setUserName(e.target.value);
  }

  const ageHandler = (e)=> {
    e.preventDefault();
    setAge(e.target.value);
  }

  const formHandler=(e)=> {
    e.preventDefault();
    // console.log(e.target.querySelectorAll('input').length);
    const list = {
      username:userName,
      age:age,
    }
    props.onFormData(list);
    setUserName('');
    setAge('');
  }


  return (
    <div className="forms">
      <form action="#" className="forms-item" onSubmit={formHandler}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          className="forms-username"
          placeholder="Enter your name..."
          value={userName}
          onChange={usernameHandler}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          className="forms-age"
          placeholder="Enter your age..."
          step={1}
          value={age}
          onChange={ageHandler}
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Forms;
