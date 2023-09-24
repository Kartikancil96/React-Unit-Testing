import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../../components";
import { Button, Form, Input, Select, Space } from "antd";
import useCheckLogin from "../../Hooks/UseCheckLogin";

interface Edittables {
  id: string | undefined;
  name: string;
  is_active: string;

}

const EditSchema = Yup.object().shape({
  name: Yup.string().required('Please input your Full Name'),
  is_active: Yup.boolean().required('Status is Required'),
})

const Edittable: React.FC = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  useCheckLogin(token)
  const { id } = useParams()
  const handleEdit = async (values: Edittables) => {
    console.log(values)
    const fetching = await fetch('https://mock-api.arikmpt.com/api/category/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(values)
    })
    console.log(fetching)
    navigate('/home')

  }
  const initialValues = {
    id: id,
    name: "",
    is_active: "",
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: EditSchema,
    onSubmit: handleEdit,
  })

  return (
    <>
      <Card>
        <h2 className="text-center">Edit Data Form</h2>
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
              <Button type="primary" htmlType="submit">Edit Data</Button>
              <br></br>
              <Button type="primary" onClick={() => navigate('/home')}>Back</Button>
            </Space>
          </div>
        </Form>

      </Card>
    </>
  )
}
export default Edittable;