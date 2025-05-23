import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { Add_User } from "../API/APIUri";
import { Add_User_EndPoint } from "../API/EndPoints";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const Nav = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMsg("Passwords do not match");
      return;
    }

    const newUserData = {
      username: username,
      email: email,
      password: password
    };
    console.log('new user', newUserData);
    const UrI = Add_User + Add_User_EndPoint;
    console.log('UrI', UrI);
    axios.post(UrI, newUserData)
      .then((res) => {
        console.log(res);
        setMsg(res.data);
        Nav('/Login');
      })
      .catch((error) => { console.log(error) });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 px-4 rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-10 py-6 rounded-2xl w-full max-w-md shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 font-serif">Sign Up {Msg?.Msg}</h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">User Name</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div
            className="absolute inset-y-0 right-3 top-7 flex items-center cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div
            className="absolute inset-y-0 right-3 top-7 flex items-center cursor-pointer text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full py-2 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 text-white font-semibold text-sm shadow-md hover:from-teal-500 hover:to-purple-600 transition"
        >
          SIGN UP
        </button>

        <div className="text-center mt-6 text-gray-500 text-sm">Or Sign Up Using</div>

        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="button"
            className="cursor-pointer p-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
          >
            <FaGoogle />
          </button>
        </div>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-600 hover:underline font-medium">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
