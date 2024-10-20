"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    (<div
      className="w-full md:px-16"
      ref={containerRef}>
      <div className=" mx-auto py-20 px-4 md:px-10">
        <h2 className="mb-4 max-w-lg">
          {/* My journey */}
        </h2>
        <p
          className="max-w-sm">
          {/* I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey. */}
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl pb-20">

        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">

            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">

              <div className="absolute left-[32px] w-[2px] h-12 bg-white50 flex items-center justify-center backdrop-blur-xl"/>

              <div className="h-12 flex-col self-center items-center">
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white90 ">
                  {item.title}
                </h3>
              </div>

            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">

              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white90">
                {item.title}
              </h3>

              {item.content}{" "}

            </div>

          </div>
        ))}

        <div
            style={{
                height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white25 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">

            <motion.div
                style={{
                height: heightTransform,
                opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-accentSecondary via-accent to-transparent from-[0%] via-[10%] rounded-full" 
            />

        </div>
        
      </div>
    </div>)
  );
};
