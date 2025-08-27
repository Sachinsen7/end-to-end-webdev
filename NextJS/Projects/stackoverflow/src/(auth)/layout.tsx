"use client";

import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/router";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAuthStore();
  const router = useRouter();

  React.useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  if (session) {
    return null;
  }

  return (
    <div className="">
      <div>{children}</div>
    </div>
  );
};

export default layout;
