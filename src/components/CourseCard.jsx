import { motion } from "framer-motion";
import { ArrowRight, Clock, IndianRupee } from "lucide-react";
import { fadeUp } from "../motion";

export default function CourseCard({ course, onDetails }) {
  return (
    <motion.article className="course-card" variants={fadeUp} whileHover={{ y: -8 }}>
      <div className="course-image">
        <img src={course.image} alt={`${course.title} course at Next Generation Academy`} loading="lazy" width="420" height="260" />
      </div>
      <div className="course-body">
        <h3>{course.title}</h3>
        <p>{course.shortDescription}</p>
        <div className="course-meta">
          <span><Clock size={16} />{course.duration}</span>
          <span><IndianRupee size={16} />{course.fees.replace("Rs. ", "")}</span>
        </div>
        <button className="text-link" type="button" onClick={() => onDetails(course)}>
          View Details <ArrowRight size={18} />
        </button>
      </div>
    </motion.article>
  );
}
