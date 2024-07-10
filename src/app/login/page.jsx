"use client"
import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";



const page = () => {
    const handleLogin = async () => {

    }


  return (
    <div className="container px-24 mx-auto py-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <Image
            alt="login"
            src={"/assets/images/login/login.svg"}
            width={540}
            height={540}
          />
        </div>
        <div className="border-2 p-12 ">
          <h6 className="text-3xl font-semibold text-primary text-center mb-12">
            Sign in
          </h6>

          <form onSubmit={handleLogin}>
            <div>
              <label className="pb-3" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="mt-3 input input-bordered w-full"
              />
            </div>

            <div className="mt-2">
              <label className="py-3" htmlFor="email">
                Password
              </label>{" "}
              <br />
              <input
                type="text"
                name="password"
                placeholder="Your Email"
                className="mt-3 input input-bordered w-full"
              />
            </div>
            <button className="btn btn-primary w-full mt-8">Sign In</button>
          </form>
          <div>
            <h6 className="my-4 text-center">or sign in with</h6>
            <div className="flex items-center justify-center gap-5">
              <button className="btn flex items-center justify-center text-primary">
                {" "}
                <FaFacebook />
              </button>
              <button className="btn flex items-center justify-center text-primary">
                {" "}
                <FaGoogle />
              </button>
              <button className="btn flex items-center justify-center text-primary">
                {" "}
                <FaGithub />
              </button>
            </div>
            <h6 className="my-4 text-center">
              Not have an account
              <Link className="text-primary font-semibold mr-2" href={"/signup"}>
                Sign Up
              </Link>{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
