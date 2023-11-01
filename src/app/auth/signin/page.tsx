import Link from "next/link";
import { LoginForm } from "@/components";

export default function SignIn() {
  return (
    <section>
      <LoginForm/>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/auth/signup">Registrarse</Link>
      </nav>
    </section>
  );
}
