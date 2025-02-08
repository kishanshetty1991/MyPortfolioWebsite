import { useThemeContext } from "@/components/ThemeProvider";
import { Box } from "@mui/material";
import Shapes from '@/components/ThreeD/Shapes';
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Home = () => {
  const { mode } = useThemeContext();
  const component = useRef(null);

  const gradientStyles =
    mode === "dark"
      ? "bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500"
      : "bg-gradient-to-tr from-amber-600 via-pink-700 to-purple-900";

  const nameColor = mode === "dark" ? "text-slate-300" : "text-slate-800";
  const subNameColor = mode === "dark" ? "text-slate-500" : "text-slate-300";

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          }
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          }
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  const renderLetters = (name: any, key: string) => {
    if (!name) return;
    return name.split("").map((letter: any, index: number) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Box sx={{ marginTop: 10 }} ref={component}>
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 place-items-center gap-y-10">
        <div className="col-start-1 md:row-start-1" data-speed=".2">
          <h1
            className="mb-8 text-center text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter md:mb-0"
            aria-label={"Kishan Shetty"}
          >
            <span className={`block ${nameColor}`}>
              {renderLetters("Kishan", "first")}
            </span>
            <span className={`-mt-[.2em] block ${subNameColor}`}>
              {renderLetters("Shetty", "last")}
            </span>
          </h1>
          <span
            className={`job-title block ${gradientStyles} bg-clip-text pl-1 text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-100 md:text-4xl`}
            aria-label="FullStack Developer"
          >
            FullStack Developer
          </span>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-full md:flex-row">
          <Shapes />
        </div>
      </div>
    </Box>
  );
};

export default Home;
