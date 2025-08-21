"use client";

import { Session } from "next-auth";
import { LoginButton } from "./LoginButton";
import { signInAction } from "@/lib/actions/auth";
import SignOutButton from "@/components/SignOutButton";
import { ProfilePicClient } from "@/components/ProfilePicClient";

interface AuthButtonClientProps {
  session: Session | null;
}

export function AuthButtonClient({ session }: AuthButtonClientProps) {
  const handleLogin = () => {
    signInAction();
  };

  return (
    <div>
      {session ? (
        <div className="flex items-center gap-2">
          <ProfilePicClient session={session} />
          <SignOutButton />
        </div>
      ) : (
        <LoginButton handleLogin={handleLogin} />
      )}
    </div>
  );
}
