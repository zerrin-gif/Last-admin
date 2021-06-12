import React from "react";
import { Col, Form, Button, Container, Image } from "react-bootstrap";
export function AddMovie() {
  return (
    <>
    <Form>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridTitle">
      <Form.Control type="title" placeholder="Title" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridUploadImage">
      <Form.Control  placeholder="Upload Image" />
    </Form.Group>
    
  
  
  <Form.Row>
  <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
    <Form.Control as="select" >
    <option>Comedy</option>
     <option>Horror</option>
      <option>Drama</option>
      <option>Romance</option>
      <option>Crime</option>
      </Form.Control>
  </Form.Group>

  <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
    <Form.Control as="select" >
    <option>FullHD</option>
     <option>HD</option>
      </Form.Control>
  </Form.Group>
  </Form.Row>

  <Form.Group as={Col} controlId="formGridDescription">
    <Form.Control placeholder="Description" />
  </Form.Group>
  
  <Container as={Col}>
   <Col xs={6} md={4}>
      <Image src="holder.js/171x180" thumbnail />
    </Col>
    </Container>
    </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGrid">
      <Form.Control placeholder="Release Year"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLanguage">
      <Form.Control as="select" placeholder="Choose Language">
      <option>Choose Language</option>
        <option>English</option>
        <option>Hindi</option>
        <option>Tamil</option>
        <option>Gujarati</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridDuration">
    <Form.Control placeholder="Movie Duration" />
  </Form.Group>

  <Button variant="danger" type="submit">
    Submit
  </Button>
  <Button variant="secondary" type="cancel">
    Cancel
  </Button>
</Form>
</>
  )
}

