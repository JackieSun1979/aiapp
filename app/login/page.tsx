import React from 'react'
import { LogIn } from "@/app/components/login/login";
import { userSession } from "@/auth/helpers";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await userSession();
  if (user) {
    redirect("/");
  }
  return (
    <LogIn />
  );
}
