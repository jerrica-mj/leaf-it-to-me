import React, { useState } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import PlantModal from "./modal";
import ConfirmForm from "./confirmForm";
import EditForm from "./editForm";
import axios from "axios";
axios.defaults.withCredentials = true


export default function PlantListItem(props) {
  const { isAuthenticated } = useAuth0();
  const [modalShow, setModalShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [onWishlist, setOnWishlist] = useState(props.wishlisted);
  const [showEdit, setShowEdit] = useState(false);

  const difficulty = () => {
    let msg = "";
    switch (props.difficulty) {
      case 1:
        msg = "beginner";
        break;
      case 2:
        msg = "easy";
        break;
      case 3:
        msg = "moderate";
        break;
      case 4:
        msg = "difficult";
        break;
      case 5:
        msg = "expert";
        break;
      default:
        console.log(`difficulty level ${props.difficulty} not found`);
    };
    return msg;
  };

  const sun = () => {
    let msg = "";
    switch (props.sun) {
      case 1:
        msg = "very low";
        break;
      case 2:
        msg = "low";
        break;
      case 3:
        msg = "moderate";
        break;
      case 4:
        msg = "high";
        break;
      case 5:
        msg = "very high";
        break;
      default:
        console.log(`difficulty level ${props.difficulty} not found`);
    };
    return msg;
  };


  const addToGarden = (nickname) => {
    console.log("Adding to garden plant id:", props.speciesId);
    console.log("Nickname", nickname);

    axios.post(`http://localhost:8080/garden/plant/${props.speciesId}`, {withCredentials: true, data: {
      nickname}})
    .then((res) => {
      console.log("Server responded to garden add request");
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  const editGardenPlant = (nickname) => {
    console.log("Updating plant", props.plantId, "nickame to:", nickname);



    axios.post(`http://localhost:8080/garden/update/${props.plantId}`, {withCredentials: true, data: {
      nickname}})
      .then((res) => {
        console.log("Server responded to garden plant edit request");
        console.log(res.data);
        // update state with new nickname
        props.hook((prev) => {
          const updatedList = [...prev];
          const updatedPlant = {...prev[props.index], nickname};
          updatedList.splice(props.index, 1, updatedPlant);
          return updatedList;
        });
    }).catch((err) => {
      console.log(err);
    });
  };

  const addToWishlist = () => {
    console.log("Adding to wishlist plant id:", props.speciesId);

    axios.post(`http://localhost:8080/wishlist/plant/${props.speciesId}`, {withCredentials: true, headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
  }})
    .then((res) => {
      console.log("Server responded to wishlist add request");
      console.log(res.data);
      setOnWishlist(true);
    }).catch((err) => {
      console.log(err);
    });
  };

  const moveToGraveyard = () => {
    console.log("Moving to graveyard plant id:", props.plantId);

    axios.get(`http://localhost:8080/graveyard/plant/${props.plantId}`, {withCredentials: true})
    .then((res) => {
      console.log("Server responded to graveyard move request");
      console.log(res.data);

      // remove moved plant from garden state
      props.hook && props.hook((prev) => {
        const updated = prev.filter((element) => {
          return element.id !== props.plantId;
        });
        return updated;
      });

    }).catch((err) => {
      console.log(err);
    });
  };


  return (
    <>

      <div className="col-12 col-sm-11 col-md-6 col-lg-4 col-xl-3 my-3">
        <Card>
          <Card.Img variant="top" src={props.photo} />
          <Card.Body className="mx-auto">
            <Card.Title className="text-center">
                <h5>
                  {props.nickname || props.name}
                  {props.hook && <i class="fas fa-pencil-alt fs-6 ml-1" style={{color: "#9BBBA7"}} onClick={() => {setShowEdit(true)}} />}
                </h5></Card.Title>
            <Card.Subtitle className="text-center">{props.nickname && props.name}</Card.Subtitle>
            {(!props.nickname && !props.noBreak) && <br/>}
          </Card.Body>

          <Card.Body className="mb-0 py-0">
            <div className="row px-2 no-gutters">
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-leaf icon"></i></h3>
                  <p className="text-center">{difficulty()}</p>
              </div>
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-tint icon"></i></h3>
                  <p className="text-center">{props.water} days</p>
              </div>
            </div>
            <div className="row px-2 no-gutters">
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-sun icon"></i></h3>
                  <p className="text-center">{sun()}</p>
              </div>
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-thermometer-half icon"></i></h3>
                  <p className="text-center">{props.temp}°C</p>
              </div>
            </div>
          </Card.Body>

          <Container className="text-center">
            <Row className="mb-3">
              <Col>
                <Card.Link className="btn btn-success w-100" onClick={() => setModalShow(true)}>See More</Card.Link>
              </Col>
            </Row>
            {(props.gardenButton || props.wishlistButton) &&
              <Row className="justify-content-md-center mb-3">
                {(props.gardenButton && isAuthenticated) &&
                  <Col>
                    <Card.Link className="btn btn-outline-success w-100" onClick={() => setConfirmShow(true)}><i className="fas fa-plus-circle"></i><br />Garden</Card.Link>
                  </Col>
                }
                {(props.wishlistButton && isAuthenticated) &&
                  <Col className="text-right">
                    {!onWishlist &&
                      <Button variant="outline-success" block onClick={addToWishlist}><i className="far fa-heart"/><br/>Wishlist</Button>
                    }
                    {onWishlist &&
                      <Button variant="outline-success" block disabled onClick={addToWishlist}><i className="fas fa-heart"/><br/>Wishlist</Button>
                    }
                    {/* <Card.Link className="btn btn-outline-success w-100" onClick={addToWishlist}><i className="far fa-heart"></i><br/>Wishlist</Card.Link> */}
                  </Col>
                }
              </Row>
            }
            {props.hook &&
              <Row className="mb-3">
                <Col>
                  <Card.Link className="btn btn-outline-secondary w-100" onClick={moveToGraveyard}><i className="fas fa-skull-crossbones"></i> Graveyard</Card.Link>
                </Col>
              </Row>
              }
          </Container>

          {/* Pop up / modal components */}
            <PlantModal
              name={props.name}
              scientificName={props.scientificName}
              description={props.description}
              difficulty={difficulty()}
              waterRating={props.waterRating}
              waterDesc={props.water}
              sun={sun()}
              temp={props.temp}
              fertilizer={props.fertilizer}
              toxic={props.toxic}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <ConfirmForm
              name={props.name}
              show={confirmShow}
              onHide={() => setConfirmShow(false)}
              onConfirm={addToGarden}
            />
            <EditForm
              name={props.name}
              show={showEdit}
              onHide={() => setShowEdit(false)}
              onConfirm={editGardenPlant}
            />
        </Card>
      </div>

    </>

  );
}
