import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Learning built for",
    highlightText: "real outcomes",
    description:
      "Structured paths, project checkpoints, and feedback so you are not just watching—you are building a portfolio you can show.",
    BtnText: "Explore courses",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Aligned with what teams expect",
    description:
      "Topics and projects are chosen to map to real interview and workplace scenarios, not only textbook chapters.",
  },
  {
    order: 2,
    heading: "Multiple ways to learn",
    description:
      "Video, notes, code-alongs, and assessments—use what works for you and track progress in one place.",
  },
  {
    order: 3,
    heading: "Proof of your skills",
    description:
      "Complete milestones and show completed work. Many paths include shareable work you can link on your resume.",
  },
  {
    order: 4,
    heading: "Feedback that moves you forward",
    description:
      "Ratings and reviews from peers and instructors help you know what to improve next.",
  },
  {
    order: 5,
    heading: "Job-ready mindset",
    description:
      "We emphasize shipping, debugging, and explaining your work—skills every hiring manager cares about.",
  },
]

const LearningGrid = () => {
  return (
    <div>
      <h2 className="mb-10 text-center text-2xl font-semibold sm:text-3xl lg:mb-12">
        Why learners choose{" "}
        <span className="text-orange-500">VediCode</span>
      </h2>
    <div className="mb-12 grid w-full max-w-6xl grid-cols-1 gap-0 mx-auto xl:w-fit xl:grid-cols-4">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h3 className="text-lg font-semibold text-richblack-5">
                  {card.heading}
                </h3>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default LearningGrid;