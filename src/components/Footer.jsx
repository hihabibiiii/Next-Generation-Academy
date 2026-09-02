import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { instituteInfo } from "../data/courses";
import { navLinks } from "../data/content";
import { courses } from "../data/courses";
import { fadeUp, staggerContainer, viewport } from "../motion";
import logo from "../assets/images/next-generation-academy-logo.jpeg";

export default function Footer() {
  return (
    <motion.footer className="site-footer" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
      <div className="container footer-grid">
        <motion.div variants={fadeUp}>
          <a href="#home" className="brand footer-brand">
            <span className="brand-mark logo-mark"><img src={logo} alt="" width="44" height="44" /></span>
            <span><strong>{instituteInfo.name}</strong><small>Professional Institute</small></span>
          </a>
          <p>Premium skill training institute for students, graduates, and working professionals.</p>
          <div className="socials">
            <a href="#home" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#home" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#home" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <h3>Quick Links</h3>
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </motion.div>
        <motion.div variants={fadeUp}>
          <h3>Courses</h3>
          {courses.slice(1, 6).map((course) => <a key={course.id} href="#courses" aria-label={`View ${course.title} course details`}>{course.title}</a>)}
        </motion.div>
        <motion.div variants={fadeUp}>
          <h3>Contact</h3>
          <p>{instituteInfo.address}</p>
          <p>{instituteInfo.phone}</p>
          <p>{instituteInfo.email}</p>
        </motion.div>
      </div>
      <div className="footer-bottom">© 2026 {instituteInfo.name}. All Rights Reserved.</div>
    </motion.footer>
  );
}
