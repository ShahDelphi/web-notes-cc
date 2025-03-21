import React from "react";

const Input = ({ type = "text", placeholder, value, onChange, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full p-2 border border-gray-300 rounded ${className}`}
        />
    );
};

export default Input;
