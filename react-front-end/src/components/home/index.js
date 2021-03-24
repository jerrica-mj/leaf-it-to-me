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
            <Image src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/2249959/pexels-photo-2249959.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/1012506/pexels-photo-1012506.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/2894962/pexels-photo-2894962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/2001154/pexels-photo-2001154.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/3644742/pexels-photo-3644742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/4207813/pexels-photo-4207813.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/4505144/pexels-photo-4505144.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/3234638/pexels-photo-3234638.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            {/* <Image src="" rounded fluid className="my-3" /> */}
          </Col>

          <Col sm={12} md={6} lg={6}>
            <Image src="https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/2069425/pexels-photo-2069425.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/3153522/pexels-photo-3153522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/912396/pexels-photo-912396.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/4503267/pexels-photo-4503267.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
          </Col>

          <Col sm={12} md={6} lg={3}>
            <Image src="https://images.pexels.com/photos/3952027/pexels-photo-3952027.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/2736497/pexels-photo-2736497.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/3094208/pexels-photo-3094208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/3952029/pexels-photo-3952029.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/4503268/pexels-photo-4503268.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/2239673/pexels-photo-2239673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/4503822/pexels-photo-4503822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
            <Image src="https://images.pexels.com/photos/3153521/pexels-photo-3153521.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" rounded fluid className="my-3" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
