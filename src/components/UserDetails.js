import React from 'react';
import { useParams } from 'react-router-dom';
function UserDetails(props) {
    const {userId}=useParams();
    return (
        <div>
            Details about the users {userId}
        </div>
    );
}

export default UserDetails;