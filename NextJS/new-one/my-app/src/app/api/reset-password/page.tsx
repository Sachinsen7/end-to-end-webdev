import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onResetPassword = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/reset-password", {
        token,
        password,
      });
      console.log("reset password success", response.data);
      toast.success("Password reset success");
      router.push("/login");
    } catch (error: any) {
      console.log("reset password failed", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Reset Password</h1>
      <hr />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        onClick={onResetPassword}
      >
        {loading ? "Loading..." : "Reset Password"}
      </button>
      <Link href="/login">Login</Link>
    </div>
  );
}
