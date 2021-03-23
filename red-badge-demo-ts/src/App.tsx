import React from "react";
import PropsExample from './components/PropsExample';
import PropsMapping from './components/PropsMapping';

function App() {
  const visitedPlaces = ["New York","Chicago","San Francisco","Seattle","Los Angeles","Houston"];
  return (
    <div>
      <div><PropsExample name="Tom" business="MySpace" /></div>
      <div><PropsMapping visited={visitedPlaces}/></div>
    </div>
    )

}

export default App;
