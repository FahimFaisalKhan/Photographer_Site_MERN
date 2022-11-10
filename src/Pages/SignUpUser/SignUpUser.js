import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form, Hero, Input } from "react-daisyui";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyAuthContext } from "../../Contexts/AuthContext/AuthContext";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../Configs/firebase.config";
import { updateProfile } from "firebase/auth";
import { useTitle } from "../../hooks/useTitle";
import Spinner from "../../Components/Spinner/Spinner";
import toast, { Toaster } from "react-hot-toast";
const SignUpUser = () => {
  useTitle("FC - Signup");
  const { createUser, loading } = useContext(MyAuthContext);
  const [fileDissbled, setFileDisabled] = useState(false);
  const [urlDisabled, setUrlDisabled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const redirectPath = location?.state?.form?.pathname || "/";
  console.log(redirectPath);
  const handleUrlField = (event) => {
    console.log(event.target.value);
    if (event.target.value.length !== 0) {
      setFileDisabled(true);
    } else {
      setFileDisabled(false);
    }
  };
  const handleFileField = (event) => {
    console.log(event.target.value);
    if (event.target.value.length !== 0) {
      setUrlDisabled(true);
    } else {
      setUrlDisabled(false);
    }
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;
    const image = form.file.files[0];

    createUser(email, pass)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          fetch("http://localhost:5000/jwt", {
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
        updateProfile(result.user, {
          displayName: name,
        });
        const imageRef = ref(storage, `users/${result.user.uid}/profile.jpg`);
        uploadBytes(imageRef, image)
          .then((snapshot) => {
            console.log("Uploaded a blob or file!");
          })
          .then(() => {
            getDownloadURL(imageRef).then((url) => {
              console.log(url);
              updateProfile(result.user, {
                photoURL: url,
              });
            });
          })
          .then(() => navigate(redirectPath, { replace: true }))
          .catch((e) => console.log(e.message));
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
      <Hero className="min-h-[80vh]">
        <Hero.Content className="flex-col w-full ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Please Sign up!</h1>
          </div>
          <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Card.Body>
              <Form onSubmit={handleCreateUser}>
                <Form.Label title="Name" />
                <Input
                  type="text"
                  placeholder="name"
                  className="input-bordered"
                  name="name"
                  required
                />
                <Form.Label title="Email" />
                <Input
                  type="email"
                  placeholder="email"
                  className="input-bordered"
                  name="email"
                  required
                />
                <Form.Label title="Password" />
                <Input
                  type="password"
                  placeholder="password"
                  className="input-bordered"
                  name="password"
                  required
                />
                <Input
                  type="url"
                  placeholder="Photo URL"
                  className="input-bordered mt-5"
                  name="imageURL"
                  onChange={handleUrlField}
                  id="urlField"
                  disabled={urlDisabled}
                />
                <h2 className="text-center ">or</h2>
                <Input
                  name="file"
                  type="file"
                  id="file"
                  className="h-full px-0 relative mt-2 "
                  disabled={fileDissbled}
                  onChange={handleFileField}
                />
                <label className="label">
                  <Link href="#" className="label-text-alt" hover>
                    Forgot password?
                  </Link>
                </label>
                <Button type="submit" className="mt-6 capitalize">
                  Sign up
                </Button>
              </Form>
              <Toaster
                toastOptions={{
                  style: { background: "rgb(239 68 68)" },
                }}
              />
              <p className="ml-1 text-start text-xs font-medium mt-5">
                Already have an account? please
                <Link className="text-primary underline ml-1" to={"/signin"}>
                  Log in
                </Link>
                .
              </p>
            </Card.Body>
          </Card>
        </Hero.Content>
      </Hero>
    </div>
  );
};

export default SignUpUser;
