import { cookies } from "next/headers";
import { LoginForm } from "./login-form";

export default async function LoginPage() {
  const cookieStore = await cookies();
  const initialLoggedIn = Boolean(cookieStore.get("token")?.value);

  return <LoginForm initialLoggedIn={initialLoggedIn} />;
}
