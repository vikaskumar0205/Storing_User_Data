import "./ItemList.css";
import Lists from "./Lists";
import { v4 as uuidv4 } from "uuid";

const ItemList = (props) => {
  return (
    <ul className="item-list__inner">
      {props.listData.map((list) => (
        <Lists
          key={uuidv4()}
          id={uuidv4()}
          username={list.username}
          age={list.age}
        />
      ))}
    </ul>
  );
};

export default ItemList;
