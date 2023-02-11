import React, { useState } from 'react';
import { ConfigProvider, Switch, theme } from 'antd';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { primaryTheme } from 'theme/primaryTheme';
import ptBR from 'antd/locale/pt_BR';
import dayjs from 'dayjs';
import Login from 'pages/login';
import './App.css';

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
      <div className='topInvisibleBar'>
        <Switch
          onChange={handleClick}
          checkedChildren={<SmileOutlined />}
          unCheckedChildren={<FrownOutlined />}
          defaultChecked
        />
      </div>
      <Login />
    </ConfigProvider>
  );
}

export default App;
