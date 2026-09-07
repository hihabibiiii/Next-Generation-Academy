import sahilImage from "../assets/images/sahil.jpeg";
import asifImage from "../assets/images/asif.png";
import shivamImage from "../assets/images/shivam.jpeg";
import mamImage from "../assets/images/mam.jpeg";
import heroSlidesImage from "../assets/images/heroSlide1.jpg";
import heroSlidesImage2 from "../assets/images/heroSlide2.jpg";
import heroSlidesImage3 from "../assets/images/heroSlide3.jpg";
import {
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Laptop,
  Library,
  Lightbulb,
  MonitorCheck,
  Presentation,
  Users,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

export const heroSlides = [
  {
    eyebrow: "Welcome To Next Generation Academy",
    title: "Learn Today. Lead Tomorrow.",
    text: "Practical education for the careers of tomorrow.",
    image: heroSlidesImage,
  },
  {
    eyebrow: "Project Based Learning",
    title: "Train With Modern Labs And Mentors.",
    text: "Hands-on projects, expert feedback, and certification support.",
    image: heroSlidesImage2,
  },
  {
    eyebrow: "Admissions Open",
    title: "Career-Focused Courses For Ambitious Students.",
    text: "Choose from technology, design, accounting, and marketing programs.",
    image: heroSlidesImage3,
  },
];

export const features = [
  { icon: GraduationCap, title: "Experienced Faculty", text: "Learn from skilled professionals who explain concepts clearly." },
  { icon: Lightbulb, title: "Practical Training", text: "Work on real-world assignments, labs, and guided projects." },
  { icon: MonitorCheck, title: "Modern Labs", text: "Practice with updated systems, software, and digital tools." },
  { icon: BriefcaseBusiness, title: "Career Guidance", text: "Get help with resumes, interviews, and learning roadmaps." },
  { icon: Award, title: "Certification", text: "Receive professional course completion certification." },
  { icon: BadgeCheck, title: "Placement Support", text: "Access job alerts, interview support, and portfolio guidance." },
];

export const facilities = [
  { icon: Laptop, title: "Computer Lab", text: "High-performance systems for daily practice.", image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80" },
  { icon: Presentation, title: "Smart Classroom", text: "Interactive teaching spaces for focused sessions.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80" },
  { icon: Library, title: "Library", text: "Reference books and quiet study support.", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80" },
  { icon: BookOpen, title: "Practical Lab", text: "Project-led exercises for applied learning.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80" },
  { icon: Building2, title: "Seminar Hall", text: "Sessions for workshops and career talks.", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80" },
  { icon: Users, title: "Student Support", text: "Friendly help for doubts, forms, and progress.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" },
];

export const testimonials = [
  {
    name: "Sahil",
    course: "Web Development",
    review: "The practical training helped me gain confidence and real-world skills. The faculty support made every topic easier to understand.",
    image: sahilImage,
  },
  {
    name: "Asif",
    course: "Python Programming",
    review: "I joined with basic knowledge and completed the course with practical projects I could confidently show in interviews.",
    image: asifImage
  },
  {
  "name": "Aradhana",
  "course": "ADCA (Advanced Diploma in Computer Applications)",
  "review": "Teaching ADCA was a rewarding experience. Students learned MS Office, internet tools, and basic programming with ease. Their confidence grew through practical projects, preparing them well for office environments.",
  "image": mamImage
},
{
  "name": "Shivam Varma",
  "course": "ADCA (Advanced Diploma in Computer Applications)",
  "review": "The ADCA course gave me practical skills in MS Office, internet tools, and basic programming. Hands-on projects boosted my confidence for office work.",
  "image": shivamImage
}

];

export const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Students" },
  { value: 20, suffix: "+", label: "Courses" },
  { value: 90, suffix: "%+", label: "Placement Assistance" },
];
