import React, { useContext } from "react";
import { Button, Card, Form, Hero, Input } from "react-daisyui";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyAuthContext } from "../../Contexts/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
const SignInUser = () => {
  const { signInWithMail, googleSignIn } = useContext(MyAuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const redirectPath = location?.state?.form?.pathname || "/";
  console.log(redirectPath);
  const handleSignInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;

    signInWithMail(email, pass)
      .then((result) => {
        navigate(redirectPath, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        navigate(redirectPath, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <div>
        <Hero className="min-h-[80vh]">
          <Hero.Content className="flex-col w-full ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold mb-5">Please Log in!</h1>
            </div>
            <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <Card.Body>
                <Form onSubmit={handleSignInUser}>
                  <Form.Label title="Email" />
                  <Input
                    type="email"
                    placeholder="email"
                    className="input-bordered"
                    name="email"
                  />
                  <Form.Label title="Password" />
                  <Input
                    type="password"
                    placeholder="password"
                    className="input-bordered"
                    name="password"
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt" hover>
                      Forgot password?
                    </Link>
                  </label>
                  <Button type="submit" className="mt-6 capitalize">
                    Log in
                  </Button>
                </Form>
                <Button
                  onClick={handleGoogleSignIn}
                  className="bg-base-content text-base-300  mt-3  border-none"
                >
                  <FcGoogle size={25}></FcGoogle>
                  <p className="ml-[-1.5rem] capitalize">
                    Sign <span className="lowercase">in with google</span>
                  </p>
                </Button>
              </Card.Body>
            </Card>
          </Hero.Content>
        </Hero>
      </div>
    </div>
  );
};

export default SignInUser;
