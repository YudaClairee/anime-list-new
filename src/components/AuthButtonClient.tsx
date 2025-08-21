"use client";

import { Session } from "next-auth";
import { LoginButton } from "./LoginButton";
import { signInAction, signOutAction } from "@/lib/actions/auth";
import SignOutButton from "./SignOutButton";
import { ProfilePicClient } from "@/components/ProfilePicClient";

interface AuthButtonClientProps {
  session: Session | null;
}

export function AuthButtonClient({ session }: AuthButtonClientProps) {
  const handleLogin = () => {
    signInAction();
  };

  const handleLogout = () => {
    signOutAction();
  };

  return (
    <div>
      {session ? (
        <div className="flex items-center gap-2">
          <ProfilePicClient session={session} />
          <SignOutButton handleLogout={handleLogout} />
        </div>
      ) : (
        <LoginButton handleLogin={handleLogin} />
      )}
    </div>
  );
}
