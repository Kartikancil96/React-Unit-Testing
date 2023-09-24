import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Card, Text } from "../../components";
import { Button } from "antd";

interface DataRegisValues {
    name: string;
    email: string;
    password: string;
}

const RegisSchema = Yup.object().shape({
    name: Yup.string().required('Please input your Full Name'),
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    password: Yup.string().min(8).required('Password is required')
})

const Register: React.FC = () => {
    const navigate = useNavigate()
    const handleregis = async (values: DataRegisValues) => {
        console.log(values)
        const fetching = await fetch('https://mock-api.arikmpt.com/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        })
        const response = await fetching.json()
        console.log(response)
        if (response) {
            localStorage.setItem('token', response.data.token)
            navigate('/')
        }
    }

    return (
        <>
            <Card>
                <h1 className="text-center">Register Account</h1>
                <Formik initialValues={{
                    name: "",
                    email: '',
                    password: '',
                }}
                    validationSchema={RegisSchema}
                    onSubmit={handleregis}
                >
                    <Form name="basic" autoComplete="off" justify-content="center">
                        <div>
                            <Text>Name</Text>
                            <Field
                                name="name"
                                type="text"
                                className="form-control"
                                id="exampleInputName1"
                                placeholder="Your Name"
                            />
                            <ErrorMessage name="name" className="text-danger" />
                        </div>
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
                            <Button type="primary" htmlType="submit">Sign Up</Button>
                            <Button onClick={()=> navigate ('/')}>Back</Button>
                        </div>
                    </Form>
                </Formik>

            </Card>
        </>
    )
}
export default Register;