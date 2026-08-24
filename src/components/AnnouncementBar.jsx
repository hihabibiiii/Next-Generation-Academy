import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AnnouncementBar({ onEnroll }) {
  return (
    <motion.div
      className="announcement"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <span>Admissions Open - New Batch Starting Soon</span>
      <button type="button" onClick={onEnroll}>
        Apply Now <ArrowRight size={16} />
      </button>
    </motion.div>
  );
}
