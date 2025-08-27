"use client";

import React from "react";
import { useAuthStore } from "@/store/auth";

function RegisterPage() {
  const { createAccount, login } = useAuthStore();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // collect data

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");

    // validate

    if (!firstName || !lastName || !email || !password) {
      setError(() => "All fields are required");
      return;
    }
    // call the store

    setIsLoading(true);
    setError("");

    const response = await createAccount(
      `${firstName} ${lastName}`,
      email?.toString(),
      password?.toString()
    );

    if (response.error) {
      setError(() => response.error!.message);
    } else {
      const loginResponse = await login(email.toString(), password.toString());
      if (loginResponse.error) {
        setError(() => loginResponse.error!.message);
      }
    }

    setIsLoading(() => false);
  };

  return (
    <div>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}

      <form action="" onSubmit={handleSubmit}></form>
    </div>
  );
}

export default RegisterPage;
