import { auth } from "@/auth";
import { AuthButtonClient } from "@/components/AuthButtonClient";

export default async function AuthButton() {
  const session = await auth();

  return <AuthButtonClient session={session} />;
}
