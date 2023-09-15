"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const UserProfile = () => {
  const { data: session }: any = useSession();
  if (session && session.user && !session.user.image) {
    session.user.image = '/user-avatar.png'
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-col items-stretch">
          <button className="relative gap-2 p-0 justify-start">
            <img className="w-[36px]" src={session?.user?.image!} alt={session?.user?.name!} />
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-10 bg-white" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session?.user?.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { UserProfile };
