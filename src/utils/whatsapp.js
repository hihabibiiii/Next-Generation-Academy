export const WHATSAPP_NUMBER = "919839848517";

const valueOrFallback = (value, fallback = "Not provided") => {
  const normalized = String(value || "").trim();
  return normalized || fallback;
};

export function createEnrollmentMessage(data) {
  return `Hello Next Generation Academy,

I want to apply for admission.

----------------
STUDENT DETAILS
----------------

Name: ${valueOrFallback(data.name)}
Father/Mother Name: ${valueOrFallback(data.parentName)}
Mobile: ${valueOrFallback(data.mobile)}
Email: ${valueOrFallback(data.email)}
Course: ${valueOrFallback(data.course)}
Qualification: ${valueOrFallback(data.qualification)}
Address: ${valueOrFallback(data.address)}

Message:
${valueOrFallback(data.message, "No additional message")}

----------------

Please provide me with the admission process, fees and batch timing.

Thank you.`;
}

export function sendEnrollmentToWhatsApp(data) {
  const message = createEnrollmentMessage(data);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.location.href = url;
}
