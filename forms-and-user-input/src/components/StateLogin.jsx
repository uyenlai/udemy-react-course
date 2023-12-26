import { useState } from "react";

export default function StateLogin() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid =
    enteredValue.email !== "" && !enteredValue.email.includes("@");

  function handleSubmit(e) {
    e.preventDefault();
    setEnteredValue({ email: "", password: "" });
  }

  function handleValueChange(e, identifier) {
    e.preventDefault();
    setEnteredValue((prevState) => {
      return {
        ...prevState,
        [identifier]: e.target.value,
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValue.email}
            onChange={(e) => handleValueChange(e, "email")}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValue.password}
            onChange={(e) => handleValueChange(e, "password")}
          />
        </div>
      </div>
      <div className="control-error">
        {emailIsInvalid && <p>Please enter an valid email!</p>}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
