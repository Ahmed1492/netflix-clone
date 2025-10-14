import React, { useState } from "react";
import { signin, signup } from "../firebase";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import netflix_spinner from "../assets/netflix_spinner.gif";
const Login = () => {
  const [status, setStatus] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userAuth = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      if (status == "login") {
        await signin(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-[100vh] bg-black">
        <img className="w-32" src={netflix_spinner} alt="netflix_spinner" />
      </div>
    );
  }

  return (
    <div className="bg-banner flex justify-center relative items-center">
      <img
        src={logo}
        alt="logo"
        className="w-[11rem] absolute left-[9%] top-[3rem]"
      />
      <form
        className="flex flex-col gap-[26px] bg-[#000000cc]  rounded-md p-[4rem] min-w-[29rem]"
        action=""
      >
        <h2 className="text-3xl font-medium  my-[1rem]">
          {status == "login" ? "Sign In" : "Sign Up"}
        </h2>
        {status !== "login" && (
          <input
            className="px-4 py-3  bg-[#474747] outline-none rounded-md"
            type="text"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
          />
        )}
        <input
          className="px-4 py-3  bg-[#474747] outline-none rounded-md "
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
        />
        <input
          className="px-4 py-3  bg-[#474747] outline-none rounded-md "
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
        />
        <div className="flex flex-col gap-2">
          <button
            onClick={userAuth}
            className="bg-[#e50914] cursor-pointer w-full  text-white py-3 rounded-md mt-1"
          >
            {status == "login" ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex items-center  justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-gray-400">Remember Me</p>
            </div>
            <p className="text-gray-400">Need Help?</p>
          </div>
        </div>
        {status !== "login" ? (
          <p className="text-gray-600 mt-[2rem]  ">
            Already have account?
            <span
              onClick={() => setStatus("login")}
              className="text-white ms-2 cursor-pointer font-semibold"
            >
              Sing In Now
            </span>
          </p>
        ) : (
          <p className="text-gray-600 mt-[2rem] ">
            New to Netflix?
            <span
              onClick={() => setStatus("register")}
              className="text-white ms-2 cursor-pointer font-semibold"
            >
              Sing Up Now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
