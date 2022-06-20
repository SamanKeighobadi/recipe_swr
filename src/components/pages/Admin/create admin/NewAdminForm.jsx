import React from "react";
// Bootstrap components
import { Card, Form, Button } from "react-bootstrap";

const NewAdminForm = ({addAdmin}) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Form onSubmit={addAdmin}>
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
            <Button type="submit" vairant="primary"  >
              submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewAdminForm;
