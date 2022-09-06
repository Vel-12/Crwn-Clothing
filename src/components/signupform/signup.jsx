import { useState } from "react";
import { useDispatch } from "react-redux";
import { SIGN_UP_START } from "../../store/user/useraction";
import Forminput from "../forminput/forminput";
import "./signupform.scss";
import Button from "../button/button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Signup() {
  const [formFeilds, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFeilds;

  const dispatch = useDispatch();

  const resetFormFeilds = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      dispatch(SIGN_UP_START(email, password, displayName));
      resetFormFeilds();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, already exisitng)");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handlerChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFeilds, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Forminput
          label={"Display Name"}
          onChange={handlerChange}
          type="text"
          required
          name="displayName"
          value={displayName}
        />

        <Forminput
          label={"Email"}
          onChange={handlerChange}
          type="email"
          required
          name="email"
          value={email}
        />

        <Forminput
          label={"Password"}
          onChange={handlerChange}
          type="password"
          required
          name="password"
          value={password}
        />

        <Forminput
          label={"Confirm Password"}
          onChange={handlerChange}
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default Signup;
