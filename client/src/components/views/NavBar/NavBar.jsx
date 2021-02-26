import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styles from "./NavBar.module.css";
import axios from "axios";
const NavBar = () => {
    let history = useHistory();
    const userData = useSelector((state) => state.user.userData);
    console.log(userData);
    const pushHome = () => {
        history.push("/");
    };
    useEffect(() => {
        if (userData != null) {
            setIsLogin(userData.isAuth);
        }
    }, [userData]);

    const [isLogin, setIsLogin] = useState(false);

    const onClickLogoutHandler = () => {
        axios.get(`/api/users/logout`).then((res) => {
            if (res.data.success) {
                history.push("/login");
            } else {
                alert("로그아웃 하는데 실패 했습니다.");
            }
        });
    };

    return (
        <nav className={styles.container}>
            <div className={styles.navLeft}>
                <div className={styles.logo}>Logo</div>
                <div className={styles.tab}>
                    {/* <span onClick={pushHome}>Home</span> */}
                    <Link to="/">Home</Link>
                    <Link to="/favorite">Favorite</Link>
                </div>
            </div>

            <div className={styles.navRight}>
                {isLogin ? (
                    <>
                        <Link to="/video/upload">Video</Link>
                        <span
                            className={styles.logout}
                            onClick={onClickLogoutHandler}
                        >
                            Logout
                        </span>
                    </>
                ) : (
                    <>
                        <Link to="/login">Signin</Link>
                        <Link to="/register">Signup</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
