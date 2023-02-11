import React, { useState } from 'react';
import { ConfigProvider, Layout, Switch, theme } from 'antd';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { primaryTheme } from 'theme/primaryTheme';
import ptBR from 'antd/locale/pt_BR';
import dayjs from 'dayjs';
import Login from 'pages/login';
import 'theme/stylesheet.css';

const { Footer, Content } = Layout;
const { darkAlgorithm, defaultAlgorithm } = theme;
dayjs.locale('pt_BR');

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  return (
    <ConfigProvider
      theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm, ...primaryTheme }}
      locale={ptBR}
    >
      <Layout id='container'>
        <header className='topInvisibleBar'>
          <Switch
            onChange={handleClick}
            checkedChildren={<SmileOutlined />}
            unCheckedChildren={<FrownOutlined />}
            defaultChecked
          />
        </header>

        <Content>
          <Login />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Textify ©{new Date().getFullYear()}</Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
