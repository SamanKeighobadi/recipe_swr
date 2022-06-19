import React from 'react';
// Bootstrap components
import {Card} from 'react-bootstrap'

const User = ({email,name,address}) => {
    
    return ( 
        <Card className='mb-3'>
            <Card.Header>
                {email}
            </Card.Header>
            <Card.Body>
                <p>{name}</p>
                <p>{address.country}</p>
                <p>{address.city}</p>
            </Card.Body>
        </Card>
     );
}
 
export default User;