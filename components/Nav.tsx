"use client";
import {
  getProviders,
  signIn,
  signOut,
  useSession
} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const { data: session } = useSession()

  const [providers, setProviders] = useState(null);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt=""
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">
          Promptopia
        </p>
      </Link>
      {/* Desktop navigation */}
      <div className="sm:flex hidden ">
        {session?.user
          ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn">Create Prompt</Link>
              <button
                type="button"
                onClick={() => signOut}
                className="outline_btn"
              >
                Sign Out
              </button>
              <Link href="/profile">
                <Image
                  src={session.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="Profile"
                />
              </Link>
            </div>
          )
          : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
      </div>
      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session.user.image!}
              alt="profile"
              width={30}
              height={30}
              className="object-contain"
              onClick={() => setIsOpen((prev) => !prev)}
            />
            {isOpen && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setIsOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setIsOpen(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false)
                    signOut()
                  }}
                  className="black_btn mt-5 w-full"
                >
                  Sign Out
                </button>
              </div>
            )

            }
          </div>) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
