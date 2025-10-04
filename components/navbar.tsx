"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Navbar() {
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 1 } });

        tl.from(".logo", { y: -20, opacity: 0, duration: 0.8 })
          .from(".nav_link", { x: -20, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.6")
          .from(".nav_btn", { x: 20, opacity: 0, duration: 0.8 }, "-=0.8");
    }, []);

    return(
        <div className="w-full py-5 bg-[#fff]">
            <div className="container flex items-center justify-around">
                <h2 className="logo">TryHard</h2>
                <ul className="nav">
                    <li><Link href="#problem" className="nav_link">Problem</Link></li>
                    <li><Link href="#solution" className="nav_link">Solution</Link></li>
                    <li><Link href="#solution" className="nav_link flex gap-2 items-center">How it works</Link></li>
                    <li><Link href="#features" className="nav_link">Features</Link></li>
                </ul>
                <a href="#" className="nav_btn">Get Demo</a>
            </div>
        </div>
    );
}
