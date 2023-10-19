import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export const Login = (props) => {
    //const [email, setEmail] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(null);
    const [username, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [accessToken, setAccessToken] = useState(null); // Add accessToken state
    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    console.log(cookies.username)


    const handleSubmit = (e) => {
        e.preventDefault();

        if(!pass || !username){
            setError('Please enter all fields.')
        }else{
            const apiUrl = 'http://localhost:3000/auth/login';

            // Create the request body as an object
            const requestBody = {
                password: pass,
                username: username,
            };

            fetch(apiUrl, {
                method: 'POST',
                accept: '*/*',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            }).then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then((apiData) => {
                setData(apiData);
                setAccessToken(apiData.accessToken); // Store the accessToken in state

                setCookie('username', apiData.username);
                setCookie('accessToken', apiData.accessToken);

                //window.location.reload();
                navigate("/home");

            }).catch((error) => {
                setError('Incorrect username or password. Please try again.');
            });
        }
    };

    // You can use the accessToken for authentication in other parts of your app
    useEffect(() => {
        if (accessToken) {
            // You can now use the accessToken for API requests or authentication
            console.log("Access token:", accessToken);
        }
    }, [accessToken]);

    return (
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>} 
                <div>
                    {/*<label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />*/}
                    <label htmlFor="username">Username</label>
                    <label htmlFor="username" className="aurebesh-font">Username</label>
                    <input value={username} onChange={(e) => setUserName(e.target.value)} id="username" name="username" required/>
                    <label htmlFor="password">Password</label>
                    <label htmlFor="password" className="aurebesh-font">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" required/>
                </div>
                <div className="btn-container">
                    <button type="submit" onClick={handleSubmit}>lets go!</button>
                </div>
            </form>
        </>
    )
}
