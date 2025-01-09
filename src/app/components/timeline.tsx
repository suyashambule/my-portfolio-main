import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: <span className="text-violet-600">2021 - Present</span>,
      content: (
        <div>
          <p className="text-blue-400 text-xs md:text-sm font-normal mb-2">
            BTech in Computer Engineering
          </p>
          <p className="text-black dark:text-white">
            Vishwakarma University, Pune
          </p>
          <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-8">
            CGPA: 7.1 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/vishwakarma.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-full w-full object-fit-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2021",
      content: (
        <div>
          <p className="text-blue-400 text-xs md:text-sm font-normal mb-2">
          </p>
          <p className="text-black dark:text-white">
            KPC Jr college, kharghar(HSC)
          </p>
          <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-8">
            Percentage: 82.00%
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/college.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-full w-full object-fit-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="education" className="w-full">
      <Timeline data={data} />
    </div>
  );
}