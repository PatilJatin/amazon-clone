import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //login acc
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        //successful login
        if (auth) {
          history("/");
        }
      })
      .catch((error) => console.log(error.message));
  };
  //create account
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        //successful login
        if (auth) {
          history("/");
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <section className="w-[100vw] h-[100vh] bg-white bg-slate-100 overflow-hidden">
      <div className="login-page max-w-[500px] h-[70vh] mx-auto flex flex-col p-4 items-center justify-between">
        <Link to="/">
          <img
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="amazon-logo"
            width={"100px"}
          />
        </Link>
        <div className="login-cart bg-white border rounded-md w-[75%] border rounded-md px-6 py-3 space-y-2 drop-shadow-md">
          <h3 className="text-3xl font-normal">Sign in</h3>
          <form className="flex flex-col gap-2 text-small">
            <label className="font-semibold" htmlFor="email">
              Enter email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-md border-slate-400 rounded-sm focus:outline-none focus:border-sky-500"
            />
            <label className="font-semibold" htmlFor="password">
              Enter Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-md border-slate-400 rounded-sm focus:outline-none focus:border-sky-500"
            />
            <button
              className="px-3 py-1  rounded-md bg-[#ffd814] hover:bg-yellow-400"
              type="submit"
              onClick={signIn}
            >
              Sign in
            </button>
          </form>
          <div className="text-sm ">
            By continuing, you agree to <strong> Amazon'sClone</strong>{" "}
            <br></br>
            <p className="tracking-[.03em]">
              <a
                href="/login"
                className="text-blue-600 hover:underline hover:text-red-500 font-light"
              >
                Conditions of Use
              </a>
              &nbsp; and &nbsp;
              <a
                href="/login"
                className="text-blue-600 hover:underline hover:text-red-500 font-light"
              >
                Privacy Notice.
              </a>
            </p>
          </div>
        </div>
        <p className="text-sm  ">New to Amazon?</p>
        <button
          className="border rounded-md drop-shadow-lg px-3 py-1 w-[74%] bg-white hover:bg-slate-100"
          onClick={register}
        >
          Create your Amazon account
        </button>
      </div>
      <hr />
      <div className="bg-slate-200  h-[30vh]">
        <div className="w-[280px] mx-auto text-sm pt-6 space-y-3">
          <ul className="flex justify-between">
            <li>
              <a
                href="/login"
                className="text-blue-500 hover:underline hover:text-red-500 font-light"
              >
                Conditions of Use
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="text-blue-500 hover:underline hover:text-red-500 font-light"
              >
                Privacy Notice
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="text-blue-500 hover:underline hover:text-red-500 font-light"
              >
                Help
              </a>
            </li>
          </ul>
          <p className="text-gray-600">
            ©2023, Amazon clone, Inc. or its affiliates
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
