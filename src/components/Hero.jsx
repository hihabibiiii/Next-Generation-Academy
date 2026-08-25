import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { heroSlides } from "../data/content";
import { fadeUp, staggerContainer } from "../motion";

export default function Hero({ onEnroll }) {
  const [active, setActive] = useState(0);
  const startX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const changeSlide = (next) => {
    setActive((next + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[active];

  return (
    <section
      className="hero"
      id="home"
      onTouchStart={(event) => {
        startX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        const delta = event.changedTouches[0].clientX - startX.current;
        if (Math.abs(delta) > 48) changeSlide(delta > 0 ? active - 1 : active + 1);
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={slide.image}
          className="hero-bg"
          src={slide.image}
          alt=""
          loading={active === 0 ? "eager" : "lazy"}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
        />
      </AnimatePresence>
      <div className="hero-overlay" />

      <div className="container hero-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            className="hero-copy"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
          >
            <motion.span className="eyebrow light" variants={fadeUp}>{slide.eyebrow}</motion.span>
            <motion.h1 variants={fadeUp}>{slide.title}</motion.h1>
            <motion.p variants={fadeUp}>{slide.text}</motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <a className="btn btn-accent" href="#courses">Explore Courses <ArrowRight size={18} /></a>
              <button className="btn btn-ghost" type="button" onClick={onEnroll}>Enroll Now</button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

      </div>

      <div className="hero-controls">
        <button type="button" aria-label="Previous slide" onClick={() => changeSlide(active - 1)}><ArrowLeft size={18} /></button>
        <div className="hero-dots">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={index === active ? "active" : ""}
              onClick={() => changeSlide(index)}
            />
          ))}
        </div>
        <button type="button" aria-label="Next slide" onClick={() => changeSlide(active + 1)}><ArrowRight size={18} /></button>
      </div>

      <a className="scroll-cue" href="#courses" aria-label="Scroll to courses">
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={18} />
        </motion.span>
        Scroll
      </a>
    </section>
  );
}
