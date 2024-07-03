import { useState } from "react";
import './NewTodo.css';

const NewTodo = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className={`toggle-div ${toggle ? 'show' : 'hide'}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit
          sapiente asperiores cupiditate vel quibusdam quae voluptate impedit
          tempora, sed veritatis totam nisi quidem sequi quaerat nulla
          molestiae aut quas?
        </p>
      </div>
      <div>
        <button onClick={handleToggle}>{toggle ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
};

export default NewTodo;
