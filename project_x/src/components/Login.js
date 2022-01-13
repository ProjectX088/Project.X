import React, { useRef, useState }from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";
export default function Login(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")
    const navigate = useNavigate()
    function handleSubmit(event){
        event.preventDefault()

        
        try{
            setError("")
            setLoading(true)
            login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        }catch {
            setError("Failed to sign in")
        }
        setLoading(false)
    }
    return(
        <>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">LOGIN</h1>
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
                            <Button disabled={loading} className="btn btn-primary pt-100 w-100" type="submit">
                                Login 
                            </Button>
                        
                    </Form>
                </Card.Body>
               
            </Card>
            <div className="w-100 text-center mt-2">
                Add an account? <Link to="/"> Sign Up</Link>
            </div>
        </>
    )
};