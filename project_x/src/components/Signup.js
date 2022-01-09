import React, { useRef }from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext'
export default function Signup(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()

    function handleSubmit(event){
        event.preventDefault()

        signup(emailRef.current.value, passwordRef.current.value)
    }
    return(
        <>
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">Sign Up</h1>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" style={{padding: "10"}} placeholder="projectX@something.com" ref={emailRef} required/>
                        </Form.Group>
                        
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} required/>
                        </Form.Group>

                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        
                        <Button className="w-100" type="submit">Submit</Button>
                        
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log in
            </div>
        </>
    )
};