import React from 'react'
import { Button, Form, Input, InputNumber } from 'antd'; 
import { register } from '../config/firebase';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};



export const SignUp: React.FC = () => { 

  interface FormValues {
    
  }

  const onFinish = async (values: any) => {
     await register(values)
  }

  return (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 900}}
    validateMessages={validateMessages}
  >
    <Form.Item name={['username']} label="Username" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['email']} label="Email" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item name={['fullName']} label="Full Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      )
}
