import React, { useState } from "react";
import { Link } from "react-router-dom";
// SWR
import useSWR from "swr";
import Users from "../../Users/Users";
import { BASE_URL } from "../../utils/config";
// Custom components
import AdminForm from "./AdminForm";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const { data } = useSWR(() => (isAdmin ? `${BASE_URL}/users` : null));

  const authAdmin = (e) => {
    e.preventDefault();
    setIsAdmin(true);
  };

  return (
    <div>
      <div className="px-3 d-flex justify-content-between">
        <h4>Welcome to admin page</h4>
        <Link to="/add_admin" className="btn btn-primary btn-sm ">new admin</Link>
      </div>

      {isAdmin ? <Users users={data} /> : <AdminForm authAdmin={authAdmin} />}
    </div>
  );
};

export default Admin;
