"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";


function Dashboard() {
  const user = useUser();
  return <div>Dashboard</div>;
}

export default Dashboard;
