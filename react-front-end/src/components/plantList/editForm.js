import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
// import styled from "styled-components";


const greenText = {
  color: "#265642"
};

export default function EditForm(props) {
  const [nickname, setNickname] = useState("");

  const clearClose = () => {
    setNickname("");
    props.onHide();
  };

  const submitClose = () => {
    props.onConfirm(nickname);
    clearClose();
  };

  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={greenText} >
          Rename your plants 🪴
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={greenText} >
          <h5>Add or change your {props.name}'s nickname!</h5>
          <p>Changed your mind about the nickname of your plant? No problem! Simply add the new nickname below or leave it blank to remove the last nickname, and we'll update the info in your garden.</p>
          <Form>
              <Form.Label>🪴 Plant Nickname (leave blank to remove this plant's nickname)</Form.Label>
              <Form.Control
                placeholder="Add a nickname for your new plant here..."
                value={nickname}
                onChange={(event) => {setNickname(event.target.value)}}
              />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={submitClose}>Update Nickname</Button>
          <Button variant="secondary" onClick={clearClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
  );
}