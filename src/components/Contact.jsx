import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { instituteInfo } from "../data/courses";
import { fadeUp, slideLeft, slideRight, staggerContainer, viewport } from "../motion";
import { sendEnrollmentToWhatsApp } from "../utils/whatsapp";

const empty = { name: "", phone: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("");

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus("");
  };

  const submit = (event) => {
  event.preventDefault();

  const missing = Object.values(form).some((value) => !value.trim());
  const invalidEmail = form.email && !/^\S+@\S+\.\S+$/.test(form.email);

  if (missing || invalidEmail) {
    setStatus("Please complete all fields with a valid email.");
    return;
  }

  const saved = JSON.parse(
    localStorage.getItem("ngaContactMessages") || "[]"
  );

  saved.push({
    ...form,
    submittedAt: new Date().toISOString(),
  });

  localStorage.setItem(
    "ngaContactMessages",
    JSON.stringify(saved)
  );

  // Redirect to WhatsApp
  const message = `Hello Next Generation Academy,

I want to contact you.

----------------
CONTACT DETAILS
----------------

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Message:
${form.message}

Thank you.`;

  const whatsappUrl =
    `https://wa.me/917068615386?text=${encodeURIComponent(message)}`;

  window.location.href = whatsappUrl;
};

  const details = [
    { icon: MapPin, label: "Institute Address", value: instituteInfo.address },
    { icon: Phone, label: "Phone", value: instituteInfo.phone },
    { icon: Mail, label: "Email", value: instituteInfo.email },
    { icon: Clock, label: "Opening Hours", value: instituteInfo.hours },
  ];

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <motion.div className="contact-info" variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport}>
          <span className="eyebrow">Get In Touch</span>
          <h2>Visit Next Generation Academy</h2>
          <div className="contact-list">
            {details.map(({ icon: Icon, label, value }) => (
              <article key={label}>
                <Icon size={22} />
                <div><strong>{label}</strong><span>{value}</span></div>
              </article>
            ))}
          </div>
          <a
  className="map-card"
  href="https://maps.app.goo.gl/1NewyP3rXXt8jDLMA"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Open Next Generation Academy location in Google Maps"
>
  <MapPin size={34} />
  <span>
    <strong>Google Maps Location</strong>
    <small>Get Directions →</small>
  </span>
</a>
        </motion.div>

        <motion.form className="contact-form" onSubmit={submit} noValidate variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.h3 variants={fadeUp}>Send Message</motion.h3>
          {[
            ["name", "Name", "text"],
            ["phone", "Phone", "tel"],
            ["email", "Email", "email"],
          ].map(([name, label, type]) => (
            <motion.label className="float-field" key={name} variants={fadeUp}>
              <input name={name} type={type} value={form[name]} onChange={update} placeholder=" " />
              <span>{label}</span>
            </motion.label>
          ))}
          <motion.label className="float-field" variants={fadeUp}>
            <textarea name="message" value={form.message} onChange={update} rows="5" placeholder=" " />
            <span>Message</span>
          </motion.label>
          <motion.button className="btn btn-primary" type="submit" variants={fadeUp}>Send Message <Send size={17} /></motion.button>
          {status && <motion.p className={status.startsWith("Please") ? "status error" : "status success"} variants={slideLeft}>{status}</motion.p>}
        </motion.form>
      </div>
    </section>
  );
}
