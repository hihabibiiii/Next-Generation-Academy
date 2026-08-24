import { motion } from "framer-motion";
import { features } from "../data/content";
import { fadeUp, staggerContainer, viewport } from "../motion";

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container">
        <motion.div className="section-head centered" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.span className="eyebrow" variants={fadeUp}>Why Choose Us</motion.span>
          <motion.h2 variants={fadeUp}>Why Choose Our Institute?</motion.h2>
          <motion.p variants={fadeUp}>A focused learning environment built around support, practice, and professional outcomes.</motion.p>
        </motion.div>
        <motion.div className="feature-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {features.map(({ icon: Icon, title, text }) => (
            <motion.article className="feature-card" key={title} variants={fadeUp} whileHover={{ y: -8 }}>
              <span><Icon size={26} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
