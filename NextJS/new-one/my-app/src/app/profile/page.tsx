"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React from "react";

export default function Profile() {
  const router = useRouter();
  const [data, setData] = React.useState(null);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      toast.error("Logout failed");
      console.log(error);
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await axios.get("/api/users/me");
      console.log(response.data);
      setData(response.data.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {data === "nothing" ? (
            "Nothing"
          ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
          )}
        </h2>
        <hr className="mb-6" />
        <p className="text-gray-600 mb-6">Welcome to your profile page </p>

        <button
          onClick={logout}
          className="w-full py-2 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors"
        >
          Logout
        </button>

        <button
          onClick={getUserDetails}
          className="w-full py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Get User Details
        </button>

        <p className="text-sm text-gray-600 mt-6">
          Want to go back?{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
