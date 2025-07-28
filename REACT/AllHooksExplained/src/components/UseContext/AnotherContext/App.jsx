import React, { use } from "react";
import { createContext } from "react";
import Profile from "./Profile";

export const UserContext = createContext();

function App() {
  const user = { name: "Sachin Sen", isLoggedIn: false };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>User Dashboard</h1>
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
