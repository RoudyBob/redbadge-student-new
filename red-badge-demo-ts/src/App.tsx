import React from "react";
import ClassClickCounter from "./components/ClassClickCounter";

function App() {
  return (
    <div>
      <ClassClickCounter initialValue={6} />
      <ClassClickCounter initialValue={10} />
      <ClassClickCounter initialValue={4} />
    </div>
  );
}

export default App;
