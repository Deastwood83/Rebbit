import React from "react";

function Register() {
  return (
    <div class="h-screen bg-gradient-to-br from-emerald-800 to-green-700   flex justify-center items-center w-full">
      <form>
        <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div class="space-y-4">
            <h1 class="text-center text-2xl font-semibold text-gray-600">
              Register
            </h1>
            <div>
              <label for="email" class="block mb-1 text-gray-600 font-semibold">
                Username
              </label>
              <input
                type="text"
                class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
            <div>
              <label for="email" class="block mb-1 text-gray-600 font-semibold">
                Email
              </label>
              <input
                type="text"
                class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
            <div>
              <label for="email" class="block mb-1 text-gray-600 font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="**********"
                class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
          </div>
          <button class="mt-4 w-full bg-gradient-to-tr from-emerald-800  text-indigo-100 py-2 rounded-md text-lg tracking-wide">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
