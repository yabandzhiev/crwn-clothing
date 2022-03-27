import SignUpForm from "../../components/sign-up-form/SignUpForm.jsx";
import SignInForm from "../../components/sign-in-form/SignInForm.jsx";

import { AuthenticationContainer } from "./Authentication.styles.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
