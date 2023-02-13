import React from 'react';
import { Content } from 'antd/es/layout/layout';
import { Typography } from 'antd';

const { Title } = Typography;
const NotFoundPage: React.FC = () => {
  //   const contentStyle: React.CSSProperties = {
  //     lineHeight: '260px',
  //     textAlign: 'center',
  //     color: token.colorTextTertiary,
  //     backgroundColor: token.colorFillAlter,
  //     borderRadius: token.borderRadiusLG,
  //     border: `1px dashed ${token.colorBorder}`,
  //     marginTop: 16,
  //   };
  return (
    <Content>
      <Title level={2}>404: Nenhuma página encontrada :/</Title>
    </Content>
  );
};

export default NotFoundPage;
