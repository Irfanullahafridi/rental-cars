import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Add_User } from "../API/APIUri";
import { login_User_End } from "../API/EndPoints";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const Nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginUser = {
      email: email,
      password: password,
    };
    console.log("login User", loginUser);
    const login_Url = Add_User + login_User_End;
    console.log("login URL", login_Url);
    const res = await axios.post(login_Url, loginUser);
    console.log("res", res);
    const data = res.data;
    if (data) {
      setMsg(data.msg);
      localStorage.setItem("Token", data.User_Token);
      localStorage.setItem("username", data.loginUser.username);
      localStorage.setItem("userInfo", data.loginUser.email);
      Nav("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 px-4 rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl w-full max-w-md shadow-xl mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 font-serif">
          Login {msg?.msg}
        </h2>

        <label className="block text-sm text-gray-600 mb-1">Email</label>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <label className="block text-sm text-gray-600 mb-1">Password</label>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
          />
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full py-2 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 text-white font-semibold text-sm shadow-md hover:from-teal-500 hover:to-purple-600 transition"
        >
          LOGIN
        </button>

        <div className="text-center mt-6 text-gray-500 text-sm">Sign Up Using</div>

        <div className="text-center mt-1">
          <Link
            to="/Register"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            SIGN UP
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
