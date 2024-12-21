import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="flex flex-row justify-between">
      <div>LOGO</div>
      <div>
        {session && session?.user ? (
          <div className="flex flex-row justify-between">
            <Link href="/startup/create">
              <span className="">Create</span>
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

            <Link href={`/user/${session?.id}`}>
              <span>{session?.user?.name}</span>
              <Image
                src={session?.user?.image}
                alt={session?.user?.name}
                width={30}
                height={30}
                className="rounded"
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
