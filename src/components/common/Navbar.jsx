import { useEffect, useState } from "react"
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom"

import logo from "../../assets/Logo/VediCode.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiconnector"
import { categories } from "../../services/apis"
import { logout } from "../../services/operations/authAPI"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropDown"

function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <>
      <div className="sticky top-0 z-[100] bg-richblack-900/95 backdrop-blur-md">
        <div className="flex h-16 items-center justify-center border-b border-white/[0.08] transition-shadow duration-200">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
        >
          <img
            src={logo}
            alt="VediCode"
            className="h-9 w-auto sm:h-10"
            width={100}
            height={40}
            loading="lazy"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-8 text-[15px] font-medium text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 transition-colors ${
                      matchRoute("/catalog/:catalogName")
                        ? "text-orange-500"
                        : "text-richblack-25 hover:text-orange-400"
                    }`}
                  >
                    <p>Catalog</p>
                    <BsChevronDown className="text-sm opacity-80" />
                    <div className="invisible absolute left-1/2 top-full z-[1000] mt-1 flex w-[min(100vw-2rem,280px)] -translate-x-1/2 flex-col rounded-xl border border-white/10 bg-richblack-5 p-2 text-richblack-900 opacity-0 shadow-2xl shadow-black/50 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-richblack-5" />
                      {loading ? (
                        <p className="px-3 py-6 text-center text-sm text-richblack-600">
                          Loading…
                        </p>
                      ) : subLinks && subLinks.length ? (
                        <div className="relative z-[1] max-h-[min(60vh,320px)] overflow-y-auto pr-0.5">
                          {subLinks
                            ?.filter(
                              (subLink) => subLink?.courses?.length > 0
                            )
                            ?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="block rounded-lg border-l-2 border-transparent py-3 pl-3 pr-2 text-left text-richblack-800 transition-all hover:border-orange-500 hover:bg-orange-50/80"
                                key={i}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                        </div>
                      ) : (
                        <p className="px-3 py-6 text-center text-sm text-richblack-600">
                          No courses in catalog
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link?.path}
                    className={`transition-colors ${
                      matchRoute(link?.path)
                        ? "text-orange-500"
                        : "text-richblack-25 hover:text-orange-400"
                    }`}
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: cart + auth */}
        <div className="hidden items-center gap-x-3 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link
              to="/dashboard/cart"
              className="relative rounded-lg p-1.5 text-richblack-100 transition-colors hover:bg-white/5 hover:text-orange-400"
              aria-label="Cart"
            >
              <AiOutlineShoppingCart className="text-2xl" />
              {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-[1.25rem] place-items-center rounded-full bg-orange-500 px-1 text-center text-xs font-bold text-richblack-900">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <>
              <Link to="/login">
                <button
                  type="button"
                  className="rounded-lg border border-richblack-500 bg-transparent px-4 py-2 text-sm font-semibold text-richblack-5 transition-all hover:border-orange-500/40 hover:text-orange-400"
                >
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button
                  type="button"
                  className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-richblack-900 shadow-sm transition-all hover:bg-orange-600"
                >
                  Sign up
                </button>
              </Link>
            </>
          )}
          {token !== null && <ProfileDropdown />}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-richblack-100 transition-colors hover:bg-white/5 hover:text-orange-400 md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <AiOutlineMenu fontSize={24} />
        </button>
      </div>
        </div>
        <div
          className="h-1.5 w-full bg-gradient-to-r from-orange-700 via-orange-500 to-amber-400"
          aria-hidden
        />
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] md:hidden" role="dialog">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col border-l border-white/10 bg-richblack-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-richblack-200">
                Menu
              </span>
              <button
                type="button"
                className="rounded-lg p-2 text-richblack-100 hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
                aria-label="Close"
              >
                <AiOutlineClose fontSize={22} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col overflow-y-auto px-2 py-4">
              {NavbarLinks.map((link, index) => {
                if (link.title === "Catalog") {
                  return (
                    <div key={index} className="mb-2">
                      <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-richblack-400">
                        Catalog
                      </p>
                      {loading ? (
                        <p className="px-3 py-2 text-sm text-richblack-500">
                          Loading…
                        </p>
                      ) : (
                        subLinks
                          ?.filter((s) => s?.courses?.length > 0)
                          ?.map((subLink, i) => (
                            <Link
                              key={i}
                              to={`/catalog/${subLink.name
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                              className="block rounded-lg px-3 py-2.5 text-richblack-25 transition-colors hover:bg-white/5 hover:text-orange-400"
                            >
                              {subLink.name}
                            </Link>
                          ))
                      )}
                    </div>
                  )
                }
                return (
                  <Link
                    key={index}
                    to={link.path}
                    className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                      matchRoute(link.path)
                        ? "bg-white/5 text-orange-500"
                        : "text-richblack-25 hover:bg-white/5 hover:text-orange-400"
                    }`}
                  >
                    {link.title}
                  </Link>
                )
              })}

              <div className="mt-auto space-y-2 border-t border-white/10 pt-4">
                {user &&
                  user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                    <Link
                      to="/dashboard/cart"
                      className="flex items-center gap-2 rounded-lg px-3 py-3 text-richblack-25 hover:bg-white/5"
                    >
                      <AiOutlineShoppingCart className="text-xl" />
                      Cart
                      {totalItems > 0 && (
                        <span className="ml-auto rounded-full bg-orange-500 px-2 py-0.5 text-xs font-bold text-richblack-900">
                          {totalItems}
                        </span>
                      )}
                    </Link>
                  )}
                {token === null && (
                  <>
                    <Link
                      to="/login"
                      className="block rounded-lg border border-richblack-500 py-2.5 text-center text-sm font-semibold text-richblack-5"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/signup"
                      className="block rounded-lg bg-orange-500 py-2.5 text-center text-sm font-semibold text-richblack-900 hover:bg-orange-600"
                    >
                      Sign up
                    </Link>
                  </>
                )}
                {token !== null && user && (
                  <>
                    <Link
                      to="/dashboard/my-profile"
                      className="mt-2 block rounded-lg px-3 py-3 text-base font-medium text-richblack-25 transition-colors hover:bg-white/5 hover:text-orange-400"
                    >
                      Dashboard
                    </Link>
                    <button
                      type="button"
                      className="w-full rounded-lg px-3 py-3 text-left text-base font-medium text-richblack-25 transition-colors hover:bg-white/5 hover:text-orange-400"
                      onClick={() => {
                        dispatch(logout(navigate))
                        setMobileOpen(false)
                      }}
                    >
                      Log out
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
