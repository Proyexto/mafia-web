"use client";
import { ForgotChangeForm, MainLayout } from "@/components";

export default function Forgot({params: {token}}: {params: {token: string}}) {
  return (
    <MainLayout className="flex justify-center items-center">
      <ForgotChangeForm token={token}/>
    </MainLayout>
  );
}
