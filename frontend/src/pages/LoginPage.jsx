const LoginPage = () => {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-gray-300 text-3xl font-semibold">
        Login <span className="text-orange-500">DoConnect</span>
      </h1>
      <div className="p-5 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-md w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%]">
        <form className="w-full">
          <label
            htmlFor="loginUsername"
            className="label p-2 text-base label-text text-white"
          >
            Username
          </label>
          <input
            id="loginUsername"
            type="text"
            placeholder="Enter username"
            className="w-full input input-bordered h-10"
          />
          <label
            htmlFor="loginPassword"
            className="label p-2 text-base label-text text-white"
          >
            Password
          </label>
          <input
            id="loginPassword"
            type="password"
            placeholder="Enter password"
            autoComplete="off"
            className="w-full input input-bordered h-10"
          />
          <a
            href="#"
            className="text-gray-300 text-sm hover:underline hover:text-blue-400 inline-block my-3"
          >
            Don`t have an account?
          </a>
          <button className="btn btn-block btn-sm mt-2 bg-green-400 border-none hover:bg-green-500 text-black">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
