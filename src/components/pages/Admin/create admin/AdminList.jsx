import React from 'react'

const AdminList = () => {
    return ( 
        <div>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>saman</th>
                        <th>saman.keighobadi@gmail.com</th>
                        <th>delete</th>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default AdminList;