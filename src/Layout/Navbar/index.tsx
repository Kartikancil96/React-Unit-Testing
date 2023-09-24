import { AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/')
  }

  const onNavbar: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const items: MenuProps['items'] = [

    {
      label: (<a onClick={() => navigate('/add')} target="_blank" rel="noopener noreferrer">
        Add Data
      </a>),
      key: 'mail',
      icon: <AppstoreOutlined />,

    },
    {
      label: 'Profile',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: (
        <a onClick={handleLogout} target="_blank" rel="noopener noreferrer">
          Log Out
        </a>
      ),
      key: 'alipay',
    },
  ];

  return <header>
    <Menu style={{justifyContent:'center'}} onClick={onNavbar} selectedKeys={[current]} mode="horizontal" items={items} />
  </header>;
};



export default Navbar;