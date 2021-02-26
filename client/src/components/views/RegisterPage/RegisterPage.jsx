import React, { useState } from "react";
import styles from "./RegisterPage.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../../_actions";
const RegisterPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onNamedHandler = (event) => {
        setName(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
        }

        const body = {
            email,
            password,
            name,
        };
        dispatch(RegisterUser(body)).then((res) => {
            console.log(res.payload);
            if (res.payload.success) {
                history.push("/login");
            } else {
                alert("Failed to Sign up!");
            }
        });
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />

                <label>Name</label>
                <input type="text" value={name} onChange={onNamedHandler} />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={onPasswordHandler}
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={onConfirmPasswordHandler}
                />
                <br />
                <button>회원가입</button>
            </form>
        </div>
    );
};

export default RegisterPage;
