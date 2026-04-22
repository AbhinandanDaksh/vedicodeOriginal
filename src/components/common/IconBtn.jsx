export default function IconBtn({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
  }) {
    return (
      <button
        disabled={disabled}
        onClick={onclick}
        className={`flex items-center ${
          outline ? "border-2 border-orange-600 bg-transparent" : "bg-orange-500"
        } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 transition-colors hover:opacity-95 ${customClasses}`}
        type={type}
      >
        {children ? (
          <>
            <span className={`${outline && "text-orange-500"}`}>{text}</span>
            {children}
          </>
        ) : (
          text
        )}
      </button>
    )
  }