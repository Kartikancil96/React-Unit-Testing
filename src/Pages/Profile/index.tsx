import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Text } from "../../components";


interface DataProfile {
  id: string;
  name: string;
  email: string;
}

const Profile: React.FC = () => {
  const [dataUser, setDataUser] = useState<DataProfile>();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://mock-api.arikmpt.com/api/user/profile', // Use the ID from useParams
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setDataUser(data.data);
      } else {
        // Handle error, e.g., display an error message
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (!accessToken) {
      navigate("/");
      return;
    }
    fetchData()
  }, []);


  return (
    <>
      <Text type="h2">Data Profile</Text>
      <div>
        <Text type="p">
          ID:{dataUser?.id}
          <br />
          Name: {dataUser?.name}
          <br />
          Email: {dataUser?.email}
        </Text>
      </div>
      <div>
        <Button type="primary" onClick={() => navigate("/home")}>
          Back
        </Button>
      </div>
    </>
  );
};

export default Profile;
