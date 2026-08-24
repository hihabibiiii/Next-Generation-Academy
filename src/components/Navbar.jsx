import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { instituteInfo } from "../data/courses";
import { navLinks } from "../data/content";
import logo from "../assets/images/next-generation-academy-logo.jpeg";

export default function Navbar({ onEnroll }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-38% 0px -56% 0px", threshold: 0.01 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-locked", open);
    return () => document.body.classList.remove("menu-locked");
  }, [open]);

  const menuVariants = {
    hidden: { opacity: 0, y: -14 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } },
    exit: { opacity: 0, y: -14 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  const renderLinks = () => navLinks.map((link) => (
    <motion.a
      key={link.href}
      variants={itemVariants}
      className={active === link.href ? "active" : ""}
      href={link.href}
      onClick={() => setOpen(false)}
    >
      {link.label}
    </motion.a>
  ));

  return (
    <motion.header
      className={`site-header ${scrolled ? "scrolled" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <nav className="navbar" aria-label="Primary navigation">
        <a href="#home" className="brand" aria-label={`${instituteInfo.name} home`}>
          <span className="brand-mark logo-mark"><img src={logo} alt="" /></span>
          <span>
            <strong>{instituteInfo.name}</strong>
            <small>{instituteInfo.tagline}</small>
          </span>
        </a>

        <div className="desktop-nav">{renderLinks()}</div>

        <button className="btn btn-primary desktop-enroll" type="button" onClick={onEnroll}>
          Enroll Now
        </button>

        <button
          className="menu-btn"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" variants={menuVariants} initial="hidden" animate="visible" exit="exit">
            {renderLinks()}
            <motion.button variants={itemVariants} className="btn btn-primary" type="button" onClick={() => {
              setOpen(false);
              onEnroll();
            }}>
              Enroll Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
