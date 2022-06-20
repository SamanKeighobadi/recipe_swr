import React from "react";
// Bootstrap components
import {Card,Form} from 'react-bootstrap'

const NewAdminForm = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id={"email"}
                placeholder="example@gmail.com"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                name="fullname"
                id={"fullname"}
                placeholder="saman keighobadi"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id={"password"}
                placeholder="*******"
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewAdminForm;
