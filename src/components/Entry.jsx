import React from "react";
import Emoji from "./Emoji";
import Name from "./Name";
import Meaning from "./Meaning";
function Entry(props) {
  return (
    <div className="term">
      <Emoji emoji={props.emoji} />
      <Name name={props.name} />
      <Meaning meaning={props.meaning} />
    </div>
  );
}

export default Entry;
