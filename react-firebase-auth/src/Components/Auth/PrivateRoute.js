import React from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from '../../Dashboard';
import { useAuth } from '../../Contexts/AuthContext'

export default function PrivateRoute({component: Component, ...rest}) {
    const {currentUser} = useAuth();
    console.log(currentUser);

        return currentUser ? <Dashboard/> : <Navigate to="login"/>

    }
