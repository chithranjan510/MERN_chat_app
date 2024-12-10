import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { loading, login } = useLogin();

  const handleLoginSubmit = async (e) => {
    if (loading) {
      return;
    }

    e.preventDefault();
    await login({ username, password });
  };

  return (
    <div className="h-svh overflow-y-auto flex flex-col gap-4 items-center justify-center">
      <h1 className="text-gray-300 text-3xl font-semibold">
        Login <span className="text-orange-500">DoConnect</span>
      </h1>
      <div className="p-5 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-md w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%]">
        <form className="w-full" onSubmit={handleLoginSubmit}>
          <label
            htmlFor="loginUsername"
            className="label p-2 text-base label-text text-white"
          >
            Username
          </label>
          <input
            id="loginUsername"
            type="text"
            required
            placeholder="Enter username"
            className="w-full input input-bordered h-10"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            htmlFor="loginPassword"
            className="label p-2 text-base label-text text-white"
          >
            Password
          </label>
          <div className="relative flex items-center">
            <input
              id="loginPassword"
              type={isPasswordVisible ? "text" : "password"}
              required
              placeholder="Enter password"
              autoComplete="off"
              className="w-full input input-bordered h-10 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute right-3 cursor-pointer"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
            >
              {isPasswordVisible ? (
                <i className="fa-solid fa-eye-slash" />
              ) : (
                <i className="fa-solid fa-eye" />
              )}
            </div>
          </div>
          <Link
            to="/signup"
            className="text-gray-300 text-sm hover:underline hover:text-blue-400 inline-block my-3"
          >
            Don`t have an account?
          </Link>
          <button className="btn btn-block btn-sm mt-2 bg-green-400 border-none hover:bg-green-500 text-black">
            {loading ? <span className="loading loading-spinner" /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
