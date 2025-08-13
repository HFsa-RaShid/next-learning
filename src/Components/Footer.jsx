"use client";
import React from 'react';
import { usePathname } from "next/navigation";


const Footer = () => {
     const pathName = usePathname();
    // Hide footer on dashboard pages
  if (pathName.includes("dashboard")) return (

   <footer className="text-center p-4 bg-green-600 text-white mt-4">
        <p>© 2025 Nextjs-Learning. All rights reserved.</p>
      </footer>
  );
    return (
        <div>
            <footer className="text-center p-4 bg-black text-white mt-4">
      <p>© 2025 Nextjs-Learning. All rights reserved.</p>
    </footer>
        </div>
    );
};

export default Footer;
