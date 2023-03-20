import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElement/Card";

import "./UsersList.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  } else {
    return (
      <ul className="users-list">
        {props.items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places}
            />
          );
        })}
      </ul>
    );
  }
};

export default UsersList;
