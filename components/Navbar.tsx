// @ts-nocheck

import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="flex flex-row justify-between items-center">
      <Link href="/" className="font-black">
        LOGO
      </Link>
      <div>
        {session && session.user ? (
          <div className="flex flex-row justify-between items-center">
            <Link href="/startup/create">
              <Button variant="outline">
                <span className="">Create</span>
              </Button>
            </Link>

            <form
              action={async () => {
                "use server";

                await signOut();
              }}
            >
              <button type="submit">
                <span>Logout</span>
              </button>
            </form>

            <Link
              href={`/user/${session.id}`}
              className="flex flex-col items-center"
            >
              <span>{session?.user?.name}</span>
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={30}
                height={30}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";

              await signIn("google");
            }}
          >
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </header>
  );
};

export default Navbar;
