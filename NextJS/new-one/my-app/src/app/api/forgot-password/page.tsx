import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onForgotPassword = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/forgot-password", {
        email,
      });
      console.log("forgot password success", response.data);
      toast.success("Check your email for password reset link");
    } catch (error: any) {
      console.log("forgot password failed", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Forgot Password</h1>
      <hr />
      <label htmlFor="email">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        onClick={onForgotPassword}
      >
        {loading ? "Loading..." : "Reset Password"}
      </button>
      <Link href="/login">Login</Link>
    </div>
  );
}
