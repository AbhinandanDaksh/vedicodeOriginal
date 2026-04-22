import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Teacher.jpg";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="w-full pl-0 lg:w-[50%] lg:pl-12">
            <img
              src={Instructor}
              alt="VediCode instructor"
              className="mx-auto w-full max-w-md rounded-2xl shadow-[0_25px_50px_-12px_rgba(234,88,12,0.35)] sm:max-w-lg lg:mx-0 lg:w-[90%]"
            />
          </div>
          <div className="flex w-full max-w-lg flex-col gap-8 lg:max-w-none lg:w-[50%]">
            <h2 className="text-center text-3xl font-semibold sm:text-4xl lg:text-left">
              Become an
              <HighlightText text={"instructor"} />
            </h2>

            <p className="w-full text-justify text-[16px] font-medium leading-relaxed text-richblack-300">
              Instructors from around the world teach students on VediCode. We
              provide the tools and support so you can share what you love.
            </p>

            <div className="mx-auto w-fit lg:mx-0">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Start Teaching Today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InstructorSection