export interface Hotline {
  id: string;
  name: string;
  agency: string;
  category: 'emergency' | 'health' | 'security' | 'disaster' | 'utility';
  landline?: string;
  mobile: string[];
  description: string;
  available: string;
  location?: string;
  primary?: boolean;
}

export const emergencyHotlines: Hotline[] = [
  {
    id: 'mdrrmo',
    name: 'MDRRMO Inabanga',
    agency: 'Municipal Disaster Risk Reduction & Management Office',
    category: 'disaster',
    landline: '(038) 510 8164',
    mobile: ['0917-890-6442'],
    description: '24/7 disaster response, emergency medical services, flood and typhoon rescues.',
    available: '24/7 Always Open',
    location: 'Municipal Compound, Poblacion, Inabanga, Bohol',
    primary: true,
  },
  {
    id: 'pnp',
    name: 'Inabanga Municipal Police Station',
    agency: 'Philippine National Police (PNP)',
    category: 'security',
    landline: '(038) 512 9039',
    mobile: ['0998-598-6423', '0926-202-7653'],
    description: 'Law enforcement, peace and order, public safety assistance.',
    available: '24/7 Always Open',
    location: 'Poblacion, Inabanga, Bohol',
    primary: true,
  },
  {
    id: 'bfp',
    name: 'Inabanga Fire Station',
    agency: 'Bureau of Fire Protection (BFP)',
    category: 'emergency',
    landline: '(038) 512 9038',
    mobile: ['0927-528-1232', '0955-670-1162'],
    description: 'Fire suppression, emergency rescue, fire hazard assessments.',
    available: '24/7 Always Open',
    location: 'Poblacion, Inabanga, Bohol',
    primary: true,
  },
  {
    id: 'rhu',
    name: 'Rural Health Unit (RHU)',
    agency: 'Municipal Health Office',
    category: 'health',
    landline: '(038) 512 9140',
    mobile: ['0917-300-8452'],
    description: 'Outpatient consultation, emergency first aid, maternal and child healthcare.',
    available: 'Mon-Fri 8:00 AM - 5:00 PM (Emergency 24/7)',
    location: 'Health Center Compound, Poblacion, Inabanga',
    primary: true,
  },
  {
    id: 'tarsier117',
    name: 'TaRSIER 117 Bohol',
    agency: 'Telephone and Radio System Integrated Emergency Response',
    category: 'emergency',
    landline: '117',
    mobile: ['0925-830-0117', '0949-795-5530'],
    description: 'Provincial command center for medical, trauma, and search & rescue operations.',
    available: '24/7 Provincial Hotline',
    location: 'Tagbilaran City, Bohol',
  },
  {
    id: 'nat911',
    name: 'National Emergency Hotline',
    agency: 'National Government Emergency Response',
    category: 'emergency',
    landline: '911',
    mobile: [],
    description: 'Nationwide dispatch for police, fire, medical, and disaster services.',
    available: '24/7 Nationwide',
  },
  {
    id: 'hall',
    name: "Mayor's Office / Municipal Hall",
    agency: 'LGU Inabanga Executive Office',
    category: 'utility',
    landline: '(038) 512 9035',
    mobile: ['0917-123-4567'],
    description: 'General administrative inquiries, executive assistance, public affairs.',
    available: 'Mon-Fri 8:00 AM - 5:00 PM',
    location: 'Municipal Hall, Poblacion, Inabanga, Bohol 6332',
  },
];
