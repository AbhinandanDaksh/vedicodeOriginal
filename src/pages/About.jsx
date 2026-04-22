import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import ReviewSlider from "../components/common/ReviewSlider"
import Footer from "../components/common/Footer"

const About = () => {
  return (
    <div className="bg-richblack-900 text-white">
      {/* Hero */}
      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-maxContent px-4 pb-28 pt-16 text-center sm:px-6 lg:px-8 lg:pb-36">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-richblack-200">
            About VediCode
          </p>
          <h1 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Building a
            <HighlightText text={"brighter future"} />
            <span className="text-richblack-5">
              {" "}
              with practical tech education
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-richblack-200 sm:text-lg">
            We help learners and instructors connect through structured
            courses, real projects, and a community that supports growth—not
            just certificates.
          </p>
        </div>

        <div className="mx-auto -mt-10 max-w-maxContent px-4 sm:px-6 lg:-mt-16 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            <img
              src={BannerImage1}
              alt="Students learning online"
              className="h-48 w-full rounded-2xl object-cover shadow-lg shadow-black/30 sm:h-56"
            />
            <img
              src={BannerImage2}
              alt="Collaboration and code"
              className="h-48 w-full rounded-2xl object-cover object-top shadow-lg shadow-black/30 sm:h-56"
            />
            <img
              src={BannerImage3}
              alt="Mentorship and support"
              className="h-48 w-full rounded-2xl object-cover shadow-lg shadow-black/30 sm:h-56"
            />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-b border-white/5 bg-richblack-800/50 py-16">
        <div className="mx-auto max-w-maxContent px-4 sm:px-6 lg:px-8">
          <Quote />
        </div>
      </section>

      {/* Story + image */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-maxContent px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="flex flex-1 flex-col gap-6 text-left">
              <h2 className="max-w-lg text-3xl font-semibold sm:text-4xl">
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Our founding story
                </span>
              </h2>
              <p className="text-base font-medium leading-relaxed text-richblack-200">
                VediCode started from a simple belief: high-quality tech
                education should be within reach for anyone willing to put in
                the work. Educators and builders came together to create a
                place where lessons map to real job skills—not only slides and
                theory.
              </p>
              <p className="text-base font-medium leading-relaxed text-richblack-200">
                We saw how many learners were stuck between scattered tutorials
                and unclear next steps. So we built a platform that combines
                structured paths, projects you can show in interviews, and
                support from people who have been there before.
              </p>
            </div>
            <div className="w-full max-w-md flex-shrink-0 lg:max-w-lg">
              <img
                src={FoundingStory}
                alt="VediCode founding team vision"
                className="w-full rounded-2xl object-cover shadow-[0_0_40px_-8px] shadow-orange-500/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision + Mission cards */}
      <section className="border-y border-white/5 bg-richblack-800/30 py-16 lg:py-20">
        <div className="mx-auto max-w-maxContent px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="rounded-2xl border border-white/10 bg-richblack-900/80 p-8 shadow-inner sm:p-10">
              <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
                <span className="bg-gradient-to-b from-orange-500 to-amber-600 bg-clip-text text-transparent">
                  Our vision
                </span>
              </h2>
              <p className="leading-relaxed text-richblack-200">
                A world where anyone can learn to build software with clarity
                and confidence—supported by clear curriculum, honest feedback,
                and tools that respect your time.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-richblack-900/80 p-8 shadow-inner sm:p-10">
              <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
                <span className="bg-gradient-to-b from-turquoise-400 to-turquoise-600 bg-clip-text text-transparent">
                  Our mission
                </span>
              </h2>
              <p className="leading-relaxed text-richblack-200">
                We are here to help you go from &quot;I watch tutorials&quot; to
                &quot;I ship projects.&quot; That means community, accountability,
                and learning paths that line up with what teams actually need on
                the job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-maxContent px-4 sm:px-6 lg:px-8">
          <LearningGrid />
        </div>
        <div className="mt-4 border-t border-white/5 bg-richblack-800/20 py-12 lg:py-16">
          <div className="mx-auto max-w-maxContent px-4 sm:px-6 lg:px-8">
            <ContactFormSection />
          </div>
        </div>
      </section>

      <div className="mx-auto my-8 max-w-maxContent border-t border-white/5 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
            What learners say
          </h2>
          <p className="mt-2 text-sm text-richblack-200 sm:text-base">
            Honest feedback from the VediCode community
          </p>
        </div>
        <ReviewSlider />
      </div>

      <Footer />
    </div>
  )
}

export default About
