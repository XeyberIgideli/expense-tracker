import React from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Form, Input, InputNumber } from 'antd'
import { login } from '../../config/firebase'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

interface LoginProps {
  // children: React.ReactNode;
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

export const Login: React.FC<LoginProps> = () => {

  const onFinish = async (values: any) => {
    try {
      await login(values)
    } catch(err) {

    }
  }

  const location = useLocation().state as {registerPage?: boolean}
  
  return (
    <div>
      <div>
        <h3>Login Page</h3>
        {location?.registerPage && (<p>You registered successfully</p>)} 
      </div>
      <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 900}}
    validateMessages={validateMessages}
  > 
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

    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}