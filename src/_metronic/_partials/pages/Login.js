import React from "react";
import { Col, Form, Button } from "react-bootstrap";
export function Login() {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Row>
        <Button variant="danger" type="submit">
          Sign in
        </Button>
        <Form.Group as={Col} controlId="formBasicChecbox">
          <Form.Check type="checkbox"  label="Remember me" />
        </Form.Group>
    </Form.Row>

    <Form.Text className="text">
     <p>Don't have an account?
       <a href className="#"><span style={{color:"red"}}>Sign Up</span></a>
     </p>
          </Form.Text>
          <Form.Text className="text">
          Forgot your password?
          </Form.Text>
      </Form>
    </>
  );
}

