import React from "react";
import SectionHeading from "../../helper/SectionHeading";
import { experiences } from "@/data";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        title_1="Experience &"
        title_2="Education"
        description="My professional journey and academic background"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-blue-900 md:-translate-x-1/2"></div>

        {experiences.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center z-10">
              {item.type === "work" ? (
                <Briefcase className="w-4 h-4 text-blue-500" />
              ) : (
                <GraduationCap className="w-4 h-4 text-blue-500" />
              )}
            </div>

            {/* Content */}
            <div className="ml-16 md:ml-0 md:w-[calc(50%_-_2rem)]">
              <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300">
                {/* Period */}
                <div className="flex items-center gap-2 text-sm text-blue-500 mb-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10">
                    {item.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Company */}
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  {item.University  }
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-indigo-500 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;