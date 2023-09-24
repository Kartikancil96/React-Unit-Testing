import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Text } from "../../components";
import { ColumnsType } from "antd/es/table";

interface dataProfile {
    id: string;
    name: string;
    phone: null | string;
    email: string;
    password: string;
}

const Profile: React.FC = () => {
    const [dataUser, setDataUser] = useState<dataProfile[]>([]);
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://mock-api.arikmpt.com/api/user/profile`, {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${accessToken}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data) && data.length > 0) {
                        setDataUser(data);
                    } else {
                        // Handle the case where data is not as expected
                        console.error("Data is not in the expected format");
                    }
                } else {
                    // Handle error, e.g., redirect to login page
                    navigate('/login');
                }
            } catch (error) {
                // Handle network or other errors
                console.error(error);
            }
        };

        if (accessToken) {
            fetchData();
        } else {
            // Handle case where accessToken is not available
            navigate('/login');
        }
    }, [accessToken, navigate]);

    const columns: ColumnsType<dataProfile> = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            render: (text) => text || "N/A",
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
    ];

    return (
        <>
            <Text type="h2">Data Profile</Text>
            {Array.isArray(dataUser) && dataUser.length > 0 ? (
                <Table dataSource={dataUser} columns={columns} />
            ) : (
                <p>No data available</p>
            )}
            <div>
                <Button type="primary" onClick={() => navigate('/home')}>Back</Button>
            </div>
        </>
    );
}

export default Profile;
