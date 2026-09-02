import { motion } from "framer-motion";
import { Award, Eye, Target } from "lucide-react";
import { stats } from "../data/content";
import { fadeUp, slideLeft, slideRight, staggerContainer, viewport } from "../motion";
import Counter from "./Counter";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container split">
        <motion.div className="about-visual" variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport} transition={{ duration: 0.65 }}>
          <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=80" alt="Students learning in a modern classroom at a training institute" loading="lazy" width="1000" height="667" />
          <div className="layer-card"><Award size={22} /><span>Certified Training</span></div>
        </motion.div>

        <motion.div className="about-copy" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.span className="eyebrow" variants={fadeUp}>About Our Institute</motion.span>
          <motion.h2 variants={fadeUp}>Building Skills. Creating Futures.</motion.h2>
          <motion.p variants={fadeUp}>
            Next Generation Academy helps students build strong foundations through guided classroom learning, hands-on lab practice, and career mentorship. Our training model is structured, friendly, and focused on confidence.
          </motion.p>
          <motion.div className="mission-cards" variants={slideLeft}>
            <article><Target size={22} /><h3>Mission</h3><p>Make professional skills accessible through practical and mentor-led education.</p></article>
            <article><Eye size={22} /><h3>Vision</h3><p>Become a trusted institute for job-ready digital and technical training.</p></article>
          </motion.div>
          <motion.div className="stats-grid" variants={fadeUp}>
            {stats.map((item) => (
              <div key={item.label}>
                <Counter value={item.value} suffix={item.suffix} />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
