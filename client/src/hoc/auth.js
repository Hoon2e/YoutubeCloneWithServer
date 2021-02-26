import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Auth } from "../_actions";

const Authentication = (SpecificComponent, option, adminRoute = null) => {
    //null => 아무나 출입 가능
    //true => 로그인 유저
    //false => 로그인 x 유저
    const AuthenticationCheck = (props) => {
        const history = useHistory();
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(Auth()).then((res) => {
                console.log(res);

                if (!res.payload.isAuth) {
                    if (option) {
                        history.push("/login");
                    }
                } else {
                    if (adminRoute && !res.payload.isAdmin) {
                        history.push("/");
                    } else {
                        if (option === false) {
                            history.push("/");
                        }
                    }
                }
            });
        }, []);

        return <SpecificComponent />;
    };
    return AuthenticationCheck;
};

export default Authentication;
