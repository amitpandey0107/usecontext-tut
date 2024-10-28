import React, { useState } from "react";
import Child from "./child";
import Login from "./Login";
import { UserContext } from "./utils/UserContext";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Login />
        <Child />
      </UserContext.Provider>
    </>
  );
}

export default App;
