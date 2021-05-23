import React, { useState, useEffect, useContext} from 'react';
import { AccountContext } from './Account';

const State = () => {
   const [status, setStatus] = useState(false);

   const { getSession, logout  } = useContext(AccountContext);

   useEffect(() => {
        getSession()
            .then((session => {
                console.log('Session: ', session)
                setStatus(true)
            }))
   },[])

   return <div> { status ?
     <button 
     type="button" 
     class="btn btn-outline-danger mt-3"
     onClick={ () => logout() }
     >Logout</button> : "Please Login" }</div>
}

export default State;