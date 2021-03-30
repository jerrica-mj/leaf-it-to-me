import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import leafImage from "../assets/leaves-pothos-cropped-masked.jpeg";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./navbar/LoginButton";


const Styles = styled.div`
  .jumbotron {
    height: 20em;
    background: url(${leafImage}) no-repeat fixed bottom;
    background-size: cover;
    font-family: "Montserrat", Helvetica, sans-serif;
    font-size: 1.5em;

    .container {

      text-align: center;

      h1 {
        font-family: "Averia Libre", cursive;
        margin-bottom: 0.5em;
      }
    }

  }
`;

export default function Hero(props) {
  const { isAuthenticated } = useAuth0();

  return (
    <Styles>
      <Jumbotron fluid className="d-flex align-items-center">
        <Container>
        <h1>{props.header}</h1>
        <p>
          {props.text}
        </p>
          {props.children}
        <div>
          {(!isAuthenticated && !props.noButton) &&
            <LoginButton>Get Started</LoginButton>
          }
          {(isAuthenticated && props.gardenButton) &&
            <Link to="/garden">
              <Button variant="success">See My Garden</Button>
            </Link>
          }
          {(isAuthenticated && props.compostButton) &&
            <Link to="/compost">
              <Button variant="secondary">See Plant Compost</Button>
            </Link>
          }
        </div>
        </Container>
      </Jumbotron>
    </Styles>
  );
}