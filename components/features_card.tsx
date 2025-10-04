import { gsap } from "gsap";

interface FeaturesCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export default function FeaturesCard({ imageSrc, title, description }: FeaturesCardProps) {
    return (
        <div className="">
            <div className="flex gap-3 items-center">
                <img src={imageSrc} alt={title} width="24" height="24" />
                <h3 className="text-[24px] font-[500]">{title}</h3>
            </div>
            <p className="text-[16px] max-w-[400px] mt-[20px]">{description}</p>
        </div>
    );
}
