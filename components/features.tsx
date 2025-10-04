import Image from "next/image";
import { gsap } from "gsap";
import FeaturesCard from "@/components/features_card";

export default function Features() {
    return(
        <div id="features" className="bg-[#000] text-white py-[10vh] mt-[10vh]">
            <div className="max-w-[1420px] flex flex-col items-start m-auto">
                <h3 className="text-white text-[30px] max-w-[500px] font-[500] mb-[5vh]">What Makes Our Solution Unique</h3>
                <div className="grid grid-cols-3 gap-10 w-full">
                    <FeaturesCard imageSrc="/clock.svg" title="Real-Time Monitoring" description="Stay updated with live satellite feeds, detecting changes as they happen anywhere on Earth."/>
                    <FeaturesCard imageSrc="/radio.svg" title="SAR Technology" description="See through clouds, smoke, and darkness with radar-based imaging that never misses critical details."/>
                    <FeaturesCard imageSrc="/database.svg" title="Anomaly Detection" description="AI models analyze time-series data to highlight unusual patterns and signal potential risks instantly."/>
                    <FeaturesCard imageSrc="/map.svg" title="Interactive Map" description="Visualize environmental changes on an intuitive web map with clear highlights and time filters."/>
                    <FeaturesCard imageSrc="/file-text.svg" title="GeoJSON Integration" description="Seamlessly connect structured geospatial data into backend systems for research and development."/>
                    <FeaturesCard imageSrc="/activity.svg" title="Actionable Insights" description="Beyond raw data — get meaningful descriptions of events to empower decision-making and fast response."/>
                </div>
            </div>
        </div>
    );
}