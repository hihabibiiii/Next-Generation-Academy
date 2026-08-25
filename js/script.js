const institute = {
  name: "NGA Academy",
  phone: "+91 9839848517",
  email: "admissions@ngaacademy.example"
};

const heroSlides = [
  {
    title: "Build Your Future With Us",
    text: "Quality Education | Practical Training | Career Guidance",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=80"
  },
  {
    title: "Learn Skills Employers Value",
    text: "Hands-on projects, mentor feedback, and certification support.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=80"
  },
  {
    title: "Modern Labs. Focused Mentors.",
    text: "Train in a professional learning environment built for growth.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80"
  }
];

const courses = [
  {
    id: 1,
    name: "Computer Science",
    duration: "12 Months",
    fees: "Rs. 30,000",
    eligibility: "10th Pass",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    description: "A foundation program covering computer fundamentals, office tools, programming basics, and digital productivity.",
    highlights: ["Computer fundamentals", "MS Office and internet skills", "Programming basics", "Practical assignments"],
    learning: ["Operate computers confidently", "Understand basic coding logic", "Prepare documents and presentations", "Use digital tools professionally"],
    careers: ["Computer operator", "Office assistant", "Junior IT assistant"]
  },
  {
    id: 2,
    name: "Web Development",
    duration: "4 Months",
    fees: "Rs. 18,000",
    eligibility: "10th Pass",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    description: "Build responsive websites using HTML5, CSS3, JavaScript, forms, layouts, and deployment basics.",
    highlights: ["HTML5 and CSS3", "Responsive design", "Vanilla JavaScript", "Website publishing"],
    learning: ["Create modern web pages", "Build interactive interfaces", "Optimize pages for mobile", "Launch portfolio projects"],
    careers: ["Web designer", "Frontend trainee", "Freelance website developer"]
  },
  {
    id: 3,
    name: "Python Programming",
    duration: "3 Months",
    fees: "Rs. 15,000",
    eligibility: "12th Pass",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80",
    description: "Learn Python from fundamentals to practical scripts, automation, data handling, and mini projects.",
    highlights: ["Core Python", "File handling", "Automation scripts", "Mini projects"],
    learning: ["Write clean Python code", "Solve logic problems", "Work with files and data", "Build useful scripts"],
    careers: ["Python trainee", "Automation assistant", "Junior developer"]
  },
  {
    id: 4,
    name: "Data Science",
    duration: "6 Months",
    fees: "Rs. 32,000",
    eligibility: "12th Pass with basic math",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    description: "A practical introduction to data analysis, visualization, Python libraries, statistics, and project workflows.",
    highlights: ["Python for data", "Pandas and NumPy", "Charts and dashboards", "Capstone project"],
    learning: ["Clean and analyze data", "Create visual reports", "Understand basic statistics", "Present business insights"],
    careers: ["Data analyst trainee", "MIS executive", "Reporting assistant"]
  },
  {
    id: 5,
    name: "Full Stack Development",
    duration: "6 Months",
    fees: "Rs. 25,000",
    eligibility: "12th Pass",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    description: "Complete frontend and backend development course with database concepts and full project practice.",
    highlights: ["HTML, CSS and JavaScript", "React basics", "Node.js and Express", "MongoDB fundamentals"],
    learning: ["Build full web apps", "Connect frontend to backend", "Create APIs", "Deploy project-ready work"],
    careers: ["Full stack trainee", "Frontend developer", "Backend intern"]
  },
  {
    id: 6,
    name: "Graphic Designing",
    duration: "4 Months",
    fees: "Rs. 20,000",
    eligibility: "10th Pass",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=900&q=80",
    description: "Learn brand design, social media creatives, print layouts, typography, and portfolio presentation.",
    highlights: ["Design principles", "Photoshop workflow", "Illustrator basics", "Portfolio projects"],
    learning: ["Create professional graphics", "Design social media posts", "Prepare print artwork", "Build a design portfolio"],
    careers: ["Graphic designer", "Creative assistant", "Freelance designer"]
  },
  {
    id: 7,
    name: "Tally & Accounting",
    duration: "3 Months",
    fees: "Rs. 12,000",
    eligibility: "10th Pass",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    description: "Practical accounting course covering Tally, GST basics, billing, ledger entries, and business reports.",
    highlights: ["Accounting basics", "Tally Prime", "GST entries", "Reports and invoices"],
    learning: ["Maintain business accounts", "Create bills and vouchers", "Understand GST entries", "Generate reports"],
    careers: ["Accounts assistant", "Billing executive", "Tally operator"]
  },
  {
    id: 8,
    name: "Digital Marketing",
    duration: "4 Months",
    fees: "Rs. 18,000",
    eligibility: "12th Pass",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    description: "Learn social media, SEO, ads basics, content strategy, analytics, and campaign planning.",
    highlights: ["SEO fundamentals", "Social media marketing", "Ad campaign basics", "Analytics reports"],
    learning: ["Plan campaigns", "Improve online visibility", "Create content calendars", "Read marketing metrics"],
    careers: ["Digital marketing trainee", "Social media executive", "SEO assistant"]
  }
];

const features = [
  ["FT", "Experienced Faculty", "Learn from trainers who explain clearly and guide every student with practical examples."],
  ["PT", "Practical Training", "Every course includes assignments, lab work, and projects that build real confidence."],
  ["LB", "Modern Computer Lab", "Practice in a clean, well-equipped computer lab with updated tools and software."],
  ["CG", "Career Guidance", "Get support for resumes, interview preparation, and choosing the right learning path."],
  ["CR", "Certification", "Receive course completion certificates that help strengthen your student profile."],
  ["PA", "Placement Assistance", "Access job alerts, interview support, and employer-facing project preparation."]
];

const facilities = [
  ["Computer Lab", "High-performance systems for daily practice.", "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80"],
  ["Smart Classroom", "Interactive teaching spaces for focused sessions.", "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"],
  ["Library", "Reference books and quiet study support.", "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80"],
  ["Practical Training", "Project-led exercises for applied learning.", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"],
  ["Seminar Hall", "Sessions for workshops and career talks.", "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80"],
  ["Student Support", "Friendly help for doubts, forms, and progress.", "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"]
];

const testimonials = [
  {
    name: "Ayesha Khan",
    course: "Web Development",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    review: "The practical training and faculty support helped me improve my technical skills significantly."
  },
  {
    name: "Rahul Sharma",
    course: "Python Programming",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    review: "I joined with basic knowledge and completed the course with real projects I could show in interviews."
  },
  {
    name: "Priya Mehta",
    course: "Tally & Accounting",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    review: "The accounting practice sessions were clear, useful, and connected to real office work."
  }
];

let activeSlide = 0;
let slideTimer;
let activeTestimonial = 0;
let testimonialTimer;

const select = (selector, scope = document) => scope.querySelector(selector);
const selectAll = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function initNavigation() {
  const toggle = select(".menu-toggle");
  const links = selectAll(".nav-link");

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = links
    .map((link) => select(link.getAttribute("href")))
    .filter(Boolean);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 });

  sections.forEach((section) => navObserver.observe(section));
}

function initHeroSlider() {
  const slideWrap = select("#heroSlides");
  const dotsWrap = select("#heroDots");

  slideWrap.innerHTML = heroSlides.map((slide, index) => `
    <article class="slide ${index === 0 ? "active" : ""}">
      <img src="${slide.image}" alt="${slide.title}">
      <div class="slide-content">
        <h2>${slide.title}</h2>
        <p>${slide.text}</p>
        <div class="hero-actions">
          <a class="btn btn-accent" href="#courses">Explore Courses</a>
          <button class="btn btn-light open-enroll" type="button">Enroll Now</button>
        </div>
      </div>
    </article>
  `).join("");

  dotsWrap.innerHTML = heroSlides.map((_, index) => `
    <button type="button" class="${index === 0 ? "active" : ""}" aria-label="Go to slide ${index + 1}"></button>
  `).join("");

  const goToSlide = (index) => {
    activeSlide = (index + heroSlides.length) % heroSlides.length;
    selectAll(".slide", slideWrap).forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === activeSlide);
    });
    selectAll("button", dotsWrap).forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === activeSlide);
    });
  };

  const restart = () => {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => goToSlide(activeSlide + 1), 5500);
  };

  select(".slider-btn.prev").addEventListener("click", () => {
    goToSlide(activeSlide - 1);
    restart();
  });
  select(".slider-btn.next").addEventListener("click", () => {
    goToSlide(activeSlide + 1);
    restart();
  });
  selectAll("button", dotsWrap).forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      restart();
    });
  });

  let startX = 0;
  slideWrap.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
  }, { passive: true });
  slideWrap.addEventListener("touchend", (event) => {
    const delta = event.changedTouches[0].clientX - startX;
    if (Math.abs(delta) < 45) return;
    goToSlide(delta > 0 ? activeSlide - 1 : activeSlide + 1);
    restart();
  });

  restart();
}

function renderCourses() {
  select("#courseRail").innerHTML = courses.map((course) => `
    <article class="course-card reveal">
      <img src="${course.image}" alt="${course.name} course">
      <div class="course-content">
        <h3>${course.name}</h3>
        <p>${course.description}</p>
        <div class="meta-row">
          <span>${course.duration}</span>
          <span>${course.fees}</span>
        </div>
        <button class="btn btn-primary view-course" type="button" data-course-id="${course.id}">View Details</button>
      </div>
    </article>
  `).join("");

  select("#enrollCourse").innerHTML = `<option value="">Choose a course</option>` + courses
    .map((course) => `<option value="${course.name}">${course.name}</option>`)
    .join("");
}

function renderFeatures() {
  select("#featureGrid").innerHTML = features.map(([icon, title, text]) => `
    <article class="feature-card reveal">
      <span class="feature-icon">${icon}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
}

function renderFacilities() {
  select("#facilityGrid").innerHTML = facilities.map(([title, text, image]) => `
    <article class="facility-card reveal">
      <img src="${image}" alt="${title}">
      <div>
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
    </article>
  `).join("");
}

function openModal(modal) {
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function initModals() {
  const courseModal = select("#courseModal");
  const enrollModal = select("#enrollModal");

  document.addEventListener("click", (event) => {
    const courseButton = event.target.closest(".view-course");
    const enrollButton = event.target.closest(".open-enroll");
    const closeButton = event.target.closest(".modal-close, .modal-cancel");
    const modalBackdrop = event.target.classList.contains("modal") ? event.target : null;

    if (courseButton) {
      showCourseDetails(Number(courseButton.dataset.courseId));
    }

    if (enrollButton) {
      const courseName = enrollButton.dataset.course || "";
      select("#enrollCourse").value = courseName;
      selectAll(".modal.active").forEach((modal) => closeModal(modal));
      openModal(enrollModal);
    }

    if (closeButton) {
      closeModal(closeButton.closest(".modal"));
    }

    if (modalBackdrop) {
      closeModal(modalBackdrop);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    [courseModal, enrollModal].forEach((modal) => {
      if (modal.classList.contains("active")) closeModal(modal);
    });
  });
}

function showCourseDetails(courseId) {
  const course = courses.find((item) => item.id === courseId);
  if (!course) return;

  select("#courseModalContent").innerHTML = `
    <div class="course-detail">
      <img src="${course.image}" alt="${course.name}">
      <div>
        <h2 id="courseModalTitle">${course.name}</h2>
        <p>${course.description}</p>
        <div class="meta-row">
          <span>Duration: ${course.duration}</span>
          <span>Fees: ${course.fees}</span>
        </div>
        <p><strong>Eligibility:</strong> ${course.eligibility}</p>
        <h3>Course Highlights</h3>
        <ul class="detail-list">${course.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
        <h3>What Students Will Learn</h3>
        <ul class="detail-list">${course.learning.map((item) => `<li>${item}</li>`).join("")}</ul>
        <h3>Career Opportunities</h3>
        <ul class="detail-list">${course.careers.map((item) => `<li>${item}</li>`).join("")}</ul>
        <button class="btn btn-accent open-enroll" type="button" data-course="${course.name}">Enroll Now</button>
      </div>
    </div>
  `;

  openModal(select("#courseModal"));
}

function initForms() {
  initForm(select("#contactForm"), "Your message has been sent successfully.", "ngaContactMessages");
  initForm(select("#enrollForm"), "Your enrollment request has been submitted successfully.", "ngaEnrollmentRequests");
}

function initForm(form, successText, storageKey) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = select(".form-message", form);
    const fields = [...form.elements].filter((field) => ["INPUT", "SELECT", "TEXTAREA"].includes(field.tagName));
    let isValid = true;

    fields.forEach((field) => {
      const valid = field.checkValidity();
      field.classList.toggle("invalid", !valid);
      if (!valid) isValid = false;
    });

    if (!isValid) {
      message.textContent = "Please complete all required fields correctly.";
      message.className = "form-message error";
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    const previous = JSON.parse(localStorage.getItem(storageKey) || "[]");
    previous.push({ ...data, submittedAt: new Date().toISOString(), institute: institute.name });
    localStorage.setItem(storageKey, JSON.stringify(previous));

    form.reset();
    message.textContent = successText;
    message.className = "form-message success";
  });
}

function initCounters() {
  const stats = select("#stats");
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    if (started || !entries[0].isIntersecting) return;
    started = true;

    selectAll("[data-count]", stats).forEach((counter) => {
      const target = Number(counter.dataset.count);
      const suffix = target === 90 ? "%+" : "+";
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        counter.textContent = `${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    });
  }, { threshold: 0.35 });

  observer.observe(stats);
}

function initRevealAnimations() {
  selectAll(".section-observe, .reveal").forEach((item) => item.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  selectAll(".reveal").forEach((item) => observer.observe(item));
}

function renderTestimonial() {
  const testimonial = testimonials[activeTestimonial];
  select("#testimonialCard").innerHTML = `
    <div class="testimonial-head">
      <img src="${testimonial.photo}" alt="${testimonial.name}">
      <div>
        <strong>${testimonial.name}</strong>
        <p>${testimonial.course}</p>
        <div class="stars" aria-label="5 star rating">*****</div>
      </div>
    </div>
    <blockquote>"${testimonial.review}"</blockquote>
    <div class="testimonial-controls">
      <button type="button" class="testimonial-prev" aria-label="Previous testimonial">&#10094;</button>
      <button type="button" class="testimonial-next" aria-label="Next testimonial">&#10095;</button>
    </div>
  `;
}

function initTestimonials() {
  const goToTestimonial = (index) => {
    activeTestimonial = (index + testimonials.length) % testimonials.length;
    renderTestimonial();
  };

  select("#testimonialCard").addEventListener("click", (event) => {
    if (event.target.closest(".testimonial-prev")) goToTestimonial(activeTestimonial - 1);
    if (event.target.closest(".testimonial-next")) goToTestimonial(activeTestimonial + 1);
    restartTestimonials();
  });

  const restartTestimonials = () => {
    clearInterval(testimonialTimer);
    testimonialTimer = setInterval(() => goToTestimonial(activeTestimonial + 1), 6000);
  };

  renderTestimonial();
  restartTestimonials();
}

function init() {
  renderCourses();
  renderFeatures();
  renderFacilities();
  initNavigation();
  initHeroSlider();
  initModals();
  initForms();
  initCounters();
  initTestimonials();
  initRevealAnimations();
}

document.addEventListener("DOMContentLoaded", init);
