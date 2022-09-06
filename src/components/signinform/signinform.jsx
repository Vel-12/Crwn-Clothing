import Forminput from "../forminput/forminput.jsx";
import { useState } from "react";
import Button from "../button/button.jsx";
import "./signinform.scss";
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
} from "../../store/user/useraction.js";
import { useDispatch } from "react-redux";

const defaultFormFields = {
  email: "",
  password: "",
};

function Signinform() {
  const dispatch = useDispatch();

  const [formFeilds, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFeilds;

  const signInWithGoogle = () => {
    dispatch(GOOGLE_SIGN_IN_START());
  };

  const resetFormFeilds = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFeilds, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(EMAIL_SIGN_IN_START(email, password));
      resetFormFeilds();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Entered password is wrong (Try-again)");
          break;

        case "auth/user-not-found":
          alert("No user associated with this email");
          break;

        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Forminput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Forminput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">sign in</Button>

          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Signinform;
