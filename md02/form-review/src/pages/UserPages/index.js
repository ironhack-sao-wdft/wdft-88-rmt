import { UserCard } from "../../components/UserCard";

import { useState } from "react";

export function UserPages() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      {users.map((currentElement) => {
        return (
          <UserCard
            name={currentElement.name}
            email={currentElement.email}
            password={currentElement.password}
            id={currentElement.id}
          />
        );
      })}
    </div>
  );
}
