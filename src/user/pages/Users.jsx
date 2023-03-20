import React from "react";

import UsersList from "../components/UsersList";

const DUMMY_DATA = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg",
    name: "france",
    places: 3,
  },
  {
    id: 2,
    image: "https://study.com/cimages/multimages/16/eiffel_tower.jpg",
    name: "paris",
    places: 8,
  },
  {
    id: 3,
    image:
      "https://www.planetware.com/wpimages/2019/10/malaysia-best-places-to-visit-kuala-lumpur.jpg",
    name: "Kuala Lumpur",
    places: 4,
  },
];

const Users = () => {
  return <UsersList items={DUMMY_DATA} />;
};

export default Users;
