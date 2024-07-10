// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

// const page = () => {
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const newUser = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       password: e.target.password.value,
//     };

//     console.log(newUser);

//     const res = await fetch("/signup/api", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     });

//     if (!res.ok) {
//       const errorData = await res.json();
//       console.error("Error:", errorData.message);
//       return;
//     }

//     const data = await res.json();
//     console.log(data);
//   };

//   return (
//     <div className="container px-24 mx-auto py-24">
//       <div className="grid grid-cols-2 gap-12 items-center">
//         <div>
//           <Image
//             alt="login"
//             src={"/assets/images/login/login.svg"}
//             width={540}
//             height={540}
//           />
//         </div>
//         <div className="border-2 p-12 ">
//           <h6 className="text-3xl font-semibold text-primary text-center mb-12">
//             Sign Up
//           </h6>

//           <form onSubmit={handleSignup}>
//             <div>
//               <label className="pb-3" htmlFor="email">
//                 Name
//               </label>{" "}
//               <br />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your name"
//                 className="mt-3 input input-bordered w-full"
//               />
//             </div>

//             <div>
//               <label className="pb-3" htmlFor="email">
//                 Email
//               </label>{" "}
//               <br />
//               <input
//                 type="text"
//                 name="email"
//                 placeholder="Your Email"
//                 className="mt-3 input input-bordered w-full"
//               />
//             </div>

//             <div className="mt-2">
//               <label className="py-3" htmlFor="email">
//                 Password
//               </label>{" "}
//               <br />
//               <input
//                 type="text"
//                 name="password"
//                 placeholder="Your Email"
//                 className="mt-3 input input-bordered w-full"
//               />
//             </div>
//             <button className="btn btn-primary w-full mt-8">Sign Up</button>
//           </form>
//           <div>
//             <h6 className="my-4 text-center">or sign in with</h6>
//             <div className="flex items-center justify-center gap-5">
//               <button className="btn flex items-center justify-center text-primary">
//                 {" "}
//                 <FaFacebook />
//               </button>
//               <button className="btn flex items-center justify-center text-primary">
//                 {" "}
//                 <FaGoogle />
//               </button>
//               <button className="btn flex items-center justify-center text-primary">
//                 {" "}
//                 <FaGithub />
//               </button>
//             </div>
//             <h6 className="my-4 text-center">
//               Already have account
//               <Link className="text-primary font-semibold" href={"/login"}>
//                 Sign In
//               </Link>{" "}
//             </h6>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const Page = () => {
  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    console.log(newUser);

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Error:', errorData.message);
        return;
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

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
        <div className="border-2 p-12">
          <h6 className="text-3xl font-semibold text-primary text-center mb-12">
            Sign in
          </h6>
          <form onSubmit={handleSignup}>
            <div>
              <label className="pb-3" htmlFor="email">
                Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="mt-3 input input-bordered w-full"
              />
            </div>
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
            <button className="btn btn-primary w-full mt-8">Sign Up</button>
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
              Already have account
              <Link className="text-primary font-semibold" href={"/login"}>
                Sign In
              </Link>{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
