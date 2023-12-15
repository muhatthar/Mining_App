export default function LoginPage () {
  return (
    <div className="min-h-screen flex flex-row justify-center items-center">
      <div className="bg-white flex-1 shadow-md max-w-[680px] rounded-[25px] p-4 sm:p-6 lg:p-20">
        <form action="#">
          <h2 className="text-[42px] text-[#F99417] text-center font-bold">
            Log In
          </h2>
          <p className="text-lg text-[#21272A] text-center font-normal space-y-0">
            Please log in to continue
          </p>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#21272A] block mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#F2F4F8] border border-gray-300 rounded-lg text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#21272A] block mb-2"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-[#F2F4F8] border border-gray-300 rounded-lg text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start mt-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4"
                  required
                />
              </div>
              <div className="text-sm ml-2">
                <label
                  htmlFor="remember"
                  className="font-medium text-[#21272A]"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm text-[#001D6C] hover:underline ml-auto"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full mt-4 text-white border border-transparent bg-[#363062] rounded-[14px] transition-all duration-200 ease-in-out hover:bg-transparent hover:border-[#363062] hover:text-[#363062] font-medium text-sm px-5 py-2.5 text-center"
          >
            Log In
          </button>
          <div className="text-sm text-center mt-6 font-regular text-[#001D6C]" >
            No account yet?{" "}
            <a
              href="/register"
              className="text-[#001D6C] hover:underline"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
