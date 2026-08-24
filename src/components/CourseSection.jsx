import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { courses } from "../data/courses";
import { staggerContainer, viewport } from "../motion";
import CourseCard from "./CourseCard";

export default function CourseSection({ onDetails }) {
  const railRef = useRef(null);

  const scrollRail = (direction) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * Math.min(420, rail.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section className="section courses-section" id="courses">
      <div className="container">
        <div className="section-head row">
          <div>
            <span className="eyebrow">Skill Programs</span>
            <h2>Explore Our Courses</h2>
            <p>Industry-focused programs designed to build real-world skills.</p>
          </div>
          <div className="rail-controls">
            <button type="button" aria-label="Scroll courses left" onClick={() => scrollRail(-1)}><ArrowLeft size={18} /></button>
            <button type="button" aria-label="Scroll courses right" onClick={() => scrollRail(1)}><ArrowRight size={18} /></button>
          </div>
        </div>

        <motion.div
          className="course-rail"
          ref={railRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} onDetails={onDetails} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
