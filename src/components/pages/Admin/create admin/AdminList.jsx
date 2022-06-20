import React from "react";
// prop types
import PropTypes from 'prop-types';

const AdminList = ({ deleteAdmin, admins }) => {
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
              <th onClick={() => deleteAdmin(admin.id)}>
                <button className="btn btn-danger btn-sm">delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// propTypes 
AdminList.propTypes ={
    deleteAdmin:PropTypes.func,
    admins:PropTypes.arrayOf(PropTypes.object)
}

export default AdminList;
