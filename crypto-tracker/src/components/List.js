import React from "react";
import "../styles/_List.scss";
import "../styles/_Button.scss";
import "./ListItem";
import ListItem from "./ListItem";

const List = (props) => {
  if (props.list.length === 0) {
    return (
      <div>
        <h1> Press Get Data</h1>
        <button onClick={props.getData} className="button">
          Get Data
        </button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={props.getData} className="button">
        Get Data
      </button>
      <div className="list-container">
        <ul className="list">
          {props.list.map((element) => {
            return (
              <ListItem
                currencyName={element["key"].toString()}
                currencyRate={element["data"].toString()}
              ></ListItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;
