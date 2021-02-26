import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../../_actions";
const LoginPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const body = {
            email,
            password,
        };
        dispatch(LoginUser(body)).then((res) => {
            console.log(res.payload);
            if (res.payload.loginSuccess) {
                history.push("/");
            } else {
                alert("회원 정보가 틀렸습니다.");
            }
        });
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={onPasswordHandler}
                />
                <br />
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
