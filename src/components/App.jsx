import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
// step 1 to create an app in components/App.jsx
//step 2 to check what is reusable (what is changing)
// and to create separate components for those parts
//step 3 to create props (Card,Entry...) and paste everything that is changing
// step 5 to put those parts in each folder
//step 6 create mapfunction in App.jsx file
// step 7 put props name wherever is needed to change hardcoded data
function createEntry(ent) {
  return (
    <Entry
      key={ent.id}
      emoji={ent.emoji}
      name={ent.name}
      meaning={ent.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
