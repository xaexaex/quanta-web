"use client";

import Image from "next/image";
import { Github, Twitter, Code } from "lucide-react";
import { useState } from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  fallbackIcon?: "code" | "chat";
  fallbackText?: string;
  fallbackGradient: string;
  githubUrl?: string;
  twitterUrl?: string;
}

export default function TeamMember({
  name,
  role,
  description,
  imageSrc,
  fallbackIcon,
  fallbackText,
  fallbackGradient,
  githubUrl,
  twitterUrl,
}: TeamMemberProps) {
  const [imageError, setImageError] = useState(false);

  const renderFallback = () => {
    if (fallbackIcon === "code") {
      return <Code className="w-10 h-10 text-white" />;
    }
    if (fallbackIcon === "chat") {
      return <span className="text-3xl">💬</span>;
    }
    if (fallbackText) {
      return <span className="text-4xl font-bold text-white">{fallbackText}</span>;
    }
    return <span className="text-3xl">💬</span>;
  };

  return (
    <div className="border-2 border-gray-100 rounded-2xl p-8 hover:border-[#00E599] transition-all text-center">
      <div className={`w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden ${fallbackGradient} flex items-center justify-center`}>
        {!imageError ? (
          <Image 
            src={imageSrc}
            alt={`${name} - ${role}`}
            width={96}
            height={96}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          renderFallback()
        )}
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-[#00E599] font-semibold mb-4">{role}</p>
      <p className="text-gray-600 text-sm mb-6">{description}</p>
      <div className="flex justify-center gap-3">
        {githubUrl && (
          <a href={githubUrl} target="_blank" className="text-gray-400 hover:text-[#00E599] transition-colors">
            <Github className="w-5 h-5" />
          </a>
        )}
        {twitterUrl && (
          <a href={twitterUrl} target="_blank" className="text-gray-400 hover:text-[#00E599] transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}
