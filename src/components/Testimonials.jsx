import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { testimonials } from "../data/content";
import { fadeUp, staggerContainer, viewport } from "../motion";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];
  const move = (direction) => setActive((active + direction + testimonials.length) % testimonials.length);

  return (
    <section className="section testimonials-section">
      <div className="container testimonial-layout">
        <motion.div className="section-head" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.span className="eyebrow" variants={fadeUp}>Student Stories</motion.span>
          <motion.h2 variants={fadeUp}>What Our Students Say</motion.h2>
          <motion.p variants={fadeUp}>Feedback from learners who built confidence through practical training.</motion.p>
        </motion.div>
        <div className="testimonial-shell">
          <AnimatePresence mode="wait">
            <motion.article
              className="testimonial-card"
              key={testimonial.name}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.35 }}
            >
              <div className="stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}</div>
              <blockquote>"{testimonial.review}"</blockquote>
              <div className="testimonial-person">
                <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
                <div><strong>{testimonial.name}</strong><span>{testimonial.course}</span></div>
              </div>
            </motion.article>
          </AnimatePresence>
          <div className="testimonial-controls">
            <button type="button" aria-label="Previous testimonial" onClick={() => move(-1)}><ArrowLeft size={18} /></button>
            <div className="hero-dots dark">
              {testimonials.map((item, index) => (
                <button key={item.name} className={index === active ? "active" : ""} type="button" aria-label={`Show ${item.name}`} onClick={() => setActive(index)} />
              ))}
            </div>
            <button type="button" aria-label="Next testimonial" onClick={() => move(1)}><ArrowRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
