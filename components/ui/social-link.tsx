import { Links } from "@/types/link.type";
import { Github, Linkedin, Twitter } from "lucide-react";

const SocialLink = () => {
  const SocialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: Links.GITHUB,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: Links.LINKEDIN,
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: Links.TWITTER,
    },
  ];
  return (
    <div className="flex space-x-3">
      {SocialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 rounded-lg"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLink;
