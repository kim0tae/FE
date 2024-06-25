import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface UserInfo {
    id: string;
    name: string;
    email: string;
    socialOnly: string;
    mobile: string;
}

export default function MyProfile() {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const { id } = useParams<{ id: string }>(); //3 동적으로 :id를 사용하기

    const getUserInfo = async (id: string | undefined) => {
        try {
            const response = await fetch(
                `http://192.170.1.173:8000/users/${id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            setUserInfo(data.userInfo);
        } catch (e) {
            console.error(e);
        } finally {
        }
    };

    //   setUserName(id);
    useEffect(() => {
        getUserInfo(id);
    }, []);

    return (
        <>
            <div>myProfile</div>
            <div>{userInfo?.id}</div>
            <div>{userInfo?.name}</div>
            <div>{userInfo?.email}</div>
        </>
    );
}
