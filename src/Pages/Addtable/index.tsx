import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components";
import { Button, Form, Input, Select, Space, } from "antd";
import useCheckLogin from "../../Hooks/UseCheckLogin";
import "./addtable.css"

interface Addtables {
    name: string;
    is_active: string;

}



const AddSchema = Yup.object().shape({
    name: Yup.string().required('Please input your Full Name'),
    is_active: Yup.string().required('Status is Required'),
})

const Addtable: React.FC = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useCheckLogin(token)
    const handlenewdata = async (values: Addtables) => {
        console.log(values)
        const fetching = await fetch('https://mock-api.arikmpt.com/api/category/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(values)
        })
        const response = await fetching.json()
        console.log(response)
        if (response) {

            navigate('/home')
        }
    }
    const initialValues = {
        name: "",
        is_active: "",
    }
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: AddSchema,
        onSubmit: handlenewdata,
    })

    return (
        <>
            <Card>
                <h2 className="text-center">Add New Data</h2>
                <Form name="basic" autoComplete="off" justify-content="center" onFinish={formik.handleSubmit}>
                    <Form.Item
                        name="name"
                        className="form-control"
                        id="exampleInputName1"
                        validateStatus={formik.touched.name && formik.errors.name ? 'error' : 'success'}
                        help={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
                    >
                        <Input
                            placeholder="Your Name"
                            value={formik.values.name}
                            onChange={formik.handleChange('name')}
                            status={formik.errors.name && 'error'}
                        />
                    </Form.Item>
                    <Form.Item name="is_active"
                        validateStatus={formik.touched.name && formik.errors.name ? 'error' : 'success'}
                        help={formik.touched.is_active && formik.errors.is_active ? formik.errors.is_active : ''}
                    >
                        <Select
                            placeholder="Select Status"
                            value={formik.values.is_active}
                            onChange={formik.handleChange('is_active')}>
                            <Select.Option value="true">Active</Select.Option>
                            <Select.Option value="false">Deactive</Select.Option>
                        </Select>
                    </Form.Item>

                    <div>
                        <Space>
                            <br></br>
                            <Button type="primary" htmlType="submit">Add New</Button>
                            <br></br>
                            <Button type="primary" onClick={() => navigate('/home')}>Back</Button>
                        </Space>
                    </div>
                </Form>

            </Card>
        </>
    )
}
export default Addtable;