import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Hero from "../hero";

export default function HomePage(props) {

  return (
    <>
      <Hero
        header="Leaf It To Me"
        text="Grow plants that not only survive but thrive!"
        gardenButton="true"
      ></Hero>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <Image src="https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/2249959/pexels-photo-2249959.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/2894962/pexels-photo-2894962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" rounded fluid className="my-3" />
          </Col>

          <Col sm={12} md={6} lg={6}>
            <Image src="https://images.pexels.com/photos/3153522/pexels-photo-3153522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/2069425/pexels-photo-2069425.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
          </Col>

          <Col sm={12} md={6} lg={3}>
            <Image src="https://images.pexels.com/photos/3952027/pexels-photo-3952027.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/3952029/pexels-photo-3952029.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
