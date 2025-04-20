import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useThemeContext } from "../ThemeProvider";

type ProjectsDataProps = {
  src: string;
  width: number;
  height: number;
  index?: number;
  url: string;
  title: string;
  description: string;
};

const ProjectsProvider = ({
  src,
  width,
  height,
  url,
  title,
  description,
}: ProjectsDataProps) => {
  const { mode } = useThemeContext();
  const nameColor = mode === "dark" ? "text-slate-300" : "text-slate-800";
  const mainDivColor = mode != "dark" ? "bg-slate-300/10" : "bg-white/10";
  const subdivColor = mode != "dark" ? "border-black/10" : "border-white/20";

  return (
    <Link
      key={title}
      href={url}
      className="group"
      target="_blank"
      rel="noopener noreferrer"
      about="Github Profile"
    >
      <div
        className={`relative flex flex-col items-center justify-center 
        ${mainDivColor} backdrop-blur-xl bg-opacity-20 bg-clip-padding
        border ${subdivColor} border-opacity-30
        rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        hover:shadow-[0_8px_40px_0_rgba(31,38,135,0.45)]
        transition-shadow duration-300 p-5 w-[85vw] sm:w-full max-w-sm cursor-pointer overflow-hidden`}
      >
        {/* Project Image */}
        <div
          className={`relative w-full h-48 rounded-lg overflow-hidden border-2 ${subdivColor}`}
        >
          <Image
            src={src}
            alt="Project Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Project Details */}
        <div className="mt-4 text-center">
          <h3 className={`text-lg font-bold ${nameColor}`}>{title}</h3>
          <p className={`text-sm ${nameColor} mt-1 line-clamp-5`}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsProvider;
