import React from "react";
import NewAdminForm from "./NewAdminForm";
// Bootstrap components
import { Row, Col } from "react-bootstrap";
import AdminList from "./AdminList";
// axios
import axios from "axios";
import { BASE_URL } from "../../../utils/config";

const NewAdmin = () => {
  const addAdmin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const newAdmin = {
      fullname: data.get("fullname"),
      email: data.get("email"),
    };
    axios.post(`${BASE_URL}/admin`, newAdmin);
  };

  const deleteAdmin = (id) => {
    axios.delete(`${BASE_URL}/admin/${id}`);
  };

  return (
    <Row>
      <Col md={4}>
        <NewAdminForm addAdmin={addAdmin} />
      </Col>
      <Col md={8}>
        <AdminList deleteAdmin={deleteAdmin} />
      </Col>
    </Row>
  );
};

export default NewAdmin;
