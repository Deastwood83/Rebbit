import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync } from '../lib/store/reducers/auth';
import Logo from '../rebbitLogo.png';
function Register() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const onRegister = (e) => {
        e.preventDefault();

        dispatch(
            registerAsync({
                username,
                password,
                email,
            })
        );
    };

    return (
        <div class="h-screen bg-gradient-to-br from-emerald-800 to-green-700 flex justify-center items-center w-full">
            <div className="inline-flex items-center">
                <img
                    src="https://cdn.discordapp.com/attachments/979149570992918538/981002974593703961/RebbitLogo.png"
                    class="mx-auto"
                />
                <span className="text-5xl text-white font-bold mr-10">
                    Rebbit
                </span>
            </div>
            <form onSubmit={onRegister}>
                <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                    <div class="space-y-4">
                        <h1 class="text-center text-2xl font-semibold text-gray-600">
                            Register
                        </h1>
                        <div>
                            <label
                                for="email"
                                class="block mb-1 text-gray-600 font-semibold"
                            >
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
                            <label
                                for="email"
                                class="block mb-1 text-gray-600 font-semibold"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                for="email"
                                class="block mb-1 text-gray-600 font-semibold"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="**********"
                                class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="mt-4 w-full bg-gradient-to-tr from-emerald-800  to-green-700  text-yellow-300 py-2 rounded-md text-lg tracking-wide"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
