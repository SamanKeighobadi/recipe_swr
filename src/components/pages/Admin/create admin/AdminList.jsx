import React from "react";
// data fetching
import useSWR from "swr";
import { BASE_URL } from "../../../utils/config";

const AdminList = ({deleteAdmin}) => {
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
              <th onClick={() => deleteAdmin(admin.id)}  >
                  <button className="btn btn-danger btn-sm">delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
