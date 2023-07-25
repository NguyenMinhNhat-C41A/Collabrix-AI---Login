import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from'react-bootstrap'
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
export default function ForgotPassword() {
  const emailRef = useRef();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setMessage("");
      setLoading(true);
      await sendPasswordResetEmail(auth, emailRef.current.value)
            //   .catch((error) => {
            //   setError(error.message);
            // })
      setMessage("Go to your email inbox to continue");  
    } catch {
      setError("Failed to reset Password");
    }

    setLoading(false)
  }
  return (
    <div>
      <Card>
        <Card.Body>
            <h2 className = "text-center mb-4"> Log In </h2>
            {error && <Alert variant = "danger" className='text-center'>{error}</Alert>}
            {message && <Alert variant = "success" className='text-center'>{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id = "email">
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref = {emailRef} required />
              </Form.Group>
              <Button disabled = {loading} className='w-100 mt-2' type ='submit'>Reset Password</Button>
            </Form>
            <div className = "w-100 text-center mt-2">
              <Link to="/login">Login</Link>
            </div>
        </Card.Body>
      </Card>
      <div className = "w-100 text-center mt-2">
            <Link to="/signup">Create a new account</Link>
        </div>
    </div>
  )
}
