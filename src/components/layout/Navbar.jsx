import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Satellite,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },

  {
    label: "Newsletter",
    dropdown: [
      {
        label: "iNavix",
        description: "GNSS • RTK • Surveying Platform",
        icon: Satellite,
        href: "/newsletter.html",
        external: true,
      },
      {
        label: "iMoni",
        description: "Monitoring & IoT Platform",
        icon: BarChart3,
        href:
          "https://www.communicationstoday.co.in/iti-limited-partners-with-technotrendz-solutions-pvt-ltd/",
        external: true,
      },
    ],
  },

  {
    label: "Contact",
    href:
      "https://mail.google.com/mail/?view=cm&fs=1&to=info@technotrendz.co.in",
    external: true,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileNewsletter, setMobileNewsletter] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#07111d]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Technotrendz"
            className="h-24 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-10">

          {NAV_LINKS.map((link) =>

            link.dropdown ? (

              <div
                key={link.label}
                className="relative group"
              >

                <button className="flex items-center gap-1 group relative text-[15px] font-medium uppercase tracking-wide text-slate-300 transition duration-300 hover:text-cyan-400">

                  {link.label}

                  <ChevronDown
                    size={17}
                    className="transition duration-300 group-hover:rotate-180"
                  />

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

                </button>

                {/* Premium Dropdown */}

                <div className="absolute left-1/2 top-full mt-6 w-[360px] -translate-x-1/2 rounded-3xl border border-cyan-400/20 bg-[#07111d]/90 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,255,255,0.12)] opacity-0 invisible translate-y-5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 overflow-hidden">

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

                  <div className="relative p-4">

                    {link.dropdown.map((item) => {

                      const Icon = item.icon;

                      const content = (
                        <div className="group/item flex items-center justify-between rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-500/5 hover:shadow-lg">

                          <div className="flex items-center gap-4">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/20">

                              <Icon
                                size={26}
                                className="text-cyan-400"
                              />

                            </div>

                            <div>

                              <h3 className="text-white font-semibold text-base">

                                {item.label}

                              </h3>

                              <p className="mt-1 text-sm text-slate-400">

                                {item.description}

                              </p>

                            </div>

                          </div>

                          <ArrowRight
                            size={20}
                            className="text-cyan-400 transition-transform duration-300 group-hover/item:translate-x-1"
                          />

                        </div>
                      );

                      return item.external ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          {content}
                        </a>
                      ) : (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block"
                        >
                          {content}
                        </Link>
                      );
                    })}

                  </div>

                </div>

              </div>

            ) : link.external ? (

              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-[15px] font-medium uppercase tracking-wide text-slate-300 transition duration-300 hover:text-cyan-400"
              >

                {link.label}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

              </a>

            ) : (

              <Link
                key={link.label}
                to={link.href}
                className="group relative text-[15px] font-medium uppercase tracking-wide text-slate-300 transition duration-300 hover:text-cyan-400"
              >

                {link.label}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

              </Link>

            )

          )}

        </nav>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
            {/* Mobile Menu */}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="lg:hidden bg-[#07111d]/95 backdrop-blur-2xl border-t border-white/10"
        >
          {NAV_LINKS.map((link) =>

            link.dropdown ? (

              <div key={link.label}>

                <button
                  onClick={() =>
                    setMobileNewsletter(!mobileNewsletter)
                  }
                  className="w-full flex items-center justify-between px-8 py-5 text-slate-300 hover:bg-white/5 transition"
                >
                  <span className="uppercase tracking-wide font-medium">
                    {link.label}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition duration-300 ${
                      mobileNewsletter ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileNewsletter && (

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-5 pb-5"
                  >

                    {link.dropdown.map((item) => {

                      const Icon = item.icon;

                      const card = (

                        <div className="mb-3 flex items-center justify-between rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 transition hover:bg-cyan-500/10">

                          <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">

                              <Icon
                                size={22}
                                className="text-cyan-400"
                              />

                            </div>

                            <div>

                              <h3 className="text-white font-semibold">

                                {item.label}

                              </h3>

                              <p className="text-xs text-slate-400">

                                {item.description}

                              </p>

                            </div>

                          </div>

                          <ArrowRight
                            size={18}
                            className="text-cyan-400"
                          />

                        </div>

                      );

                      return item.external ? (

                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpen(false)}
                        >
                          {card}
                        </a>

                      ) : (

                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setOpen(false)}
                        >
                          {card}
                        </Link>

                      );

                    })}

                  </motion.div>

                )}

              </div>

            ) : (

              link.external ? (

                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-8 py-5 text-slate-300 uppercase tracking-wide hover:bg-white/5 hover:text-cyan-400 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>

              ) : (

                <Link
                  key={link.label}
                  to={link.href}
                  className="block px-8 py-5 text-slate-300 uppercase tracking-wide hover:bg-white/5 hover:text-cyan-400 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>

              )

            )

          )}
        </motion.div>
      )}

    </motion.header>
  );
}