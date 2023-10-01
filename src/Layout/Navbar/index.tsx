import { AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: String
}

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
  const [profile, setProfile] = useState<User | null>(null);
  const accessToken = localStorage.getItem("token");
  const getProfile = async () => {
    try {
      const response = await fetch(
        'https://mock-api.arikmpt.com/api/user/profile',
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setProfile(data.data)
      } else {
        alert('failed get data')
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getProfile();
  }, [])

  const items: MenuProps['items'] = [

    {
      label: (<a onClick={() => navigate('/add')} target="_blank" rel="noopener noreferrer">
        Add Data
      </a>),
      key: 'mail',
      icon: <AppstoreOutlined />,

    },
    {
      label: (
        <a onClick={() => navigate(`/profile/:${profile?.id}`)} target="_blank" rel="noopener noreferrer">
          Profile
        </a>
      ),
      key: 'app',
      icon: <AppstoreOutlined />,
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
    <Menu style={{ justifyContent: 'center' }} onClick={onNavbar} selectedKeys={[current]} mode="horizontal" items={items} />
  </header>;
};



export default Navbar;