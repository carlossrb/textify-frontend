import React, { useState } from 'react';
import { ConfigProvider, Layout, Space, Switch, theme } from 'antd';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { primaryTheme } from 'theme/primaryTheme';
import ptBR from 'antd/locale/pt_BR';
import dayjs from 'dayjs';
import 'theme/stylesheet.css';
import Routes from 'router';

const { Footer } = Layout;
const { darkAlgorithm, defaultAlgorithm } = theme;
dayjs.locale('pt_BR');

function App() {
  const themeStorage = localStorage.getItem('@dark');
  const [isDarkMode, setIsDarkMode] = useState(
    themeStorage ? (JSON.parse(themeStorage) as boolean) : true,
  );

  const handleClick = () => {
    localStorage.setItem('@dark', String(!isDarkMode));
    setIsDarkMode((previousValue) => !previousValue);
  };

  return (
    <ConfigProvider
      theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm, ...primaryTheme }}
      locale={ptBR}
    >
      <Layout id='container'>
        <Routes />
        <Footer style={{ textAlign: 'center' }}>
          <Space direction='vertical'>
            <span>Textify ©{new Date().getFullYear()} - Infotek</span>
            <Switch
              size='small'
              onChange={handleClick}
              checkedChildren={<SmileOutlined />}
              unCheckedChildren={<FrownOutlined />}
              checked={isDarkMode}
            />
          </Space>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
