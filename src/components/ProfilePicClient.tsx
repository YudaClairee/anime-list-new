"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Session } from "next-auth";
import Image from "next/image";

interface ProfilePicClientProps {
  session: Session | null;
}

export function ProfilePicClient({ session }: ProfilePicClientProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Image
          src={session?.user?.image || ""}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-bold text-lg bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text">
              Profile
            </h4>
            <div className="flex gap-2">
              <h2 className="font-medium">Nama: </h2>
              <p>{session?.user?.name}</p>
            </div>
            <div className="flex gap-2">
              <h2 className="font-medium">Email: </h2>
              <p>{session?.user?.email}</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
