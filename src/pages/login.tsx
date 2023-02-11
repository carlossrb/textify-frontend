import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Login: React.FC = () => (
  <Form
    name='login'
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete='on'
  >
    <Form.Item
      label='Nome de usuário/email'
      name='username'
      rules={[{ required: true, message: 'Preencha com nome/email válidos' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label='Senha'
      name='password'
      rules={[{ required: true, message: 'Preencha com sua senha' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Lembre-me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type='primary' htmlType='submit'>
        Entrar
      </Button>
    </Form.Item>
  </Form>
);

export default Login;
