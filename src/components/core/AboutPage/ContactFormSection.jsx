import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-center text-3xl font-semibold sm:text-4xl">
        Get in touch
      </h2>
      <p className="mt-3 text-center text-base text-richblack-200">
        Have a question or partnership idea? We&apos;d love to hear from
        you—fill out the form and we&apos;ll get back to you.
      </p>
      <div className="mt-12 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;