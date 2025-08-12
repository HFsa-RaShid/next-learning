"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();


    const links = [
        { title: "Home", path: '/' },
        { title: "About", path: '/about' },
        { title: "Contact", path: '/contact' },
        { title: "Services", path: '/services' },
    ];

    const handler = () => {
        router.push('/login');
    }
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Next-Learning</Link>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6">
         {links.map((link) =>
            <Link className={`${pathName === link.path && "text-blue-700"}`} key={link.path} href={link.path}>{link.title}</Link>)
         }
        </ul>
        <button className="p-2 bg-white text-black rounded-2xl">LogIn</button>

        
      </div>
    </nav>
  );
};

export default Navbar;
