"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import postRegister from "@/app/components/features/auth/register";
import { NextPage } from "next";

const Daftar: NextPage = () => {
  const router = useRouter();
  const [forms, setForms] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault;
    const { firstName, lastName, email, password } = forms;

    try {
      const res = await postRegister(firstName, lastName, email, password);
      if (res.status === 200) {
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      }

      if (res.response.data.status === "error") {
        const errMsg = {
          firstName: res.response.data.message.firstName,
          lastName: res.response.data.message.lastName,
          email: res.response.data.message.email,
          password: res.response.data.message.password,
        };
        setError((prev) => ({
          ...prev,
          firstName: errMsg.firstName,
          lastName: errMsg.lastName,
          email: errMsg.email,
          password: errMsg.password,
        }));
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-row justify-center items-center">
      <div className="bg-white flex-1 shadow-md max-w-[680px] rounded-[25px] p-4 sm:p-6 lg:p-20">
        <form>
          <h2 className="text-[42px] text-[#F99417] text-center font-bold">
            Sign Up Free
          </h2>
          <div className="mt-6 flex flex-row w-full space-between space-x-4">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-[#21272A] block mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Adam"
                className="bg-[#F2F4F8] border border-gray-300 rounded-lg text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(e) =>
                  setForms({ ...forms, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-[#21272A] block mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Fadilah"
                className="bg-[#F2F4F8] border border-gray-300 rounded-lg text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(e) =>
                  setForms({ ...forms, lastName: e.target.value })
                }
                required
              />
            </div>
          </div>
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
              onChange={(e) => setForms({ ...forms, email: e.target.value })}
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
              onChange={(e) => setForms({ ...forms, password: e.target.value })}
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
          </div>
          <button
            type="submit"
            className="w-full mt-4 text-white border border-transparent bg-[#363062] rounded-[14px] transition-all duration-200 ease-in-out hover:bg-transparent hover:border-[#363062] hover:text-[#363062] focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center"
            onClick={handleRegister}
          >
            Sign Up
          </button>
          <div className="text-sm text-center mt-6 font-regular text-[#001D6C]">
            Already have an account?{" "}
            <a href="/login" className="text-[#001D6C] hover:underline">
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Daftar;
