import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock, IndianRupee, X } from "lucide-react";
import { fadeUp, staggerContainer } from "../motion";

export default function CourseModal({ course, onClose, onEnroll }) {
  useEffect(() => {
    if (!course) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("modal-locked");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-locked");
    };
  }, [course, onClose]);

  return (
    <AnimatePresence>
      {course && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div
            className="modal-panel course-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-modal-title"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.24 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" type="button" aria-label="Close course details" onClick={onClose}><X size={22} /></button>
            <img src={course.image} alt={`${course.title} course details`} loading="lazy" width="900" height="520" />
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.span className="eyebrow" variants={fadeUp}>Course Details</motion.span>
              <motion.h2 id="course-modal-title" variants={fadeUp}>{course.title}</motion.h2>
              <motion.p variants={fadeUp}>{course.description}</motion.p>
              <motion.div className="modal-meta" variants={fadeUp}>
                <span><Clock size={18} /> Duration <strong>{course.duration}</strong></span>
                <span><IndianRupee size={18} /> Fees <strong>{course.fees}</strong></span>
                <span><Check size={18} /> Eligibility <strong>{course.eligibility}</strong></span>
              </motion.div>
              <motion.div className="modal-lists" variants={fadeUp}>
                <div>
                  <h3>What You'll Learn</h3>
                  <ul>{course.highlights.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
                </div>
                <div>
                  <h3>Career Opportunities</h3>
                  <ul>{course.career.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
                </div>
              </motion.div>
              <motion.button className="btn btn-primary" type="button" variants={fadeUp} onClick={() => onEnroll(course.title)}>
                Enroll Now
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
