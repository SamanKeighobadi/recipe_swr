import React from "react";
import User from "./User";
// prop types
import PropTypes from "prop-types";
// Bootstrap components
import { Row, Col } from "react-bootstrap";

const Users = ({ users }) => {
  return (
    <Row className="mt-5">
      {users.length > 0 &&
        users.map((user) => (
          <Col md={3} key={user.id} className="px-5">
            <User {...user} />
          </Col>
        ))}
    </Row>
  );
};

// prop types
Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default Users;
