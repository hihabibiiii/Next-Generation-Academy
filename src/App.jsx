import { useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseSection from "./components/CourseSection";
import CourseModal from "./components/CourseModal";
import EnrollmentModal from "./components/EnrollmentModal";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Facilities from "./components/Facilities";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Seo from "./seo/Seo";

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [enrollCourse, setEnrollCourse] = useState("");

  const openEnroll = (course = "") => {
    setSelectedCourse(null);
    setEnrollCourse(course);
    setEnrollOpen(true);
  };

  return (
    <>
      <Seo />
      <AnnouncementBar onEnroll={() => openEnroll()} />
      <Navbar onEnroll={() => openEnroll()} />
      <main>
        <Hero onEnroll={() => openEnroll()} />
        <CourseSection onDetails={setSelectedCourse} />
        <About />
        <WhyChooseUs />
        <Facilities />
        <Testimonials />
        <CTA onEnroll={() => openEnroll()} />
        <Contact />
      </main>
      <Footer />
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} onEnroll={openEnroll} />
      <EnrollmentModal open={enrollOpen} selectedCourse={enrollCourse} onClose={() => setEnrollOpen(false)} />
    </>
  );
}
