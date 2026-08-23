import { reactive } from 'vue'

/**
 * The practice's copy, lifted into one reactive object.
 *
 * Everything here is prose on the public screens: the hero, the services
 * summary, the approach steps and the founders' spotlight. It lives in one
 * place for one reason: the Apotome editor kit edits a single reactive tree,
 * and the published overlay from the studio is merged onto this object at
 * boot.
 *
 * Vlog posts are deliberately NOT here: they come from Strapi, and content
 * that already has a CMS should keep exactly one place it is written.
 *
 * Components render from `content` and nothing else, so an edit published
 * through the studio reaches visitors without a deploy.
 */
export const content = reactive({
  hero: {
    eyebrow: 'Primary care & wellness · Trinidad, CO',
    titleLead: 'Guided by',
    titleAccent: 'Grace',
    titleTrail: 'Committed to wellness.',
    sub: 'Grace Mountain Health & Wellness is a modern primary care practice in Trinidad, Colorado — built on long visits, real listening, and transparent, affordable pricing for our community.',
    bookLabel: 'Book your first visit',
    teamLabel: 'Meet the team →',
    stats: [
      { value: 'Same-week', label: 'appointments', tone: 'sage' },
      { value: 'Transparent', label: 'cash pricing', tone: 'cream' },
      { value: 'Telehealth', label: 'when appropriate', tone: 'sky' },
    ],
  },

  services: {
    eyebrow: 'What we do',
    title: 'Care for the whole life — not just the visit.',
    subtitle:
      'A focused set of services delivered with depth, so you get attention instead of a hand-off.',
    items: [
      {
        title: 'Primary care for the whole family',
        description:
          'New patient visits, follow-ups, annual exams, lab review, and care coordination — delivered with continuity and time.',
        tone: 'cream',
      },
      {
        title: 'Walk-in & same-day sick visits',
        description:
          'Coughs, colds, fever, sore throat, ear pain, UTIs, and more — seen quickly, in clinic or by telehealth when appropriate.',
        tone: 'sage',
      },
      {
        title: 'Chronic disease management',
        description:
          'Diabetes, hypertension, asthma, thyroid, and more — managed with steady follow-up and shared care plans.',
        tone: 'sky',
      },
      {
        title: 'Weight & wellness',
        description:
          'Medically guided weight management, IV hydration, and wellness injections — with GLP-1 options when appropriate.',
        tone: 'terracotta',
      },
    ],
  },

  approach: {
    eyebrow: 'Our approach',
    title: 'Compassionate care, close to home.',
    subtitle:
      'Born from 24+ years in fire, EMS, and rural emergency medicine — Grace Mountain is built on the idea that rural families deserve high-quality healthcare without the runaround.',
    steps: [
      { n: '01', t: 'Listen first', d: 'Every visit starts with what matters most to you today.' },
      { n: '02', t: 'Plain language', d: 'No jargon. Clear answers and shared decisions.' },
      { n: '03', t: 'Stay close', d: 'Continuity, trust, and a team that knows your story.' },
    ],
  },

  founders: {
    eyebrow: 'Meet the founders',
    title: 'A husband-and-wife team rooted in the community.',
    subtitle:
      'Jeff and Dena Lewis founded Grace Mountain Health & Wellness with a shared vision for accessible, relationship-centered care.',
    people: [
      {
        name: 'Jeff Lewis, BSN, RN, NRP',
        role: 'Co-Founder',
        bio: "With more than 24 years of Fire and EMS experience across urban, critical care, and rural emergency medicine, Jeff brings deep operational leadership and a paramedic’s heart for patients in their most urgent moments. As a Registered Nurse, his vision is rooted in restoring trust through accessible, relationship-centered care for the families of Southern Colorado and Northern New Mexico.",
      },
      {
        name: 'Dena Lewis, DNP, AGACNP-BC, RN',
        role: 'Co-Founder & Provider',
        bio: 'A doctoral-prepared Nurse Practitioner with more than 25 years in healthcare, Dr. Lewis has cared for patients across cardiology, critical care, hospital and emergency medicine, hospice, and underserved rural communities. She believes care should be collaborative and individualized — grounded in trust, education, and whole-person wellness of body, mind, and spirit.',
      },
    ],
    ctaLabel: 'Read their full story',
  },

  vlog: {
    eyebrow: 'From the vlog',
    title: 'Honest health, in plain language.',
    allLabel: 'All posts',
  },
})
