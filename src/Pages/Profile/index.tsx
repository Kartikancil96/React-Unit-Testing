import React, { useState, useEffect, useMemo } from "react";
import { Table, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "../../components";
import { ColumnsType } from "antd/es/table";

interface DataProfile {
  id: string;
  name: string;
  phone: string | null;
  email: string;
}

const Profile: React.FC = () => {
  const [dataUser, setDataUser] = useState<DataProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://mock-api.arikmpt.com/api/user/profile/${id}`, // Use the ID from useParams
          {
            method: "GET",
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setDataUser(data);
          } else {
            console.error("Data is not in the expected format");
          }
        } else {
          // Handle error, e.g., display an error message
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        // Handle network or other errors
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [accessToken, navigate, id]);

  const columns: ColumnsType<DataProfile> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (text) => text || "N/A",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <>
      <Text type="h2">Data Profile</Text>
      {loading ? (
        <p>Loading...</p>
      ) : Array.isArray(dataUser) && dataUser.length > 0 ? (
        <Table dataSource={dataUser} columns={columns} />
      ) : (
        <p>No data available</p>
      )}
      <div>
        <Button type="primary" onClick={() => navigate("/home")}>
          Back
        </Button>
      </div>
    </>
  );
};

export default Profile;
