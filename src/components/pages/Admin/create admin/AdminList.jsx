import React from "react";
// data fetching
import axios from "axios";
import useSWR from "swr";
import { BASE_URL } from "../../../utils/config";

const AdminList = () => {
  const { data: admins } = useSWR(`${BASE_URL}/admin`, {
    refreshInterval: 0,
  });

  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <th>{admin.fullname}</th>
              <th> {admin.email} </th>
              <th>delete</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
