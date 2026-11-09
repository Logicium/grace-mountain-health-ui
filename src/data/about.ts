/**
 * The about page as data: the four values and the founders' full biographies.
 * The view renders these paragraphs and the prerender writes them into the
 * static /about page, so the founders' story is readable before the app runs.
 */

export const aboutValues = [
  { t: 'Listen first', d: 'Every visit starts with the question — what matters most to you today?' },
  { t: 'Plain language', d: 'No jargon, no patronizing. Just clear answers and shared decisions.' },
  { t: 'Local roots', d: 'Care designed for the families of Southern Colorado and Northern New Mexico.' },
  { t: 'Trust & dignity', d: 'Every patient deserves to feel heard, valued, and treated with respect.' },
]

export interface FounderBio {
  name: string
  role: string
  paragraphs: string[]
}

export const founderBios: FounderBio[] = [
  {
    name: 'Jeff Lewis, BSN, RN, NRP',
    role: 'Co-Founder',
    paragraphs: [
      'Jeff Lewis brings more than 24 years of Fire and EMS experience to Grace Mountain Health & Wellness, serving communities in urban, critical care, and rural emergency medicine settings. Throughout his career as a paramedic, Jeff cared for patients during some of life’s most difficult and urgent moments — experiences that shaped his commitment to compassionate, dependable healthcare.',
      'As a Registered Nurse and healthcare leader, Jeff understands the unique challenges facing rural communities across Southern Colorado and Northern New Mexico. His vision for Grace Mountain Health & Wellness is rooted in restoring trust in healthcare by providing accessible, relationship-centered care focused on the needs of local families. Jeff’s leadership style is built on integrity, preparedness, teamwork, and treating every patient with respect and dignity. He is passionate about building a clinic where patients feel heard, valued, and genuinely cared for close to home.',
    ],
  },
  {
    name: 'Dena Lewis, DNP, AGACNP-BC, RN',
    role: 'Co-Founder & Provider',
    paragraphs: [
      'Dr. Dena Lewis is a doctoral-prepared Nurse Practitioner with more than 25 years of healthcare experience serving patients across Colorado, New Mexico, West Virginia, and Northern Virginia. Her journey began in the Eastern Panhandle of West Virginia and the greater Washington D.C. and Baltimore metropolitan area, where she gained experience in larger hospital systems and higher-acuity environments — beginning in emergency room registration and advancing through roles as an ER technician, cardiology technician, registered nurse, and ultimately a Doctorally prepared Nurse Practitioner.',
      'After relocating to Southern Colorado in 2020, Dr. Lewis transitioned into rural healthcare and has since dedicated herself to serving patients throughout Southern Colorado and Northern New Mexico. Her diverse background across both large metropolitan systems and rural communities gives her a unique perspective on accessibility, continuity of care, and the importance of strong patient-provider relationships.',
      'For more than 11 years as a Nurse Practitioner, Dr. Lewis has cared for patients in cardiology, critical care, hospital medicine, emergency medicine, hospice, correctional healthcare, and underserved rural communities. Her clinical experience ranges from managing critically ill ICU patients and performing acute care procedures to treating chronic disease and providing preventative, wellness-focused, and relationship-centered care for individuals and families.',
      'Dr. Lewis earned her Bachelor of Science in Biology and later in Nursing before completing her Doctor of Nursing Practice degree in Adult-Gerontology Acute Care. She later completed post-doctoral Family Nurse Practitioner training through Maryville University, further expanding her background in comprehensive primary and family-centered care. She is also a member of Sigma Theta Tau International Honor Society of Nursing in recognition of her academic achievement, leadership, and commitment to excellence in nursing practice.',
      'Dr. Lewis believes healthcare should be collaborative, individualized, and grounded in trust. She works closely with each patient to develop realistic, well-rounded care plans that consider physical, emotional, spiritual, and financial well-being — empowering patients through education and identifying practical, cost-effective treatment options that align with their personal goals, values, and circumstances. Her professional interests include primary care, chronic disease management, metabolic health, weight management, lifestyle medicine, preventative care, and whole-person wellness. Guided by her Christian faith, she believes true healing involves caring for the body, mind, and spirit.',
    ],
  },
]

export const aboutClosing = {
  eyebrow: 'Rooted in the community',
  title: 'Local residents. Long-term commitment.',
  body: 'Jeff and Dena are deeply invested in the health and future of the communities they serve. Their commitment extends beyond the clinic walls — through compassionate care, trust, and long-term relationships.',
  quote: 'Rural families deserve care close to home.',
}
