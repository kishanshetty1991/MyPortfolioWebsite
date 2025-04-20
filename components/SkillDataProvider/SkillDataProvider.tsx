import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { useThemeContext } from "../ThemeProvider";
import Link from "next/link";
import { Url } from "url";

type SkillDataProps = {
  src: string;
  width: number;
  height: number;
  index: number;
  url: Url;
};

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
  url,
}: SkillDataProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationDelay = 0.3;
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const { mode } = useThemeContext();
  const mainDivColor = mode != "dark" ? "bg-slate-300/10" : "bg-white/10";
  const subdivColor = mode != "dark" ? "border-black/10" : "border-white/20";

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div
        className={`relative w-fit p-4 rounded-lg ${mainDivColor} shadow-lg`}
      >
        {/* Dark Background Overlay */}
        <div className={`absolute inset-0 ${subdivColor} rounded-lg`}></div>
        <motion.div
          ref={ref}
          initial="hidden"
          variants={imageVariants}
          animate={isInView ? "visible" : "hidden"}
          custom={index}
          transition={{ delay: index * animationDelay }}
        >
          <Image
            src={src}
            width={width}
            height={height}
            alt="Skill Image"
            aria-label="Skill Image"
          />
        </motion.div>
      </div>
    </Link>
  );
};

export default SkillDataProvider;
