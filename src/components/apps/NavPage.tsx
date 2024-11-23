import React from "react";
import { websites, wallpapers } from "~/configs";
import { NavProps, NavSection, numTracker } from "./Safari";

export const NavPage = ({ width, setGoURL }: NavProps) => {
  const dark = useStore((state) => state.dark);
  const { language } = useLanguage();

  const grid = width < 640 ? "grid-cols-4" : "grid-cols-8";
  const span = width < 640 ? "col-span-3" : "col-span-7";

  return (
    <div
      className="w-full safari-content overflow-y-scroll bg-center bg-cover text-c-black"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`
      }}
    >
      <div className="w-full min-h-full pt-8 bg-c-100/80 backdrop-blur-2xl">
        {/* Favorites */}
        <NavSection section={websites.favorites} setGoURL={setGoURL} width={width} />

        {/* Frequently Visited */}
        <NavSection section={websites.freq} setGoURL={setGoURL} width={width} />

        {/* Privacy Report */}
        <div className="mx-auto w-full max-w-screen-md" p="t-8 x-4 b-16">
          <div font="medium" text="xl sm:2xl">
            Privacy Report
          </div>
          <div
            className={`h-16 w-full mt-4 grid ${grid} shadow-md rounded-xl text-sm`}
            bg="gray-50/70 dark:gray-600/50"
          >
            <div className="col-start-1 col-span-1 flex-center space-x-2">
              <span className="i-fa-solid:shield-alt text-2xl" />
              <span className="text-xl">{numTracker}</span>
            </div>
            <div className={`col-start-2 ${span} hstack px-2`}>
              {language === "en"
                ? `In the last seven days, Safari has prevent ${numTracker} tracker from profiling you.`
                : `En los últimos siete días, Safari ha evitado que ${numTracker} rastreadores te perfilen.`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

