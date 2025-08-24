"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response?.data || error);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyEmail();
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Verify Email</h1>

        {/* Show token (for debugging) */}
        <p className="text-sm text-gray-500 mb-6">
          {token ? `Verifying token: ${token}` : "No token found"}
        </p>

        {/* Success state */}
        {verified && (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">✅ Email Verified</h2>
            <Link
              href="/login"
              className="inline-block mt-2 text-blue-600 font-medium hover:underline"
            >
              Login here
            </Link>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Verification Failed</h2>
            <Link
              href="/signup"
              className="inline-block mt-2 text-blue-600 font-medium hover:underline"
            >
              Try signing up again
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
