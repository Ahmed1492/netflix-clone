import React, { useState } from "react";
const Login = () => {
  const [status, setStatus] = useState("login");
  return (
    <div className="bg-banner flex justify-center items-center">
      <form
        className="flex flex-col gap-[26px] bg-[#000000cc]  rounded-md p-[4rem] min-w-[29rem]"
        action=""
      >
        <h2 className="text-3xl font-medium  my-[1rem]">
          {" "}
          {status == "login" ? "Sign In" : "Sign Up"}
        </h2>
        {status !== "login" && (
          <input
            className="px-4 py-3  bg-[#474747] outline-none rounded-md"
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          className="px-4 py-3  bg-[#474747] outline-none rounded-md "
          type="email"
          placeholder="Email"
        />
        <input
          className="px-4 py-3  bg-[#474747] outline-none rounded-md "
          type="password"
          placeholder="Password"
        />
        <div className="flex flex-col gap-2">
          <button className="bg-[#e50914] cursor-pointer w-full  text-white py-3 rounded-md mt-1">
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
