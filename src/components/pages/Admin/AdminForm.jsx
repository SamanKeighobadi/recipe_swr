import React from "react";
// Bootstrap components
import { Form, Row, Col, Card, Button } from "react-bootstrap";
// prop types
import PropTypes from 'prop-types';

const AdminForm = ({ authAdmin }) => {
  return (
    <Row>
      <Col md={4} className="mx-auto mt-5">
        <Card>
          <Card.Header>Validation admin</Card.Header>
          <Card.Body>
            <Form onSubmit={authAdmin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

// prop types
AdminForm.propTyps ={
    authAdmin: PropTypes.func,
}

export default AdminForm;
