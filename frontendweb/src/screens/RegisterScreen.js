import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, {useEffect} from 'react';
import { detailsProduct } from '../actions/productActions';
import { useState } from 'react';
import { register } from '../actions/userActions';

function RegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push("/");
        }
        return () => {
            
        }
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(email, password));
    }
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Create Account</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label for="name">
                        Name
                    </label>
                    <input type="name" name="name" id="name" onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label for="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </li>
                <li>
                    <label htmlFor="rePassword">
                        Password
                    </label>
                    <input type="rePassword" id="rePassword" name="rePassword" onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </li>
                <li>
                    <button type="submit" className="button primary">Register</button>
                </li>
                <li>
                    Already have an account? <Link to = "/signin">Sign-in</Link>
                </li>
                <li>
                    New to JDShoes?
                </li>
                <li>
                    <Link to="/register" className="button secondary text-center">Create your JDShoes account</Link>
                </li>
            </ul>
        </form>
    </div>
}

export default RegisterScreen;
