export interface Barangay {
  id: string;
  name: string;
  type: 'coastal' | 'inland' | 'island' | 'poblacion';
  distanceKm: number;
  captain?: string;
  features: string[];
  contact?: string;
}

// Exact official 50 Barangays of Inabanga, Bohol per Philippine Statistics Authority (PSA) & COMELEC
export const inabangaBarangays: Barangay[] = [
  { id: 'anonang', name: 'Anonang', type: 'inland', distanceKm: 5.2, contact: '(038) 510-8164', features: ['Rice fields', 'Community Chapel', 'Agricultural Hub'] },
  { id: 'badiang', name: 'Badiang', type: 'inland', distanceKm: 6.0, contact: '(038) 510-8164', features: ['Agri-farming', 'Coconut groves'] },
  { id: 'baguhan', name: 'Baguhan', type: 'inland', distanceKm: 4.5, contact: '(038) 510-8164', features: ['Upland farming', 'Fruit orchards'] },
  { id: 'bahan', name: 'Bahan', type: 'inland', distanceKm: 7.1, contact: '(038) 510-8164', features: ['Timberlands', 'Root crops production'] },
  { id: 'banahao', name: 'Banahao', type: 'inland', distanceKm: 5.8, contact: '(038) 510-8164', features: ['Weaving artisans', 'Cassava farming'] },
  { id: 'baogo', name: 'Baogo', type: 'inland', distanceKm: 8.3, contact: '(038) 510-8164', features: ['Scenic rolling hills', 'Cattle raising'] },
  { id: 'bugang', name: 'Bugang', type: 'coastal', distanceKm: 3.2, contact: '(038) 510-8164', features: ['Mangrove protection area', 'Coastal fisheries'] },
  { id: 'cagawasan', name: 'Cagawasan', type: 'inland', distanceKm: 9.0, contact: '(038) 510-8164', features: ['River tributary', 'Freshwater fishing'] },
  { id: 'cagayan', name: 'Cagayan', type: 'inland', distanceKm: 7.5, contact: '(038) 510-8164', features: ['Traditional weaving community', 'Loom craft'] },
  { id: 'cambito-on', name: 'Cambito-on', type: 'inland', distanceKm: 6.4, contact: '(038) 510-8164', features: ['Banana plantations', 'Farm to market trails'] },
  { id: 'canlinte', name: 'Canlinte', type: 'inland', distanceKm: 8.7, contact: '(038) 510-8164', features: ['Spring water source', 'Lush woodlands'] },
  { id: 'cawayan', name: 'Cawayan', type: 'inland', distanceKm: 4.0, contact: '(038) 510-8164', features: ['Bamboo groves', 'Handicraft weaving'] },
  { id: 'cogon', name: 'Cogon', type: 'inland', distanceKm: 3.5, contact: '(038) 510-8164', features: ['Residential & trading', 'Elementary school'] },
  { id: 'cuaming', name: 'Cuaming', type: 'island', distanceKm: 14.5, contact: '(038) 510-8164', features: ['Island community', 'Marine sanctuary', 'Snorkeling & fishing'] },
  { id: 'dagnawan', name: 'Dagnawan', type: 'inland', distanceKm: 5.0, contact: '(038) 510-8164', features: ['Rice terraces & irrigation', 'Vegetable crops'] },
  { id: 'dagohoy', name: 'Dagohoy', type: 'inland', distanceKm: 8.0, contact: '(038) 510-8164', features: ['Historical ties to Dagohoy rebellion', 'Forest reserves'] },
  { id: 'dait-sur', name: 'Dait Sur', type: 'inland', distanceKm: 6.8, contact: '(038) 510-8164', features: ['Upland farms', 'Corn cultivation'] },
  { id: 'datag', name: 'Datag', type: 'inland', distanceKm: 4.2, contact: '(038) 510-8164', features: ['Rice plains', 'Cooperative drying facilities'] },
  { id: 'fatima', name: 'Fatima', type: 'inland', distanceKm: 5.5, contact: '(038) 510-8164', features: ['Parish shrine', 'Poultry & livestock'] },
  { id: 'hambongan', name: 'Hambongan', type: 'island', distanceKm: 12.0, contact: '(038) 510-8164', features: ['Island sanctuary', 'Seaweed (Guso) farming'] },
  { id: 'ilaud', name: 'Ilaud (Poblacion)', type: 'poblacion', distanceKm: 0.5, contact: '(038) 510-8164', features: ['Inabanga river mouth', 'Crab & oyster aquaculture'] },
  { id: 'ilaya', name: 'Ilaya', type: 'inland', distanceKm: 3.8, contact: '(038) 510-8164', features: ['Tikog grass harvesting', 'Handmade mats'] },
  { id: 'ilihan', name: 'Ilihan', type: 'inland', distanceKm: 7.2, contact: '(038) 510-8164', features: ['Mt. Ilihan scenic viewpoint', 'Pilgrimage site'] },
  { id: 'lapacan-norte', name: 'Lapacan Norte', type: 'inland', distanceKm: 4.8, contact: '(038) 510-8164', features: ['Rice mills', 'Community health outpost'] },
  { id: 'lapacan-sur', name: 'Lapacan Sur', type: 'inland', distanceKm: 5.4, contact: '(038) 510-8164', features: ['Organic agriculture', 'Poultry farms'] },
  { id: 'lawis', name: 'Lawis', type: 'coastal', distanceKm: 2.1, contact: '(038) 510-8164', features: ['Fish landing port', 'Mangrove eco-walk'] },
  { id: 'liloan-norte', name: 'Liloan Norte', type: 'coastal', distanceKm: 3.6, contact: '(038) 510-8164', features: ['Coastal tourism', 'Artisanal bancas'] },
  { id: 'liloan-sur', name: 'Liloan Sur', type: 'coastal', distanceKm: 4.1, contact: '(038) 510-8164', features: ['Marine fisheries', 'Saltbeds'] },
  { id: 'lomboy', name: 'Lomboy', type: 'inland', distanceKm: 6.2, contact: '(038) 510-8164', features: ['Mango orchards', 'Corn fields'] },
  { id: 'lonoy-cainsican', name: 'Lonoy Cainsican', type: 'inland', distanceKm: 9.3, contact: '(038) 510-8164', features: ['Natural cold springs', 'Eco-trail'] },
  { id: 'lonoy-roma', name: 'Lonoy Roma', type: 'inland', distanceKm: 8.9, contact: '(038) 510-8164', features: ['Highland farming', 'Cassava cooperatives'] },
  { id: 'lutao', name: 'Lutao', type: 'inland', distanceKm: 5.1, contact: '(038) 510-8164', features: ['Handicraft workshops', 'Tikog processing'] },
  { id: 'luyo', name: 'Luyo', type: 'inland', distanceKm: 5.6, contact: '(038) 510-8164', features: ['Agricultural produce', 'Rural road network'] },
  { id: 'mabuhay', name: 'Mabuhay', type: 'inland', distanceKm: 6.7, contact: '(038) 510-8164', features: ['Upland farming', 'Community livelihood'] },
  { id: 'maria-rosario', name: 'Maria Rosario', type: 'inland', distanceKm: 7.3, contact: '(038) 510-8164', features: ['Chapel shrine', 'Rice farming'] },
  { id: 'nabuad', name: 'Nabuad', type: 'inland', distanceKm: 6.5, contact: '(038) 510-8164', features: ['Riverbank agriculture', 'Freshwater ecology'] },
  { id: 'napo', name: 'Napo', type: 'inland', distanceKm: 4.9, contact: '(038) 510-8164', features: ['Coconut copra drying', 'Tikog weavers'] },
  { id: 'ondol', name: 'Ondol', type: 'coastal', distanceKm: 2.8, contact: '(038) 510-8164', features: ['Bangus (Milkfish) fishponds', 'Crab culture'] },
  { id: 'poblacion', name: 'Poblacion', type: 'poblacion', distanceKm: 0.0, contact: '(038) 510-8164', features: ['Municipal Hall', 'Saint Paul Church', 'Town Plaza', 'Commercial District'] },
  { id: 'riverside', name: 'Riverside', type: 'inland', distanceKm: 1.8, contact: '(038) 510-8164', features: ['Inabanga riverfront', 'Eco-tourism boat landing'] },
  { id: 'saa', name: 'Saa', type: 'inland', distanceKm: 6.3, contact: '(038) 510-8164', features: ['Forest boundary', 'Timber & bamboo'] },
  { id: 'san-isidro', name: 'San Isidro', type: 'inland', distanceKm: 5.9, contact: '(038) 510-8164', features: ['Patron Saint Isidore fiesta', 'Corn farming'] },
  { id: 'san-jose', name: 'San Jose', type: 'inland', distanceKm: 8.1, contact: '(038) 510-8164', features: ['Eco-tourism pathway', 'Upland fruits'] },
  { id: 'santo-nino', name: 'Santo Niño', type: 'inland', distanceKm: 4.4, contact: '(038) 510-8164', features: ['Community livelihood center', 'Rice fields'] },
  { id: 'santo-rosario', name: 'Santo Rosario', type: 'inland', distanceKm: 7.0, contact: '(038) 510-8164', features: ['Spring sources', 'Vegetable growers'] },
  { id: 'sua', name: 'Sua', type: 'inland', distanceKm: 9.6, contact: '(038) 510-8164', features: ['Citrus & coffee farming', 'Highland breeze'] },
  { id: 'tambook', name: 'Tambook', type: 'inland', distanceKm: 7.4, contact: '(038) 510-8164', features: ['Livestock breeding', 'Feed mills'] },
  { id: 'tungod', name: 'Tungod', type: 'coastal', distanceKm: 3.0, contact: '(038) 510-8164', features: ['Inabanga river estuary', 'Ecotourism boat tours'] },
  { id: 'u-og', name: 'U-og', type: 'coastal', distanceKm: 2.8, contact: '(038) 510-8164', features: ['Port of U-og', 'Seaport & island-hopping jump-off', 'Mangrove conservation & fisheries'] },
  { id: 'ubujan', name: 'Ubujan', type: 'inland', distanceKm: 5.3, contact: '(038) 510-8164', features: ['Scenic river view', 'Crafts hub'] },
];
