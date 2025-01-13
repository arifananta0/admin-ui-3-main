import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import { useForm } from "react-hook-form";
// import { data } from 'autoprefixer';
import axios from "axios";
import { useContext } from 'react';
import CustomizedSnackbars from "../Elements/SnackBar";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";


const FormSignIn = () => {
  // const [msg, setMsg] = useState();
  // const [open, setOpen] = useState(true);
  const { msg, setMsg, open, setOpen, setIsLoading } = useContext(NotifContext);
  const { setIsLoggedIn, setName } = useContext(AuthContext);

  const navigate = useNavigate();

  const { 
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  // const onFormSubmit = (data) => console.log(data);
  const onErrors = (errors) => console.log(errors);
  const onFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      setIsLoading(false);
      setOpen(true);
      setMsg({ severity: "success", desc: "Login Success" });


      setIsLoggedIn(true);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      const decode = jwtDecode(response.data.refreshToken);
      // console.log(decode);

      // console.log(response);
      // setOpen(true);
      // setMsg({ severity: "success", desc: "Login Success"});

      // localStorage.setItem("refreshToken", response.data.refreshToken);

      // setIsLoggedIn(true);
      setName(decode.name);

      navigate("/");
    } catch (error) {
      setIsLoading(false);

      if (error.response) {
        // setMsg(error.response.data.msg);
        setOpen(true);
        setMsg({ severity: "error", desc: error.response.data.msg });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
            <div className="mb-6">
             <LabeledInput
             label="Email address"
             type="email"
             placeholder="hello@example.com"
             name="email"
             register={{
              ...register("email",{
                required: "Email address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address format",
                },
              }),
             }}
             />
             {errors?.email && (
              <div className="text-center text-red-500 ">{errors.email.message}</div>
             )}
            </div>

            <div className="mb-6">
             <LabeledInput
             label="Password"
             type="password"
             placeholder="*************"
             name="password"
             register={{
              ...register("password", { 
                required: "Password is required"}),
             }}
             />
             {errors?.password && (
              <div className="text-center text-red-500">{errors.password.message}</div>
             )}
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
            variant={`${!isValid ?"bg-gray-05" : "bg-primary zoom-in"}
               w-full text-white`}
            type="submit"
            disabled={!isValid ? "disabled" : ""}
            >
            Login
            </Button>
            {/* <div className="mt-3 text-center text-red-500">{msg}</div> */}
            {msg && (
              <CustomizedSnackbars 
                severity={msg.severity}
                message={msg.desc}
                open={open}
                setOpen={setOpen}
              />
            )}
          </form>
  );
};

export default FormSignIn;