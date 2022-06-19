import React, { useState } from "react";
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
      {isAdmin ? <Users users={data} /> : <AdminForm authAdmin={authAdmin} />}
    </div>
  );
};

export default Admin;
