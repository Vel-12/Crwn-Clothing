import Signinform from "../../signinform/signinform";
import Signup from "../../signupform/signup";
import './authentication.scss'

function authentication() {
  return (
    <div className="authentication-container">
      <Signinform />
      <Signup />
    </div>
  );
}

export default authentication;
