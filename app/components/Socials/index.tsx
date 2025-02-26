import Image from "next/image"
import { GithubIcon, GmailIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../Icons";

const Socials = ({ socials, className }) => {
    const iconComponents = {
        github: GithubIcon,
        instagram: InstagramIcon,
        linkedin: LinkedInIcon,
        twitter: TwitterIcon,
        gmail: GmailIcon,
    };
    return (
        
        <div className="flex flex-row gap-5 pl-10 pt-2">
            {Object.entries(socials)
                .filter(([key, value]) => value) // Remove empty values
                .map(([key, value]) => {
                    const IconComponent = iconComponents[key.toLowerCase()];
                    return (
                        <div key={key} className=" flex place-content-center">
                            <div className={className}>
                                <a href={value as string} target="_blank" rel="noopener noreferrer" className="flex place-content-center cursor-pointer hover:scale-125 transition-all">
                                    {iconComponents ? <IconComponent className="w-7 h-7 text-white fill-white" /> : key}
                                </a>
                            </div>
                        </div>
                    );
                })}
        </div>
    )
}

export default Socials;