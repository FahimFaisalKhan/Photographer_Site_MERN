import React, { useContext } from "react";
import { Button, Card, Form, Hero, Input } from "react-daisyui";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyAuthContext } from "../../Contexts/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { useTitle } from "../../hooks/useTitle";
import Spinner from "../../Components/Spinner/Spinner";
import toast, { Toaster } from "react-hot-toast";
const SignInUser = () => {
  useTitle("FC - Signin");
  const { signInWithMail, googleSignIn, loading, user } =
    useContext(MyAuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const redirectPath = location?.state?.form?.pathname || "/";
  console.log(redirectPath);
  console.log(redirectPath);
  const handleSignInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;

    signInWithMail(email, pass)
      .then((result) => {
        if (result.user) {
          fetch("https://backend-fahimfaisalkhan.vercel.app/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email: result.user.email,
            }),
          })
            .then((res) => res.json())
            .then((data) => localStorage.setItem("reviewSiteToken", data.token))
            .catch((err) => console.log(err.message));
        }

        navigate(redirectPath, { replace: true });
      })
      .catch((e) => {
        const error = e.message;
        const parsedError = error
          .slice(error.indexOf("/") + 1, error.indexOf(")"))
          .replace("-", " ");
        toast(parsedError);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        if (result.user) {
          fetch("https://backend-fahimfaisalkhan.vercel.app/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email: result.user.email,
            }),
          })
            .then((res) => res.json())
            .then((data) => localStorage.setItem("reviewSiteToken", data.token))
            .catch((err) => console.log(err.message));
        }
        navigate(redirectPath, { replace: true });
      })
      .catch((e) => {
        const error = e.message;
        const parsedError = error
          .slice(error.indexOf("/") + 1, error.indexOf(")"))
          .replace("-", " ");
        toast(parsedError);
      });
  };
  if (loading) {
    return <Spinner />;
  }
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
                <Toaster
                  toastOptions={{
                    style: { background: "rgb(239 68 68)" },
                  }}
                />
                <p className="ml-1 text-start text-xs font-medium mt-5">
                  New to Fahim's Capture ?{" "}
                  <Link
                    state={{ form: location?.state?.form }}
                    className="text-primary underline"
                    to={"/signup"}
                  >
                    Register now
                  </Link>
                  ! or
                </p>
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
