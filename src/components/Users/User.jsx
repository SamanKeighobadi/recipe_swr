import React from "react";
// Bootstrap components
import { Card } from "react-bootstrap";
// prop types
import PropTypes from "prop-types";

const User = ({ email, name, address }) => {
  return (
    <Card className="mb-3">
      <Card.Header>{email}</Card.Header>
      <Card.Body>
        <label className="text-primary">Name</label>
        <p>{name}</p>
        <label className="text-primary">Country</label>
        <p>{address.country}</p>
        <label className="text-primary">City</label>
        <p>{address.city}</p>
      </Card.Body>
    </Card>
  );
};

// prop types
User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.objectOf(PropTypes.string),
};

export default User;
