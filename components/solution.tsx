
import Image from "next/image";
import { gsap } from "gsap";
import Spline from '@splinetool/react-spline/next';


export default function Solution() {
    return (
        <div id="solution" className="container justify-between">
            <div className="max-w-[761px] flex flex-col">
                <h3 className="main_title">How We Solve It?</h3>
                <p className="max-w-[633px] mt-[30px] mb-[50px]">
                    Our solution addresses the core challenges of satellite monitoring by combining advanced data processing, backend integration, and artificial intelligence. We began by gathering SAR (Synthetic Aperture Radar) data from the Alaska Satellite Facility, which provides the ability to see Earth’s surface regardless of clouds or darkness. This raw information was then transformed into the GeoJSON format, making it structured, georeferenced, and ready for web applications. After integrating the GeoJSON file into our backend, we built an interactive map interface that allows users to explore environmental changes over specific dates and regions. On top of this system, we developed an AI model capable of detecting anomalies in the satellite data and automatically generating descriptive insights, so that users not only see where something unusual has occurred, but also understand what it means. With real-time SAR data integration, this solution has the potential to function as a live monitoring tool, enabling emergency services, researchers, and organizations to track floods, wildfires, glacial shifts, and other critical events as they happen, and to respond faster than ever before.
                </p>
                <a href="https://nasa-demo-zeta.vercel.app/" className="solution_btn main_btn inline-flex gap-2 max-w-[265px]">
                    Get Demo Version
                    <Image src="/arrow-right-white.svg" alt="arrow" width={24} height={24} />
                </a>
            </div>
            <div className="mt-[10vh] mb-[10vh]" style={{ width: '640px', height: '640px' }}>
                <Spline
                  scene="https://prod.spline.design/NkTragPDS8ouN9dR/scene.splinecode" 
                  style={{ width: '640px', height: '640px' }}
                />
            </div>
        </div>
    );
}
