import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Forms from "./components/Forms/Forms";
import ItemList from "./components/ItemList/ItemList";
import InvalidByName from "./components/InvalidInputs/InvalidByName/InvalidByName";
import InvalidByAge from "./components/InvalidInputs/InvalidByAge/InvalidByAge";
import { v4 as uuidv4 } from "uuid";

// defining functions for the use of portal methods
const Backdrop = (props) => <InvalidByName onClickBtn={props.onClickBtn} />;

const Overlay = (props) => <InvalidByAge onClickBtn={props.onClickBtn} />;

const ItemListRoot = (props) => (
  <ItemList listData={props.listData} onItemList={props.onItemList} />
);

function App() {
  const lists = [];
  let [listData, setListData] = useState(lists);
  const [isValid, setIsValid] = useState(true);
  const [isNegative, setIsNegative] = useState(false);
  const [userNameBtn, setUserNameBtn] = useState(false);
  const [ageBtn, setAgeBtn] = useState(false);

  // console.log(listData+" "+ isValid + " " + isNegative );
  const formDatasHandler = (list) => {
    if (list.username.trim().length === 0 && (list.age.trim().length === 0)) {
      setIsValid(false);
      // setIsNegative(false);
    } else if (list.age.includes("-")) {
      setIsNegative(true);
      setIsValid(false);
    } else
      setListData((prevLists) => [{ ...list, id: uuidv4() }, ...prevLists]);

    // Now reseting the value of buttons
    setUserNameBtn(false);
    setAgeBtn(false);
  };

  const userNameBtnHandler = () => {
    setUserNameBtn(true);
    setIsValid(true);
  };

  const ageBtnHandler = () => {
    setAgeBtn(true);
    setIsValid(true);
    setIsNegative(false);
  };

  const itemListHandler = (id) => {
    listData = listData.filter((list) => list.id !== id);
    setListData(listData);
  };

  return (
    <React.Fragment key={uuidv4()}>
      <Forms onFormData={formDatasHandler} />
      {isValid &&
        ReactDOM.createPortal(
          <ItemListRoot listData={listData} onItemList={itemListHandler} />,
          document.getElementById("item-list")
        )}
      {!userNameBtn &&
        !isValid &&
        !isNegative &&
        ReactDOM.createPortal(
          <Backdrop onClickBtn={userNameBtnHandler} />,
          document.getElementById("backdrop-root")
        )}
      {!ageBtn &&
        !isValid &&
        isNegative &&
        ReactDOM.createPortal(
          <Overlay onClickBtn={ageBtnHandler} />,
          document.getElementById("overlay-root")
        )}
    </React.Fragment>
  );
}

export default App;
