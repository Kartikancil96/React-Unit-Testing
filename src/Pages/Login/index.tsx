import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { Card, Text } from "../../components";
import { Button } from "antd";
import './login.css'

interface DataLoginValues {
    email: string;
    password: string;
}


const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    password: Yup.string().required('Password is required')
})


const Login: React.FC = () => {
    const navigate = useNavigate()
    const handlelogin = async (values: DataLoginValues) => {
        console.log(values)
        const fetching = await fetch('https://mock-api.arikmpt.com/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        })
        const response = await fetching.json()
        console.log(response)
        if (response) {
            localStorage.setItem('token', response.data.token)
            navigate('/home')

        }

    }

    return (
        <>
            <Card>
                <h1 className="text-center">Login</h1>
                <Formik initialValues={{
                    email: '',
                    password: '',
                }}
                    validationSchema={LoginSchema}
                    onSubmit={handlelogin}
                >
                    <Form name="basic" autoComplete="off" justify-content="center">
                        <div>
                            <Text>Email Address</Text>
                            <Field
                                name="email"
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="ex@ample.com"
                            />
                            <ErrorMessage name="email" className="text-danger" />
                        </div>
                        <div>
                            <Text>Password</Text>
                            <Field
                                name="password"
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" className="text-danger" />
                        </div>
                        <div>
                            <br></br>
                            <Button type="primary" htmlType="submit">Log in</Button>
                        </div>
                        <div>
                            <p>Still don't have an account?</p>
                            <p><Link to="/register"><span style={{ color: '#03658c' }}>Sign Up!</span></Link></p>
                        </div>
                    </Form>
                </Formik>

            </Card>
        </>
    )
}
export default Login;