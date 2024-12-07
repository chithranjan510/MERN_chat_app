const SignUpPage = () => {
  return (
    <div className="min-h-screen overflow-y-auto flex flex-col gap-4 items-center justify-center">
      <h1 className="text-gray-300 text-3xl font-semibold">
        Sign Up <span className="text-orange-500">DoConnect</span>
      </h1>
      <div className="p-5 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-md w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] bg-cli">
        <form className="w-full">
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
            className="w-full input input-bordered h-10"
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
            className="w-full input input-bordered h-10"
          />
          <label
            htmlFor="registerPassword"
            className="label p-2 text-base label-text text-white"
          >
            Password
          </label>
          <input
            id="registerPassword"
            type="password"
            placeholder="Enter password"
            autoComplete="off"
            className="w-full input input-bordered h-10"
          />
          <label
            htmlFor="confirmRegisterPassword"
            className="label p-2 text-base label-text text-white"
          >
            Confirm Password
          </label>
          <input
            id="confirmRegisterPassword"
            type="password"
            placeholder="Confirm password"
            autoComplete="off"
            className="w-full input input-bordered h-10"
          />
          <div className="flex items-center mt-2">
            <label
              htmlFor="gender"
              className="label p-2 text-base label-text text-white mr-8"
            >
              Gender
            </label>
            <label
              htmlFor="male"
              className="p-2 text-sm label-text text-white flex items-center gap-2 cursor-pointer"
            >
              <input
                id="male"
                name="gender"
                type="radio"
                value="male"
                className="radio bg-white h-4 w-4 checked:bg-red-500"
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
                className="radio bg-white h-4 w-4 checked:bg-red-500"
              />
              Female
            </label>
          </div>
          <a
            href="#"
            className="text-gray-300 text-sm hover:underline hover:text-blue-400 inline-block my-3"
          >
            Already have an account?
          </a>
          <button className="btn btn-block btn-sm mt-2 bg-green-400 border-none hover:bg-green-500 text-black">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
