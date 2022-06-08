import React, { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import UserCard from "../components/users/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers([
        {
          id: 1,
          username: "AnomolyAvery",
          email: "ashawsolutions@gmail.csm",
          biography: "This is just a test",
          birthday: new Date("2003-02-26"),
        },
        {
          id: 2,
          username: "AnomolyAvery",
          email: "ashawsolutions@gmail.csm",
          biography: "This is just a test",
          birthday: new Date("2003-02-26"),
        },
        {
          id: 3,

          username: "AnomolyAvery",
          email: "ashawsolutions@gmail.csm",
          biography: "This is just a test",
          birthday: new Date("2003-02-26"),
        },
        {
          id: 4,
          username: "AnomolyAvery",
          email: "ashawsolutions@gmail.csm",
          biography: "This is just a test",
          birthday: new Date("2003-02-26"),
        },
        {
          id: 5,
          username: "AnomolyAvery",
          email: "ashawsolutions@gmail.csm",
          biography: "This is just a test sdfssdfsfsdfsfsdfsfsfddsfdfsf",
          birthday: new Date("2003-02-26"),
        },
      ]);
    };

    fetchUsers();
  }, []);

  return (
    <AppLayout>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {users.map((user) => (
          <UserCard
            key={user.id}
            email={user.email}
            username={user.username}
            biography={user.biography}
          />
        ))}
      </div>
    </AppLayout>
  );
};

export default Users;
