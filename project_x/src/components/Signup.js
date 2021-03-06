import React, { useRef, useState }from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";
export default function Signup(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")
    const navigate = useNavigate()
    function handleSubmit(event){
        event.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }
        try{
            setError("")
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value)
            navigate('/dashboard')
        }catch {
            setError("Failed to create an account")
        }
        setLoading(false)
    }
    return(
        <>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">SIGN UP</h1>
                    {error && <Alert variant="danger"></Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="projectX@something.com" ref={emailRef} required/>
                        </Form.Group>
                        
                        <Form.Group id="password" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} required/>
                        </Form.Group>

                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required/>
                        </Form.Group>

                        <Button disabled={loading} className="btn btn-primary pt-100 w-100" type="submit">
                            Submit 
                        </Button>
                    </Form>
                </Card.Body>
                
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login"> Login </Link> 
            </div>
        </>
    )
};