import React from "react"
import HighlightText from "../HomePage/HighlightText"

const Quote = () => {
  return (
    <p className="mx-auto max-w-4xl text-center text-lg font-medium leading-relaxed text-richblack-100 sm:text-2xl md:text-3xl md:leading-snug">
      We are passionate about the way people learn. Our platform{" "}
      <HighlightText text={"combines technology"} />, hands-on practice, and
      community so you can grow with{" "}
      <span className="font-semibold text-orange-400">confidence</span>—not
      just complete videos.
    </p>
  )
}

export default Quote
