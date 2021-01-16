import { Layout as AntLayout } from 'antd';
import { NavLink } from 'react-router-dom';

import './Layout.scss';

const { Content, Sider } = AntLayout;

const Layout: React.FC = props => {
  const { children } = props;

  return (
    <AntLayout>
      <Sider>
        <NavLink to='/'>Главная</NavLink>
      </Sider>
      <Content>{children}</Content>
    </AntLayout>
  );
};

export default Layout;
