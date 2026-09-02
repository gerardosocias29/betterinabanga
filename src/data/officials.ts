export interface Official {
  id: string;
  name: string;
  position: string;
  term: string;
  role: 'executive' | 'legislative' | 'appointed';
  committee?: string[];
  contact?: string;
  email?: string;
  image?: string;
  bio?: string;
}

export const electedOfficials: Official[] = [
  {
    id: 'mayor',
    name: 'Hon. Dexter M. Ancla',
    position: 'Municipal Mayor',
    term: '2025 – 2028',
    role: 'executive',
    contact: '(038) 512 9035',
    email: 'mayor@inabanga.gov.ph',
    bio: 'Chief Executive of the Municipality of Inabanga, leading public transparency, agricultural modernization, eco-tourism development, and infrastructure advancement.',
  },
  {
    id: 'vice-mayor',
    name: 'Hon. Hermogenes C. Cenabre, Jr.',
    position: 'Municipal Vice Mayor & Presiding Officer',
    term: '2025 – 2028',
    role: 'executive',
    contact: '(038) 512 9036',
    email: 'vicemayor@inabanga.gov.ph',
    bio: 'Presiding Officer of the Sangguniang Bayan, championing progressive local legislation, livelihood programs, and citizen participation.',
  },
  {
    id: 'sb-divinagracia',
    name: 'Hon. Fermin E. Divinagracia',
    position: 'Sangguniang Bayan Member',
    term: '2025 – 2028',
    role: 'legislative',
    committee: ['Committee on Appropriations & Budget', 'Ways & Means'],
  },
  {
    id: 'sb-abisado',
    name: 'Hon. Louie Francis E. Abisado',
    position: 'Sangguniang Bayan Member',
    term: '2025 – 2028',
    role: 'legislative',
    committee: ['Committee on Rules & Privileges', 'Good Government'],
  },
  {
    id: 'sb-celmar',
    name: 'Hon. Francis A. Celmar',
    position: 'Sangguniang Bayan Member',
    term: '2025 – 2028',
    role: 'legislative',
    committee: ['Committee on Infrastructure & Public Works', 'Transportation'],
  },
  {
    id: 'sb-petecio',
    name: 'Hon. Romil S. Petecio',
    position: 'Sangguniang Bayan Member',
    term: '2025 – 2028',
    role: 'legislative',
    committee: ['Committee on Agriculture & Fisheries', 'Environmental Protection'],
  },
  {
    id: 'sb-alesna',
    name: 'Hon. Francis Lord P. Alesna',
    position: 'Sangguniang Bayan Member',
    term: '2025 – 2028',
    role: 'legislative',
    committee: ['Committee on Health, Sanitation & Social Services'],
  },
  {
    id: 'sb-jumaoas',
    name: 'Hon. Kitty M. Jumao-as',
    position: 'Sangguniang Bayan Member',
    term: '2025 – 2028',
    role: 'legislative',
    committee: ['Committee on Women, Family, Children & Senior Citizens'],
  },
  {
    id: 'sb-fortich',
    name: 'Hon. Roel B. Fortich',
    position: 'Sangguniang Bayan Member',
    term: '2025 – 2028',
    role: 'legislative',
    committee: ['Committee on Trade, Commerce, Industry & Tourism'],
  },
  {
    id: 'sb-lamorin',
    name: 'Hon. Teodoro S. Lamorin',
    position: 'Sangguniang Bayan Member',
    term: '2025 – 2028',
    role: 'legislative',
    committee: ['Committee on Peace & Order, Public Safety & Disaster Preparedness'],
  },
];

export interface DepartmentHead {
  department: string;
  officer: string;
  designation: string;
  email: string;
  phone: string;
  mobile?: string;
  location: string;
  notes?: string;
}

export const municipalDepartments: DepartmentHead[] = [
  {
    department: 'Municipal Planning & Development Office (MPDO)',
    officer: 'Engr. Ma. Nila C. Gatab',
    designation: 'Municipal Planning & Development Coordinator (MPDC)',
    email: 'icons@inabanga.gov.ph',
    phone: '(038) 512 9088',
    location: '2nd Floor, Municipal Hall, Poblacion, Inabanga',
    notes: 'Telefax & Municipal Trunkline',
  },
  {
    department: 'Municipal Disaster Risk Reduction & Management Office (MDRRMO)',
    officer: 'MDRRMO Inabanga Operations Team',
    designation: 'MDRRM Officer & 24/7 Dispatch',
    email: 'icons@inabanga.gov.ph',
    phone: '(038) 510 8164',
    mobile: '0917-890-6442',
    location: 'MDRRMO 24/7 Operations Center, Municipal Compound',
    notes: '24/7 Emergency & Rescue Hotline',
  },
  {
    department: 'Municipal Health Office (MHO / RHU)',
    officer: 'Dr. Edar Rospan R. Ajo',
    designation: 'Municipal Health Officer (MHO)',
    email: 'icons@inabanga.gov.ph',
    phone: '(038) 512 9140',
    mobile: '0917-300-8452',
    location: 'Rural Health Unit Building, Poblacion, Inabanga',
    notes: 'Outpatient, Immunization & Primary Care',
  },
  {
    department: 'Municipal Treasury Office',
    officer: 'Anabelle A. Enriquez',
    designation: 'Municipal Treasurer',
    email: 'icons@inabanga.gov.ph',
    phone: '(038) 512 9088',
    location: 'Ground Floor, Municipal Hall, Poblacion, Inabanga',
    notes: 'Real property tax, business tax & municipal receipts',
  },
  {
    department: 'Municipal Social Welfare & Development Office (MSWDO)',
    officer: 'Emma Samaco',
    designation: 'Municipal Social Welfare & Development Officer',
    email: 'icons@inabanga.gov.ph',
    phone: '(038) 512 9088',
    location: 'Ground Floor, Municipal Hall, Poblacion, Inabanga',
    notes: 'AICS, Senior Citizens, PWD & 4Ps assistance',
  },
  {
    department: 'Municipal Civil Registrar Office (MCRO)',
    officer: 'Mai-Mai Aparicio',
    designation: 'Municipal Civil Registrar (MCR)',
    email: 'icons@inabanga.gov.ph',
    phone: '(038) 512 9088',
    location: 'Ground Floor, Municipal Hall, Poblacion, Inabanga',
    notes: 'Birth, Marriage, Death certificates & PSA endorsements',
  },
  {
    department: 'Municipal Agriculture Office (OMAg / MAO)',
    officer: 'Genaro Logroño',
    designation: 'OIC - Municipal Agriculturist',
    email: 'icons@inabanga.gov.ph',
    phone: '(038) 512 9088',
    location: 'Municipal Agriculture Complex, Inabanga',
    notes: 'Farmers seeds, fishing gear & livestock vaccinations',
  },
  {
    department: 'Municipal Assessor Office',
    officer: 'Office of the Municipal Assessor',
    designation: 'Municipal Assessor',
    email: 'icons@inabanga.gov.ph',
    phone: '(038) 512 9088',
    location: '1st Floor, Municipal Hall, Poblacion, Inabanga',
    notes: 'Tax declarations, property assessments & land transfers',
  },
  {
    department: 'Municipal Engineering Office (MEO)',
    officer: 'Office of the Municipal Engineer',
    designation: 'Municipal Engineer',
    email: 'icons@inabanga.gov.ph',
    phone: '(038) 512 9088',
    location: '2nd Floor, Municipal Hall, Poblacion, Inabanga',
    notes: 'Building permits, occupancy clearances & infrastructure',
  },
  {
    department: 'Inabanga Communications & News Service (ICoNS)',
    officer: 'ICoNS Public Information Team',
    designation: 'Public Information & Executive Media Office',
    email: 'icons@inabanga.gov.ph',
    phone: '(038) 512 9088',
    location: 'Office of the Mayor, 2nd Floor, Municipal Hall',
    notes: 'Official LGU announcements, press releases & citizen queries',
  },
];

