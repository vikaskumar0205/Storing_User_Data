import "./ItemList.css";
import Lists from "./Lists";

const ItemList = (props) => {
  
  return (
    <ul className="item-list">
      <h2>User List</h2> 
      <hr /> 
      {props.listData.map((list) => (
        <Lists
          key={list.id}
          id={list.id}
          username={list.username}
          collegename={list.collegename}
          age={list.age}
          onItemList={props.onItemList}
        />
      ))}
    </ul>
  );
};

export default ItemList;
