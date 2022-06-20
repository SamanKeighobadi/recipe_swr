import React from "react";
import NewAdminForm from './NewAdminForm'
// Bootstrap components
import {  Row, Col } from "react-bootstrap";
import AdminList from "./AdminList";


const NewAdmin = () => {
  return (
    <Row>
      <Col md={4}>
       <NewAdminForm />
      </Col>
      <Col md={8}>
          <AdminList />
      </Col>
    </Row>
  );
};

export default NewAdmin;
