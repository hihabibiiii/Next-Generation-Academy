import { courses, instituteInfo } from "../data/courses";

export const seoConfig = {
  siteName: instituteInfo.name,
  shortName: instituteInfo.shortName,
  siteUrl: "https://next-generation-academy.vercel.app",
  canonicalPath: "/",
  title: "Next Generation Academy | Computer, Digital Marketing & Safety Courses",
  description:
    "Join Next Generation Academy for practical computer, web development, Python, data science, Tally, digital marketing, graphic design, and safety officer training.",
  keywords: [
    "Next Generation Academy",
    "computer courses",
    "web development course",
    "Python programming course",
    "digital marketing course",
    "Tally course",
    "data science course",
    "safety officer course",
    "skill training institute",
  ],
  image: "/site-icon.jpeg",
  locale: "en_IN",
};

export const getCanonicalUrl = (path = seoConfig.canonicalPath) =>
  new URL(path, seoConfig.siteUrl).toString();

export const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: instituteInfo.name,
    alternateName: instituteInfo.shortName,
    url: seoConfig.siteUrl,
    logo: getCanonicalUrl(seoConfig.image),
    image: getCanonicalUrl(seoConfig.image),
    telephone: instituteInfo.phone,
    email: instituteInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: instituteInfo.address,
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 07:00-18:00",
    slogan: instituteInfo.tagline,
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Courses at Next Generation Academy",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: instituteInfo.name,
          sameAs: seoConfig.siteUrl,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: course.fees.replace(/[^0-9]/g, ""),
          availability: "https://schema.org/InStock",
          url: getCanonicalUrl("/#courses"),
        },
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: seoConfig.siteUrl,
      },
    ],
  },
];
