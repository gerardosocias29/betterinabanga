import type { OnlineService } from './types.ts';

export const onlineServiceSlugs: string[] = [
  'issuance-of-business-permits-online-application',
  'issuance-of-online-individual-work-permit',
  'issuance-of-community-tax-certificate-cedula',
];

export const onlineServices: OnlineService[] = [
  {
    "slug": "eps",
    "name": "E-Participation System",
    "shortName": "EPS",
    "description": "Send complaints, requests, suggestions, and feedback directly to Municipal Hall.",
    "url": "https://eps.inabanga.gov.ph/",
    "category": "Feedback"
  },
  {
    "slug": "ebpls",
    "name": "E-Business Permits and Licensing System",
    "shortName": "EBPLS",
    "description": "Apply for and renew business permits and licenses online.",
    "url": "https://ebpls.inabanga.gov.ph",
    "category": "Business"
  },
  {
    "slug": "iwpis",
    "name": "Individual Work Permit Information System",
    "shortName": "IWPIS",
    "description": "Apply for and verify individual work permits issued by the city.",
    "url": "https://iwp.inabanga.gov.ph/",
    "category": "Employment"
  },
  {
    "slug": "toms",
    "name": "Cedula and PTR Application (TOMS)",
    "shortName": "TOMS",
    "description": "Apply for a community tax certificate (cedula) or professional tax receipt online.",
    "url": "https://toms.inabanga.gov.ph/login",
    "category": "Taxes"
  },
  {
    "slug": "jobs",
    "name": "Online Job Application and Referral System",
    "shortName": "Jobs",
    "description": "Search city job postings and submit applications and referrals online.",
    "url": "https://jobs.inabanga.gov.ph/",
    "category": "Employment"
  },
  {
    "slug": "fhis",
    "name": "Food Handlers Information System",
    "shortName": "FHIS",
    "description": "Registration and records for food handlers and their health certificates.",
    "url": "https://fhis.inabanga.gov.ph/",
    "category": "Health"
  },
  {
    "slug": "pmis",
    "name": "Personnel Management Information System",
    "shortName": "PMIS",
    "description": "City personnel portal for employee records and HR transactions.",
    "url": "https://mypmis.inabanga.gov.ph/",
    "category": "Government"
  },
  {
    "slug": "bac-forms",
    "name": "BAC Forms Generation System",
    "shortName": "BAC",
    "description": "Generate and manage Bids and Awards Committee forms for city procurement.",
    "url": "https://bid.inabanga.gov.ph/",
    "category": "Procurement"
  },
  {
    "slug": "sb-e-archives",
    "name": "Ordinance E-Archives",
    "shortName": "SB e-Archives",
    "description": "Search the Sangguniang Bayan archive of municipal ordinances and resolutions.",
    "url": "https://archives.inabanga.gov.ph/",
    "category": "Government"
  },
  {
    "slug": "dts",
    "name": "Document Tracking System",
    "shortName": "DTS",
    "description": "Track the status of documents filed with city offices.",
    "url": "https://www.inabanga.gov.ph/online-services/",
    "category": "Government",
    "note": "Listed on the city website without a public link yet. Confirm availability with Municipal Hall."
  }
];
