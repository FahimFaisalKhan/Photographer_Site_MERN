import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Dropdown,
  Form,
  Input,
  Menu,
  Navbar,
} from "react-daisyui";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./Navigation.css";
import { MyAuthContext } from "../../Contexts/AuthContext/AuthContext";
import camLogo from "../../Static/Images/CamLogo.svg";
const Navigation = () => {
  const { signOutUser, user } = useContext(MyAuthContext);
  const navigate = useNavigate();
  const [searchFieldHidden, setSearchFieldHidden] = useState(false);

  const handleSearchField = (event) => {
    //
    const targetElement = event.target.tagName;
    const searchField = document.getElementById("nav-search-field");
    console.log(targetElement === "BUTTON");
    if (
      (targetElement === "BUTTON" ||
        targetElement === "svg" ||
        targetElement === "path") &&
      searchField.value === ""
    ) {
      setSearchFieldHidden(!searchFieldHidden);
    } else if (
      targetElement === "BUTTON" ||
      targetElement === "svg" ||
      targetElement === "path" ||
      event.key === "Enter"
    ) {
      navigate("/services", {
        replace: true,
        state: { search: searchField.value },
      });
    }
  };
  return (
    <Navbar className="container mx-auto flex-wrap">
      <Navbar.Start className="hidden lg:flex w-[80%] ">
        <Menu horizontal className="p-0">
          {user && (
            <Menu.Item>
              <Link to={"/"}>
                <Avatar shape="circle" size="xs" src={user.photoURL} />
              </Link>
            </Menu.Item>
          )}
          <Menu.Item>
            <Link to={"/"} className="">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/services"}>Services</Link>
          </Menu.Item>
          {!user ? (
            <>
              <Menu.Item>
                <Link to={"/signin"}>Sign in</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/signup"}>Sign up</Link>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item>
                <Link to={"/myreviews"}>My Reviews</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/addservice"}>Add Services</Link>
              </Menu.Item>
              <Menu.Item onClick={signOutUser}>
                <Link to={"/"}>Sign out</Link>
              </Menu.Item>
            </>
          )}
          <Menu.Item>
            <Link to={"/blog"}>Blog</Link>
          </Menu.Item>
        </Menu>
      </Navbar.Start>
      <Navbar.Center className="w-full justify-between  md:w-[60%] lg:w-[33%] xl:w-auto">
        <Dropdown>
          <Button color="ghost" tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </Button>
          <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
            {user && (
              <Link to={"/"}>
                <Avatar shape="circle" size="xs" src={user.photoURL} />
              </Link>
            )}

            <Link to={"/"} className="">
              Home
            </Link>

            <Link to={"/services"}>Services</Link>

            {!user ? (
              <>
                <Link to={"/signin"}>Sign in</Link>

                <Link to={"/signup"}>Sign up</Link>
              </>
            ) : (
              <>
                <Link to={"/myreviews"}>My Reviews</Link>

                <Link to={"/addservice"}>Add Services</Link>

                <Link onClick={signOutUser} to={"/"}>
                  Sign out
                </Link>
              </>
            )}

            <Link to={"/blog"}>Blog</Link>
          </Dropdown.Menu>
        </Dropdown>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl ">
          <div className="flex gap-2 text-2xl text-primary">
            <p>F's</p>
            <img className="w-[2rem]" src={camLogo} alt="" />
            <p>C</p>
          </div>
        </Link>
      </Navbar.Center>
      <Navbar.End>
        <Input
          id="nav-search-field"
          className={`h-10 search-anm ${searchFieldHidden && "hidden"} `}
          name="search"
          onKeyUp={handleSearchField}
        />
        <Button
          className="bg-transparent hover:bg-transparent border-none text-base-content text-lg"
          onClick={handleSearchField}
        >
          <BiSearch />
        </Button>
      </Navbar.End>
    </Navbar>
  );
};

export default Navigation;
