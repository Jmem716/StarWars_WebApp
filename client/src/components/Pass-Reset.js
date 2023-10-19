import React, { useState } from "react";

export const PassReset = (props) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email">Email</label>
                    <label htmlFor="email" className="aurebesh-font">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
                </div>
                <div className="btn-container">
                    <button type="submit">continue</button>
                </div>
        </form>
        </>
    )
}