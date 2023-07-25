import React, {useState} from 'react'
import {Card, Button, Alert} from'react-bootstrap'
import { useAuth } from './Contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
export default function Dashboard() {
  const [error, setError] = useState('');
  const {currentUser} = useAuth();
  const navigate = useNavigate();

  async function handleLogOut(){
    setError("");
    try{
      await signOut(auth)
              // .catch((error) => {
              //   setError(error.message);
              // });
      navigate("/login");
    } catch{
      setError("Failed to log out");
    }
  }
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className = "text-center mb-4"> Profile </h2>
          {error && <Alert variant = "danger" className='text-center'>{error}</Alert>}
          <strong className="text-center">{currentUser.email} </strong> 
          <Link to="update-profile" className='btn btn-primary w-100'>Update Profile</Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant='link' onClick={handleLogOut}> Log Out</Button>
      </div>
    </div>
  )
}
