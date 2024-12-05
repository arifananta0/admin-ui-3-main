import React from 'react';
import Logo from "../Elements/Logo";
import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-special-mainBg">
        <div className="w-full max-w-sm">
        {/* Logo */}
        <Logo />

        {/* Title and description */}
        <div className="text-center">
            <h1 className="text-xl font-bold mt-6 mb-2 text-gray-900">
                Forgot Password? 
            </h1>
            <p className="text-sm mb-6 text-gray-600">
            Enter your email address to get the password reset link.
            </p>
        </div>

        {/* input field */}
        <div className="mb-6">
             <LabeledInput
             label="Email address"
             type="email"
             placeholder="hello@example.com"
             name="email"
             />
            </div>

        {/* reset button */}
        <Button 
        variant="bg-primary w-full text-white"
        type="submit"> 
            Password Reset
        </Button>

        {/* back to login */}
        <Link to="/login" className="block mt-4 text-secondary text-sm font-bold text-center">
          Back to login
        </Link>

        </div>
    </div>
  );
};

export default ForgotPassword;