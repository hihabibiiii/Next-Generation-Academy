import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { courses } from "../data/courses";

const emptyForm = {
  studentName: "",
  guardianName: "",
  mobile: "",
  email: "",
  course: "",
  qualification: "",
  address: "",
};

export default function EnrollmentModal({ open, selectedCourse, onClose }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    setForm((current) => ({ ...emptyForm, ...current, course: selectedCourse || current.course }));
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("modal-locked");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-locked");
    };
  }, [open, selectedCourse, onClose]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setErrors({});
    }
  }, [open]);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) next[key] = "Required";
    });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (form.mobile && !/^[0-9+\-\s]{8,15}$/.test(form.mobile)) next.mobile = "Enter a valid mobile number";
    return next;
  };

  const submit = (event) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    const saved = JSON.parse(localStorage.getItem("ngaEnrollmentRequests") || "[]");
    saved.push({ ...form, submittedAt: new Date().toISOString() });
    localStorage.setItem("ngaEnrollmentRequests", JSON.stringify(saved));
    setSubmitted(true);
    setForm(emptyForm);
  };

  const field = (name, label, type = "text") => (
    <label className={`float-field ${errors[name] ? "has-error" : ""}`}>
      <input name={name} type={type} value={form[name]} onChange={update} placeholder=" " />
      <span>{label}</span>
      {errors[name] && <small>{errors[name]}</small>}
    </label>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div
            className="modal-panel enroll-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enroll-title"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" type="button" aria-label="Close enrollment form" onClick={onClose}><X size={22} /></button>
            {submitted ? (
              <div className="success-state">
                <CheckCircle2 size={58} />
                <h2>Application Submitted!</h2>
                <p>Our admission team will contact you shortly.</p>
                <button className="btn btn-primary" type="button" onClick={onClose}>Done</button>
              </div>
            ) : (
              <>
                <span className="eyebrow">Admissions</span>
                <h2 id="enroll-title">Enrollment Application</h2>
                <form className="enroll-form" onSubmit={submit} noValidate>
                  {field("studentName", "Student Name")}
                  {field("guardianName", "Father's/Mother's Name")}
                  {field("mobile", "Mobile", "tel")}
                  {field("email", "Email", "email")}
                  <label className={`float-field ${errors.course ? "has-error" : ""}`}>
                    <select name="course" value={form.course} onChange={update}>
                      <option value="">Select Course</option>
                      {courses.map((course) => <option key={course.id} value={course.title}>{course.title}</option>)}
                    </select>
                    <span>Course</span>
                    {errors.course && <small>{errors.course}</small>}
                  </label>
                  {field("qualification", "Qualification")}
                  <label className={`float-field full ${errors.address ? "has-error" : ""}`}>
                    <textarea name="address" value={form.address} onChange={update} rows="4" placeholder=" " />
                    <span>Address</span>
                    {errors.address && <small>{errors.address}</small>}
                  </label>
                  <div className="modal-actions full">
                    <button className="btn btn-primary" type="submit">Submit Application</button>
                    <button className="btn btn-muted" type="button" onClick={onClose}>Cancel</button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
