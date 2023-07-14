import React, { useRef} from "react";
import "./Forms.css";

const Forms = (props) => {
  // const [userName, setUserName] = useState('');
  // const [age, setAge] = useState('');

  // instead of useState we can also use the useRef, 
  // by using the useRef we also do the DOM manipulations
  // but here we are only using for the purpose of reading.
  const nameInpurRef = useRef();
  const collegeInputRef = useRef();
  const ageInpurRef = useRef();

  const formHandler=(e)=> {
    e.preventDefault();

    // storing the default value
    const userName = nameInpurRef.current.value;
    const collegeName = collegeInputRef.current.value;
    const age = ageInpurRef.current.value;
    // console.log(e.target.querySelectorAll('input').length);
    const list = {
      username:userName,
      collegename:collegeName,
      age:age,
    }
    props.onFormData(list);

    // reseting the values
    nameInpurRef.current.value='';
    collegeInputRef.current.value = '';
    ageInpurRef.current.value='';
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
          minLength={4}
          maxLength={16}
          ref={nameInpurRef}
        />
        <label htmlFor="college_name">College Name:</label>
        <input
          type="text"
          name="college_name"
          id="college_name"
          className="forms-college__name"
          placeholder="Enter your college name..."
          minLength={4}
          maxLength={16}
          ref={collegeInputRef}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          className="forms-age"
          placeholder="Enter your age..."
          step={1}
          max={150}
          ref={ageInpurRef}
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Forms;
