import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import logo from 'media/logo.png';
import './login.css';
import { Content } from 'antd/es/layout/layout';
const Login: React.FC = () => {
  const onFinish = (values: { password: string; name: string; remember: boolean }) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Content>
      <Form
        className='loginForm'
        name='login'
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Space direction='vertical' size={40}>
          <img src={logo} alt='Textify logo' />
          <div>
            <Form.Item name='name' rules={[{ required: true }]}>
              <Input
                size='large'
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Nome do usuário'
              />
            </Form.Item>
            <Form.Item name='password' rules={[{ required: true }]}>
              <Input
                size='large'
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
              <Button size='large' type='primary' htmlType='submit' block>
                Entrar
              </Button>
            </Form.Item>
          </div>
        </Space>
      </Form>
    </Content>
  );
};

export default Login;
