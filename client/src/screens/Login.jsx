import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAsync } from "../lib/store/reducers/auth";
import Logo from "../rebbitLogo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const onLogin = (e) => {
    e.preventDefault();
    if (!password || !username) {
      return;
    }

    dispatch(
      loginAsync({
        username,
        password,
      })
    );
  };

  return (
    <div className="h-screen bg-gradient-to-br from-emerald-800 to-green-700 flex justify-center items-center w-full">
      <div className="inline-flex items-center">
        <img
          src="https://cdn.discordapp.com/attachments/979149570992918538/981002974593703961/RebbitLogo.png"
          class="mx-auto"
        />
        <span className="text-5xl text-white font-bold mr-10">Rebbit</span>
      </div>
      <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
        <div class="space-y-4">
          <h1 class="text-center text-2xl font-semibold text-gray-600">
            Sign In
          </h1>
          {error && (
            <div>
              <p className="text-red-500 text-center">{error}</p>
            </div>
          )}

          <div>
            <label
              htmlFor=""
              Username
              class="block mb-1 text-gray-600 font-semibold"   >
                Username
              </label>
            <input
              type="text"
              class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600 font-semibold" htmlFor="">
              Password
            </label>
            <input
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              type="password"
              placeholder="**********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-yellow-300 font-extrabold bg-green-700 hover:bg-yellow-300 hover:text-green-700 border-3 border-indigo-900 shadow rounded transition duration-200">
          Sign in
        </button>
        <p className="text-center font-extrabold">
          Don&rsquo;t have an account?{" "}
          <Link to={"/register"} className="text-yellow-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
