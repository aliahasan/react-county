import { useState } from "react";

const Form = () => {
  const [userInfo, setUserInfo] = useState({
   
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, email, password } = e.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value
    };
    setUserInfo(user);
   form.reset()
  };

  console.log(userInfo);

  return (
    <div
      style={{
        border: "2px solid red",
        marginTop: "20px",
        marginBottom: "20px",
        paddingLeft: "20px",
      }}
    >
      <h3>I am a form</h3>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" required />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
