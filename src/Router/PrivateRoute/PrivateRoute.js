import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return <h1 className='5xl'>Loading.......</h1>
    }


    if(user){
        return children;
    }



    return <Navigate  ate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;