// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
// Component Imports
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"

function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Section 1 — Hero */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-6 text-white">
        <p className="mt-20 text-center text-sm font-medium uppercase tracking-[0.2em] text-richblack-100">
          Learn at your pace · Build real projects
        </p>

        {/* Become an Instructor chip */}
        <Link to={"/signup"}>
          <div className="group w-fit rounded-full border border-white/5 bg-gradient-to-b from-richblack-800 to-richblack-900 p-[3px] font-semibold text-richblack-100 shadow-lg shadow-black/20 transition-all duration-200 hover:scale-[0.99]">
            <div className="flex flex-row items-center gap-2 rounded-full bg-richblack-900/90 px-8 py-2.5 transition-all duration-200 group-hover:bg-richblack-800">
              <p>Become an instructor</p>
              <FaArrowRight className="text-orange-400" />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="mt-2 max-w-4xl text-center text-4xl font-semibold leading-tight sm:text-5xl sm:leading-tight lg:text-6xl">
          Empower your future with
          <HighlightText text={"Coding Skills"} />
        </div>

        {/* Sub Heading */}
        <p className="-mt-1 max-w-2xl text-center text-base font-normal leading-relaxed text-richblack-200 sm:text-lg">
          Master in-demand skills with online courses, hands-on projects, and
          feedback from experienced instructors—study from anywhere, on your
          schedule.
        </p>

        {/* Trust row */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-richblack-100">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Project-based learning
          </span>
          <span className="hidden sm:inline text-richblack-500">|</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Expert-led paths
          </span>
          <span className="hidden sm:inline text-richblack-500">|</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Community support
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:mt-8 sm:flex-row sm:gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Get started free
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            I have an account
          </CTAButton>
        </div>

        {/* Video */}
        <div className="my-8 w-full max-w-5xl px-0 sm:my-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_50px_-12px_rgba(234,88,12,0.25)]">
            <video
              className="aspect-video w-full object-cover"
              muted
              loop
              autoPlay
              playsInline
            >
              <source src={Banner} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={" text-orange-600"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className=" bg-white text-white ">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-richblack-800">
          {/* Job that is in demand */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-8 lg:mt-20 lg:flex-row lg:gap-12">
            <div className="text-3xl font-semibold sm:text-4xl lg:w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-8 lg:w-[42%]">
              <p className="text-base leading-relaxed text-richblack-600">
                The tech industry moves fast. To stay competitive, you need
                more than theory—VediCode helps you build proof through projects
                and practical experience employers notice.
              </p>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Browse the catalog</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-16 flex w-full max-w-screen-2xl flex-col items-center gap-10 bg-gradient-to-b from-richblack-900 via-richblack-900 to-[#0a1628] px-4 py-20 text-white sm:px-6 lg:my-20 lg:px-8">
        <InstructorSection />

        <div className="w-full max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            What learners say
          </h2>
          <p className="mt-3 text-sm text-richblack-200 sm:text-base">
            Real feedback from people who leveled up with VediCode
          </p>
        </div>
        <div className="w-full max-w-5xl">
          <ReviewSlider />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home