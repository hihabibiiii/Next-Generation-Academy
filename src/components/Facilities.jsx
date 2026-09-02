import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { facilities } from "../data/content";
import { fadeUp, staggerContainer, viewport } from "../motion";

export default function Facilities() {
  return (
    <section className="section facilities-section" id="facilities">
      <div className="container">
        <motion.div className="section-head" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.span className="eyebrow" variants={fadeUp}>Campus Facilities</motion.span>
          <motion.h2 variants={fadeUp}>Facilities That Support Better Learning</motion.h2>
          <motion.p variants={fadeUp}>Modern learning spaces designed for practical training, focused study, and student support.</motion.p>
        </motion.div>
        <motion.div className="facility-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {facilities.map(({ icon: Icon, title, text, image }) => (
            <motion.article className="facility-card" key={title} variants={fadeUp}>
              <img src={image} alt={`${title} at Next Generation Academy`} loading="lazy" width="420" height="280" />
              <div className="facility-content">
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <ArrowUpRight className="facility-arrow" size={24} />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
