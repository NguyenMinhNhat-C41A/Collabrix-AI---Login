import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import{ addDoc, collection } from 'firebase/firestore';

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const userValueRef = useRef();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  

  const userClasses= [
    {label: "Not Selected", value: 0},
    {label: "Student", value: 1},
    {label: "Business", value: 2}
  ]

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }
    if(userValueRef.current.value === "Not Selected"){
      return setError("Please choose an option");
    }
    try {
      setError("");
      setLoading(true);
      await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then(
        async (cred) => {
          try{
            const userRef = await addDoc(collection(db, "users"), {
              userClass: `${userValueRef.current.value}`
            })
            console.log("userID: " + userRef.id);
          } catch {

          }

        }
      )
      console.log("CHEC1")
      
       navigate("/");
    } catch {
      return setError("Failed to create an account")
    }

    setLoading(false)
  }
  return (
    <div>
      <Card>
        <Card.Body>
            <h2 className = "text-center mb-4"> Sign Up </h2>
              {error && <Alert variant = "danger" className='text-center'>{error}</Alert>}
              <Form onSubmit={handleSubmit}>

                <Form.Group id = "userClass">
                  <Form.Label>Sign Up As</Form.Label>
                  <select className ="form-control dropdown-toggle" ref={userValueRef} defaultValue={{label: "Not Selected", value: 0}} onChange={() => {console.log("X")}} required>
                    {
                      userClasses.map( (option) => {
                        return <option key={option.value}>{option.label}</option>
                      })
                    }
                  </select>
                  
                </Form.Group>

                <Form.Group id = "email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' ref = {emailRef} required />
                </Form.Group>
                
                <Form.Group id = "password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' ref = {passwordRef} required />
                </Form.Group>
                
                <Form.Group id = "passwordConfirmation">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type='password' ref = {passwordConfirmationRef} required />
                </Form.Group>

                <Button disabled = {loading} className='w-100 mt-2' type ='submit'>Sign Up</Button>
              </Form>
            
        </Card.Body>
      </Card>
      <div className = "w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log in</Link>
        </div>
    </div>
  )

}