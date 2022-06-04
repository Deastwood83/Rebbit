import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAsync } from "../lib/store/reducers/auth";
import Logo from "../rebbitLogo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { user, isAuthenticated, error, loading } = useSelector(
        (state) => state.auth
    );

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
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
        <div className="h-screen bg-emerald-800">
            <section className="py-26">
                <div className="container px-4 mx-auto">
                    <div className="max-w-lg mx-auto">
                        <div className="text-center mb-8">
                            <a className="inline-block mx-auto mb-6" href="#">
                                <img
                                    src="nigodo-assets/logo-icon-nigodo.svg"
                                    alt=""
                                />
                            </a>
                            <div className="inline-flex items-center">
                                <img
                                    src="https://cdn.discordapp.com/attachments/979149570992918538/981002974593703961/RebbitLogo.png"
                                    className="mx-auto"
                                />
                                <span className="text-5xl text-white font-bold">
                                    Rebbit
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                                Sign in - {loading}
                            </h2>
                        </div>
                        {error && (
                            <div>
                                <p className="text-red-500 text-center">
                                    {error}
                                </p>
                            </div>
                        )}
                        <form onSubmit={onLogin}>
                            <div className="mb-6">
                                <label
                                    className="block mb-2 font-extrabold"
                                    htmlFor=""
                                >
                                    Username
                                </label>
                                <input
                                    className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block mb-2 font-extrabold"
                                    htmlFor=""
                                >
                                    Password
                                </label>
                                <input
                                    className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                                    type="password"
                                    placeholder="**********"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                />
                            </div>
                            <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                                <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                                    <label htmlFor=""></label>
                                </div>
                                <div className="w-full lg:w-auto px-4"></div>
                            </div>
                            <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-yellow-300 font-extrabold bg-green-700 hover:bg-yellow-300 hover:text-green-700 border-3 border-indigo-900 shadow rounded transition duration-200">
                                Sign in
                            </button>
                            <p className="text-center font-extrabold">
                                Don&rsquo;t have an account?{' '}
                                <Link
                                    to={'/register'}
                                    className="text-yellow-400 hover:underline"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>

);
}

export default Login;
