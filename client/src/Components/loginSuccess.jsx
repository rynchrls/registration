import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LoginSuccess() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      fetch("https://register-server.onrender.com/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => console.log(err));
    };
    getUser();
  }, []);

  console.log(user);

  return (
    <React.Fragment>
      <section className=" w-full h-screen flex items-center justify-center flex-col font-sans text-center p-[120px]">
        <h4 className=" text-[24px]">Successful Login</h4>
        {user ? (
          <h1 className=" text-[80px] font-black text-primary ">
            {`Welcome ${user.displayName} !`}
          </h1>
        ) : (
          <h1 className=" text-[80px] font-black text-primary ">Welcome !</h1>
        )}
        <Link to={'/'}>
          <button
            on
            className=" text-[28px] py-[24px] px-[120px] rounded-[12px] bg-secondary text-[white] font-bold mt-[32px] outline-none "
          >
            Home page
          </button>
        </Link>
      </section>
    </React.Fragment>
  );
}

export default LoginSuccess;
