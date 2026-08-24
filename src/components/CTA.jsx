import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "../motion";

export default function CTA({ onEnroll }) {
  return (
    <section className="cta-section">
      <motion.div className="container cta-inner" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
        <motion.span className="eyebrow light" variants={fadeUp}>Ready To Begin</motion.span>
        <motion.h2 variants={fadeUp}>Ready to Build Your Future?</motion.h2>
        <motion.p variants={fadeUp}>Start learning the skills that can change your career.</motion.p>
        <motion.div className="cta-actions" variants={fadeUp}>
          <a className="btn btn-accent" href="#courses">Explore Courses <ArrowRight size={18} /></a>
          <button className="btn btn-ghost" type="button" onClick={onEnroll}>Enroll Now</button>
        </motion.div>
      </motion.div>
    </section>
  );
}
