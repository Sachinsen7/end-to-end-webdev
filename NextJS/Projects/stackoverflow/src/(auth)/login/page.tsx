"use client";

import React from "react";
import { useAuthStore } from "@/store/auth";

function LoginPage() {
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // collect data

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    // validate

    if (!email || !password) {
      setError(() => "All fields are required");
      return;
    }

    setIsLoading(true);
    setError("");

    // call the store

    const loginResponse = await login(email.toString(), password.toString());

    if (loginResponse.error) {
      setError(() => loginResponse.error!.message);
      return;
    }

    setIsLoading(() => false);

    return <div>LoginPage</div>;
  };
}

export default LoginPage;
