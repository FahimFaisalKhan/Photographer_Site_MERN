import React, { useEffect, useState } from "react";
import { Button, Dropdown, Input, Menu, Navbar } from "react-daisyui";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./Navigation.css";
const Navigation = () => {
  const [searchFieldHidden, setSearchFieldHidden] = useState(true);
  useEffect(() => {
    const field = document.getElementById("nav-search-field");
    if (!searchFieldHidden) {
      field.classList.remove("hidden");
    } else {
      field.classList.add("hidden");
    }
  }, [searchFieldHidden]);
  const handleSearchFieldAnm = () => {
    setSearchFieldHidden(!searchFieldHidden);
  };
  return (
    <Navbar className="container mx-auto">
      <Navbar.Start className="hidden lg:flex">
        <Menu horizontal className="p-0">
          <Menu.Item>
            <Link to={"/"} className="">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/services"}>Services</Link>
          </Menu.Item>
          <Menu.Item>
            <Link>Sign in</Link>
          </Menu.Item>
          <Menu.Item>
            <Link>Sign up</Link>
          </Menu.Item>
        </Menu>
      </Navbar.Start>
      <Navbar.Center>
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
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>

            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </Navbar.Center>
      <Navbar.End>
        <Input id="nav-search-field" className="h-10 search-anm hidden" />
        <Button
          className="bg-transparent hover:bg-transparent border-none text-base-content text-lg"
          onClick={handleSearchFieldAnm}
        >
          <BiSearch />
        </Button>
      </Navbar.End>
    </Navbar>
  );
};

export default Navigation;
