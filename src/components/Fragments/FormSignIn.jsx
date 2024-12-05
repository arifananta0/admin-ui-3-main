import React from 'react';
import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";

const FormSignIn = () => {
  return (
    <form action="">
            <div className="mb-6">
             <LabeledInput
             label="Email address"
             type="email"
             placeholder="hello@example.com"
             name="email"
             />
            </div>

            <div className="mb-6">
             <LabeledInput
             label="Password"
             type="password"
             placeholder="*************"
             name="password"
             />
            </div>

            <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2"> 
              {/* Flex untuk checkbox dan teks */}
              <CheckBox 
                label="Keep me signed in"
                name="status"
              />
            </div>
            
            <a href="/forgot-password" className="text-primary text-sm font-semibold hover:underline">
              Forgot Password?
            </a>
          </div>


            <Button
            variant="bg-primary w-full text-white"
            type="submit">
            Login
            </Button>
          </form>
  );
};

export default FormSignIn;