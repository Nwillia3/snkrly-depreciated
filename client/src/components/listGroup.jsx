import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem
}) => {
  return (
    <React.Fragment>
      <h3
        style={{ display: "flex", justifyContent: "left", fontSize: "1.1rem" }}
      >
        Brand Categories
      </h3>
      <ul className="list-group clickable">
        {items.map(item => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
