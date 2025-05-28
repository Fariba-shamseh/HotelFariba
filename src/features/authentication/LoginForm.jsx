import React, { useState } from "react";
import Logo from "../../ui/Logo.jsx";
import { login } from "../../services/apiAuth.js";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        {/* اضافه کردن لوگو */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <Logo />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          ورود به حساب کاربری
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* فیلد ایمیل */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
            >
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* فیلد رمز عبور */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
            >
              رمز عبور
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* لینک فراموشی رمز عبور */}
          {/*<div className="text-right">*/}
          {/*  <a*/}
          {/*    href="#"*/}
          {/*    className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 hover:underline"*/}
          {/*  >*/}
          {/*    رمز عبور خود را فراموش کرده‌اید؟*/}
          {/*  </a>*/}
          {/*</div>*/}

          {/* دکمه ورود */}
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
