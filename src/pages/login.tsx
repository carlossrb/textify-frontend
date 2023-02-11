import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import logo from 'media/logo.png';

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <img src={logo} alt='Textify logo' />
      <Form.Item name='Nome do usuário' rules={[{ required: true }]}>
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Nome do usuário'
        />
      </Form.Item>
      <Form.Item name='Senha' rules={[{ required: true }]}>
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Senha'
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>Lembre-me</Checkbox>
        </Form.Item>

        <a className='login-form-forgot' href=''>
          Esqueceu a senha?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
