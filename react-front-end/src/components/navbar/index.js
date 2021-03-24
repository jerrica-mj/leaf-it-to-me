import React from 'react';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { Image } from "react-bootstrap";
import styled from 'styled-components';

import LoginButton from "./LoginButton";
// import LoginButton from "../login/SimpleLogin";
import LogoutButton from "./LogoutButton";
// import Profile from "../Profile"

const Styles = styled.div`
  .navbar {
    background-color: #FBF6EE;

    font-size: 1.5em;
    align-items: center;

    .nav-item {
      line-height: 80px;

      .btn {
        margin-top: 10px;
        font-size: 0.9em;
        font-family: "Averia Libre", Helvetica, sans-serif !important;
      }
    }
  }
  a.navbar-brand {
    font-size: 125%;
    &:hover {
      color: #3B715A;
    }
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #3B715A;
    font-family: "Averia Libre", Helvetica, sans-serif !important;
    text-decoration: none;
    &:hover {
      color: #F9C78C;
    }
  }
`;

export default function NavMenu(){
  // const { user, isAuthenticated } = useAuth0();

  const { isAuthenticated, isLoading, user } = useAuth0();

  // useEffect(() => {
  //   console.log("THIS TEST WORKED FOR CHANGE IN THE NAV BAR");

  // }, [isAuthenticated]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     console.log("authenticated?", isAuthenticated);
  //     axios.get("https://localhost:8080/login/1", {withCredentials: true})
  //     .then((res) => {
  //       console.log("login response", res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Login Error:", err);
  //     });
  //   } else {
  //     console.log("Not yet logged in");
  //   }
  // }, [isAuthenticated]);


  if (!isLoading) {

    console.log("in profile:", isAuthenticated? user.name: "not logged in")

    if (isAuthenticated) {
      axios.get('http://localhost:8080/login/1', {
        withCredentials: true
        })
        .then((res) => {
          console.log("server responded");
          console.log(res.data);
        })
        .catch((err) => {
          console.log("server did not respond", err.message)
          });
    }
  }


  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img
            src="https://github.com/JSmith604/LeafItToMe/blob/master/react-front-end/src/assets/logo-leaf.png?raw=true"
            width="45em"
            height="45em"
            className="d-inline-block align-top pr-2"
            alt="Logo leaf"
          />
          Leaf It To Me
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto flex-row">
            <Nav.Item>
              {/* <Nav.Link> */}
                <Link to="/" className="pr-4">Home</Link>
              {/* </Nav.Link> */}
            </Nav.Item>
            <Nav.Item>
              {/* <Nav.Link> */}
                <Link to="/garden" className="pr-4">Garden</Link>
              {/* </Nav.Link> */}
            </Nav.Item>
            <Nav.Item>
                <Link to="/wishlist" className="pr-4">Wishlist</Link>
            </Nav.Item>
            <Nav.Item>
              {/* <Nav.Link> */}
                <Link to="/search" className="pr-4">Search</Link>
              {/* </Nav.Link> */}
            </Nav.Item>
            {!isAuthenticated && <>
            <Nav.Item>
              <LoginButton>Log In</LoginButton>
            </Nav.Item>
            </> }
            {/* {!isAuthenticated &&
            <Nav.Item>
              <Profile>User</Profile>
            </Nav.Item>
            } */}
          {isAuthenticated && <>
            <Nav.Item className="ml-auto">
              <LogoutButton/>
            </Nav.Item>
            {/* The following 3 all had class="pr-4", which was meant to be className */}
            <p className="pr-4"></p>
            <Nav.Item>
                <Image src={user.picture} alt={user.email} roundedCircle fluid height="60em" width="60em"/>
            </Nav.Item>
          </>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
  );
}
