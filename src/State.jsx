import { useState } from "react";

const State = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value)
  };

  return (
    <div>
      <p>{text}</p>

      <div>
        <input onChange={handleChange} type="text" name="" id="" />
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
};

export default State;
