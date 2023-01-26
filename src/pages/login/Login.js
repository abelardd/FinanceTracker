import React, {useState} from 'react';
import { useLogin } from '../../hooks/useLogin'
import { useNavigate } from "react-router-dom";



//styles
import styles from './Login.module.css'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    /*const [showPassword, setShowPassword] = useState(false)*/
    const { login, error, isPending} = useLogin()


/*    const revealPassword = () => {
        setShowPassword(!showPassword);
    }*/

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
        setEmail('')
        setPassword('')

    }


    return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
        <h1>Login</h1>
        <label>
            <span>Email: </span>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}

            />
        </label>
        <label>
            <span>Password: </span>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}

            />
            {/*<button id="pwbtn" onClick={revealPassword}>show/hide</button>*/}
        </label>
        {!isPending && <button className="btn">Login</button>}
        {isPending && <button className="btn" disabled>Login</button>}
        {error && <p>{error}</p>}
    </form>


);
};
