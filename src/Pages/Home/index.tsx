import React, { useCallback, useEffect, useState } from "react"
import { Space, Table, Button } from 'antd';
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ColumnsType } from "antd/es/table";
import useCheckLogin from "../../Hooks/UseCheckLogin";
import { Text } from "../../components";





interface DataType {

    id: string;
    name: string;
    is_active: boolean;

}


const Home: React.FC = () => {
    const [dataList, setDataList] = useState<DataType[]>([]);
    const navigate = useNavigate()
    const accessToken = localStorage.getItem('token');
    useCheckLogin(accessToken)
    const fetchTables = useCallback(
        async () => {
            try {
                // Create a new Headers object and add the token to it
                const headers = new Headers();
                headers.append('Authorization', `Bearer ${accessToken}`);

                // Make the fetch request with the headers
                const response = await fetch(`https://mock-api.arikmpt.com/api/category`, {
                    method: 'GET',
                    headers: headers, // Pass the headers here
                });

                const data = await response.json();
                console.log(data.data)
                setDataList(data.data);
            } catch (error) {
                console.log(error);
            }
        },
        [accessToken]


    )

    useEffect(() => {
        fetchTables()
    }, [fetchTables]);

    const deleteCategory = async (id: string) => {
        console.log(id)
        const fetching = await fetch(`https://mock-api.arikmpt.com/api/category/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${accessToken}` }
        })

        if (fetching.ok) {
            alert("Are You sure want to delete?")
            navigate(0)
        }
    }
    const columns: ColumnsType<DataType> = [
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
            title: 'Status',
            dataIndex: 'is_active',
            key: 'is_active',
            render: (isActive) => (
                <span>{isActive ? 'Active' : 'Deactive'}</span>
            )
        },
        {
            title: "Action",
            key: "action",
            render: (_, data) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => navigate(`/edit/${data.id}`)}><EditFilled /></Button>
                    <Button danger onClick={() => deleteCategory(data.id)}><DeleteFilled /></Button>
                </Space>
            )
        }
    ]

    return (
        <>
            <Text type="h2">List Data</Text>
            <Table style={{ marginTop: 20 }} columns={columns} dataSource={dataList} />
        </>
    )
}


export default Home;