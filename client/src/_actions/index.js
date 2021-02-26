import axios from 'axios';
import { loginUser, registerUser, auth } from '../_slices/user_slice'

const LoginUser = (data) => {
    const req = axios.post('/api/users/login', data)
        .then(res => res.data)
    return loginUser(req);
}

const RegisterUser = (data) => {
    const req = axios.post('/api/users/register', data)
        .then(res => res.data)
    return registerUser(req)
}

const Auth = () => {
    const req = axios.get('/api/users/auth')
        .then(res => res.data)

    return auth(req);
}

export { LoginUser, RegisterUser, Auth };