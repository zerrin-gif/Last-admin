// /* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import { Col, Form, Button } from "react-bootstrap";


export function AddCategory() {
  return (
    <>
    <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Control type="name" placeholder="Name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridDescription">
    <Form.Control placeholder="Description" />
  </Form.Group>

  <Form.Label>Status</Form.Label>
  <Form.Row>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="radio" label="Enable" />
  </Form.Group>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="radio" label="Disable" />
  </Form.Group>
  </Form.Row>
  <Button variant="danger" type="submit">
    Submit
  </Button>
  <Button variant="secondary" type="cancel">
    Cancel
  </Button>
</Form>
    </>
  );
}
