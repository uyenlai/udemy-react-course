import { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdited, setDidEdited] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdited.email && !enteredValue.email.includes("@");
  const passwordIsInvalid =
    didEdited.password && !enteredValue.password.trim().length < 6;

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
    setDidEdited((prevState) => {
      return {
        ...prevState,
        [identifier]: false,
      };
    });
  }

  function handleInputFocus(identifier) {
    setDidEdited((prevState) => {
      return {
        ...prevState,
        [identifier]: true,
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          name="email"
          onBlur={() => handleInputFocus("email")}
          value={enteredValue.email}
          onChange={(e) => handleValueChange(e, "email")}
          error={emailIsInvalid && "Please enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          name="password"
          onBlur={() => handleInputFocus("password")}
          value={enteredValue.password}
          onChange={(e) => handleValueChange(e, "password")}
          error={passwordIsInvalid && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
