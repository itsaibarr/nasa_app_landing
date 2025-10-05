
"use client";

import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(".hero_title", { y: 30, opacity: 0, duration: 0.6 })
          .from(".hero_desc", { x: -30, opacity: 0, duration: 0.6 }, "-=0.4")
          .from(".hero_btns a", { y: 20, opacity: 0, duration: 0.6, stagger: 0.2 }, "-=0.4")
          .from(".hero_mood img", { x: 50, opacity: 0, duration: 0.8, stagger: 0.3 }, "-=0.6");
    }, []);

    return(
        <div className="container text-center flex-col">
            <h1 className="hero_title mt-[7vh] mb-[2vh]">AI Smart Agent Emergency Situations Detector</h1>
            <h4 className="hero_desc">Observe real-time ground activity to provide emergency assistance</h4>
            <div className="hero_btns">
                <a href="https://nasa-demo-zeta.vercel.app/" className="main_btn">Get Demo Version - It’s free</a>
                <a href="https://www.canva.com/design/DAG08Tw9PhY/ZDD8WX3i1_LU_UfAeW1abQ/view?utm_content=DAG08Tw9PhY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6d8ece0737" className="secondary_btn">Know more about our team <Image src="/arrow-right.svg" alt="arrow" width={24} height={24} /></a>
            </div>
            <div className="hero_mood flex items-center justify-center mt-[10vh] mb-[10vh]">
                    <Image src="/hero_1.svg" alt="dark hole" width={822} height={447}/>
                    <Image src="/hero_2.svg" alt="team mood" width={572} height={447}/>
            </div>
        </div>
    );
}
