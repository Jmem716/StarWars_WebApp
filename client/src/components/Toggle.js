import React, { useState, useEffect } from "react";

export const Toggle = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    
    useEffect(() => {
        if (props.currentForm === "reset") {
            setIsChecked(true);
        } 
    }, [props.currentForm]);

    const toggleForm = (value) => {
        setIsChecked(value); // Set the isChecked state

        const formToSwitchTo = value === false ? "login" : "register";
        props.onFormSwitch(formToSwitchTo);
    };

    const switchToRegister = () => {
        props.onFormSwitch(isChecked === true ? "register" : " ");
        setIsChecked(true); 
    };

    return (
        <div className="container">
            <div className="switches-container">
                <input
                    type="radio"
                    id="switchOne"
                    name="switchToggle"
                    value="false"
                    checked={isChecked === false}
                    onChange={() => toggleForm(false)}
                />
                <input
                    type="radio"
                    id="switchTwo"
                    name="switchToggle"
                    value="true"
                    checked={isChecked === true}
                    onChange={() => toggleForm(true)}
                />
                <label htmlFor="switchOne">{isChecked ? "Log In" : "Returning User"}</label>
                <label htmlFor="switchTwo">{props.currentForm === "reset" ? "Reset Password" : "Register"}</label>
                <div className="switch-wrapper">
                    <div className="switch" onClick={switchToRegister}>
                        <div>{isChecked ? "Back" : "Returning User"}</div>
                        <div>{props.currentForm === "reset" ? "Reset Password" : "Register"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
