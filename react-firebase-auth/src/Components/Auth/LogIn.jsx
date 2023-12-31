import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      //await login(emailRef.current.value, passwordRef.current.value)
      await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            //   .catch((error) => {
            //   setError(error.message);
            // })
      navigate("/");
    } catch {
      setError("Password or email is incorrect");
    }

    setLoading(false)
  }
  return (
    <div>
      <Card>
        <Card.Body>
            <h2 className = "text-center mb-4"> Log In </h2>
            {error && <Alert variant = "danger" className='text-center'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id = "email">
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref = {emailRef} required />
              </Form.Group>
              <Form.Group id = "password">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' ref = {passwordRef} required />
              </Form.Group>
              <Button disabled = {loading} className='w-100 mt-2' type ='submit'>Log In</Button>
            </Form>
            <div className = "w-100 text-center mt-2">
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
        </Card.Body>
      </Card>
      <div className = "w-100 text-center mt-2">
            <Link to="/signup">Create a new account</Link>
        </div>
    </div>
  )

}