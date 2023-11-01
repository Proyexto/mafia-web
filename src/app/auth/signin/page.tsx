import Link from "next/link";
import { SignInForm } from "@/components";

export default function SignIn() {
  return (
    <section>
      <SignInForm/>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/auth/signup">Registrarse</Link>
      </nav>
    </section>
  );
}
