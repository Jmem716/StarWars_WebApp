import React, { useState } from "react";

const Input = ({ label, id, type, value, onChange }) => (
    <div className="register-input">
        <div className="register-input-inner">
            <label htmlFor={id}>{label}</label>
            <label htmlFor={id} className="aurebesh-font">
                {label}
            </label>
        </div>
        <input value={value} onChange={onChange} id={id} type={type} name={id} />
    </div>
);

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const validateForm = () => {
        if (!username || !email || !pass || !confirmPassword) {
            throw new Error("Please ensure to enter all fields.");
        }
        if (pass !== confirmPassword) {
            throw new Error("Passwords do not match.");
        }
    };

    const callApi = async () => {
        const apiUrl = "http://localhost:3000/auth/register";
        const requestBody = {
            username: username,
            password: pass,
            email: email,
        };

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error("Username or email already in use. Please choose a different one.");
        }

        return response.json();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            validateForm();
            const apiData = await callApi();
            if(apiData)
                setError(null)
                setSuccess('User successfully created. Please login.');
                setTimeout(() => setSuccess(null), 5000);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <form className="register-form" onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                <div>
                    <Input
                        label="Username"
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <Input
                        label="Confirm"
                        id="setpassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="btn-container">
                    <button type="submit">Continue</button>
                </div>
            </form>
        </>
    );
};

