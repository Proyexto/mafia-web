"use client";
import { FormEvent } from "react";
import Link from "next/link";
import { ForgotChangeForm } from "@/components";

export default function Forgot({params: {token}}: {params: {token: string}}) {
  return (
    <section>
      <ForgotChangeForm token={token}/>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/auth/signin">Ingresar</Link>
      </nav>
    </section>
  );
}
