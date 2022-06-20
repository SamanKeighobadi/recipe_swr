import React from "react";
import NewAdminForm from "./NewAdminForm";
// Bootstrap components
import { Row, Col } from "react-bootstrap";
import AdminList from "./AdminList";
// axios
import axios from "axios";
import { BASE_URL } from "../../../utils/config";
import useSWR from "swr";

const NewAdmin = () => {
  const { data,mutate } = useSWR(`${BASE_URL}/admin`, {
    refreshInterval: 0,
  });

  const addAdmin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const newAdmin = {
      fullname: data.get("fullname"),
      email: data.get("email"),
    };
    axios.post(`${BASE_URL}/admin`, newAdmin);
  };

  /**
   *
   * @param {number} id id of admin which we want to delete
   */
  const deleteAdmin = (id) => {
    axios.delete(`${BASE_URL}/admin/${id}`);
  };

  return (
    <Row className="px-5">
      <div className=" d-flex justify-content-between">
        <h4>Admin manager</h4>
        <button onClick={() => mutate(data)} className="btn btn-info btn-sm text-white">load admins</button>
      </div>

      <Col md={4}>
        <NewAdminForm addAdmin={addAdmin} />
      </Col>
      <Col md={8}>
        <AdminList deleteAdmin={deleteAdmin} admins={data} />
      </Col>
    </Row>
  );
};

export default NewAdmin;
