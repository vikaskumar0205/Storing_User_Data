import React, { useState } from "react";
import "./App.css";
import Forms from "./components/Forms/Forms";
import ItemList from "./components/ItemList/ItemList";
import InvalidByName from "./components/InvalidInputs/InvalidByName/InvalidByName";
import InvalidByAge from "./components/InvalidInputs/InvalidByAge/InvalidByAge";

function App() {
  const lists = [];
  const [listData, setListData] = useState(lists);
  const [isValid, setIsValid] = useState(true);
  const [isNegative, setIsNegative] = useState(false);
  const [userNameBtn, setUserNameBtn] = useState(false);
  const [ageBtn, setAgeBtn] = useState(false);

  const formDatasHandler = (list) => {
    
    if(list.username.trim().length===0 && list.age.trim().length===0) {
      setIsValid(false);
      // setIsNegative(false);
    }
    else if(list.age.includes('-')) {
      setIsNegative(true);
      setIsValid(false);
    }
    else setListData((prevLists) => [list, ...prevLists]);
  };

  const userNameBtnHandler =()=> {
    setUserNameBtn(true);
    setIsValid(true);
  }

  const ageBtnHandler=()=> {
    setAgeBtn(true);
    setIsValid(true);
  }

  return (
    <div className="app">
      <Forms onFormData={formDatasHandler} />
      {isValid && <ItemList listData={listData} />}
      {!userNameBtn && !isValid && !isNegative && <InvalidByName onClickBtn={userNameBtnHandler} />}
      {!ageBtn && !isValid&& isNegative && <InvalidByAge onClickBtn={ageBtnHandler} />}
    </div>
  );
}

export default App;
