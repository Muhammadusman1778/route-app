import React from 'react';
import { Outlet,Link, useSearchParams } from 'react-router-dom';

function User(props) {
    const [searchParams,setSearchParams]=useSearchParams();
    const showActiveUsers=searchParams.get('filter') === 'active';
    return (
        <div>
          <Link to=":1">  <h1>User 1</h1></Link>
            <h1>User 2</h1>
            <h1>User 3</h1>
            <Outlet/>
            <button onClick={()=>setSearchParams({'filter':'active'})}>Active Users</button>
            <button onClick={()=>setSearchParams({})}>Reset Filter</button>
            {showActiveUsers? <h2>Show Active Users</h2> : <h2>Show All Users</h2>}
        </div>
      
      
    );
}

export default User;