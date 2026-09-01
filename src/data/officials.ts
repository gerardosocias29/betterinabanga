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
  location: string;
}

export const municipalDepartments: DepartmentHead[] = [
  {
    department: 'Municipal Planning & Development Office (MPDO)',
    officer: 'Engr. Planning Officer',
    designation: 'Municipal Planning and Development Coordinator',
    email: 'mpdo@inabanga.gov.ph',
    phone: '(038) 512 9031',
    location: '2nd Floor, Municipal Hall',
  },
  {
    department: 'Municipal Disaster Risk Reduction & Management Office (MDRRMO)',
    officer: 'Disaster Risk Officer',
    designation: 'MDRRM Officer',
    email: 'mdrrmo@inabanga.gov.ph',
    phone: '(038) 510 8164',
    location: 'MDRRMO Operations Center',
  },
  {
    department: 'Municipal Health Office (MHO / RHU)',
    officer: 'Dr. Municipal Health Physician',
    designation: 'Municipal Health Officer',
    email: 'health@inabanga.gov.ph',
    phone: '(038) 512 9140',
    location: 'Rural Health Unit Building',
  },
  {
    department: 'Municipal Social Welfare & Development Office (MSWDO)',
    officer: 'Social Welfare Officer',
    designation: 'MSWD Officer',
    email: 'mswdo@inabanga.gov.ph',
    phone: '(038) 512 9032',
    location: 'Ground Floor, Municipal Hall',
  },
  {
    department: 'Municipal Treasury Office',
    officer: 'Municipal Treasurer',
    designation: 'Municipal Treasurer',
    email: 'treasury@inabanga.gov.ph',
    phone: '(038) 512 9033',
    location: 'Ground Floor, Municipal Hall',
  },
  {
    department: 'Municipal Civil Registrar Office (MCRO)',
    officer: 'Civil Registrar Officer',
    designation: 'Municipal Civil Registrar',
    email: 'civilregistry@inabanga.gov.ph',
    phone: '(038) 512 9034',
    location: 'Ground Floor, Municipal Hall',
  },
  {
    department: 'Municipal Agriculture Office (MAO)',
    officer: 'Municipal Agriculturist',
    designation: 'Municipal Agriculturist',
    email: 'agriculture@inabanga.gov.ph',
    phone: '(038) 512 9037',
    location: 'Agriculture Complex, Inabanga',
  },
  {
    department: 'Municipal Assessor Office',
    officer: 'Municipal Assessor',
    designation: 'Municipal Assessor',
    email: 'assessor@inabanga.gov.ph',
    phone: '(038) 512 9028',
    location: '1st Floor, Municipal Hall',
  },
];
