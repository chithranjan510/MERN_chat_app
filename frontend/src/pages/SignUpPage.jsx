import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const SignUpPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { loading, signUp } = useSignup();

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleSignUpSubmit = async (e) => {
    if (loading) {
      return;
    }

    const updatedInputs = {
      ...inputs,
      fullName: inputs.fullName.trim().replace(/\s+/g, " "),
      username: inputs.username.trim().replace(/\s+/g, " "),
    };

    e.preventDefault();
    await signUp(updatedInputs);
  };

  return (
    <div className="min-h-svh overflow-y-auto flex flex-col gap-4 items-center justify-center">
      <h1 className="text-gray-300 text-3xl font-semibold">
        Sign Up <span className="text-orange-500">DoConnect</span>
      </h1>
      <div className="p-5 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-md w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%]">
        <form className="w-full" onSubmit={handleSignUpSubmit}>
          <label
            htmlFor="registerFullname"
            className="label p-2 text-base label-text text-white"
          >
            Full Name
          </label>
          <input
            id="registerFullname"
            type="text"
            placeholder="Enter your full name"
            required
            className="w-full input input-bordered h-10"
            value={inputs.fullName}
            onChange={(e) =>
              setInputs({
                ...inputs,
                fullName: e.target.value,
              })
            }
          />
          <label
            htmlFor="registerUsername"
            className="label p-2 text-base label-text text-white"
          >
            Username
          </label>
          <input
            id="registerUsername"
            type="text"
            placeholder="Enter username"
            required
            className="w-full input input-bordered h-10"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
          <label
            htmlFor="registerPassword"
            className="label p-2 text-base label-text text-white"
          >
            Password
          </label>
          <div className="relative flex items-center">
            <input
              id="registerPassword"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter password"
              required
              autoComplete="off"
              className="w-full input input-bordered h-10 pr-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  password: e.target.value.replace(" ", ""),
                })
              }
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
          <label
            htmlFor="confirmRegisterPassword"
            className="label p-2 text-base label-text text-white"
          >
            Confirm Password
          </label>
          <input
            id="confirmRegisterPassword"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Confirm password"
            required
            autoComplete="off"
            className="w-full input input-bordered h-10"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({
                ...inputs,
                confirmPassword: e.target.value.replace(" ", ""),
              })
            }
          />
          <div className="flex items-center mt-2">
            <span className="label p-2 text-base label-text text-white mr-8">
              Gender
            </span>
            <label
              htmlFor="male"
              className="p-2 text-sm label-text text-white flex items-center gap-2 cursor-pointer"
            >
              <input
                id="male"
                name="gender"
                type="radio"
                value="male"
                required
                className="radio bg-white h-4 w-4 checked:bg-red-500"
                checked={inputs.gender === "male"}
                onChange={() => setInputs({ ...inputs, gender: "male" })}
              />
              Male
            </label>
            <label
              htmlFor="female"
              className="p-2 text-sm label-text text-white flex items-center gap-2 cursor-pointer"
            >
              <input
                id="female"
                name="gender"
                type="radio"
                value="female"
                required
                className="radio bg-white h-4 w-4 checked:bg-red-500"
                checked={inputs.gender === "female"}
                onChange={() => setInputs({ ...inputs, gender: "female" })}
              />
              Female
            </label>
          </div>
          <Link
            to="/login"
            className="text-gray-300 text-sm hover:underline hover:text-blue-400 inline-block my-3"
          >
            Already have an account?
          </Link>
          <button className="btn btn-block btn-sm mt-2 bg-green-400 border-none hover:bg-green-500 text-black">
            {loading ? <span className="loading loading-spinner" /> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
