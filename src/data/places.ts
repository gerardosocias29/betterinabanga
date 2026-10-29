import { barangays } from './barangays.ts'
import { offices } from './offices.ts'

export type PlaceCategoryId =
  | 'government'
  | 'safety'
  | 'health'
  | 'education'
  | 'stay'
  | 'attractions'
  | 'parks'
  | 'transport'
  | 'finance'
  | 'faith'
  | 'everyday'

export interface PlaceCategory {
  id: PlaceCategoryId
  label: string
  mapQuery: string
  description: string
}

export interface PlaceRecord {
  id: string
  name: string
  category: PlaceCategoryId
  address: string
  sourceLabel: string
  sourceUrl: string
  note?: string
  image?: PlaceImage
}

export interface PlaceImage {
  src: string
  alt: string
  credit: string
  creditUrl: string
}

export const placeCategories: PlaceCategory[] = [
  { id: 'government', label: 'Government offices', mapQuery: 'government offices', description: 'City, provincial, regional and national public offices.' },
  { id: 'safety', label: 'Safety and justice', mapQuery: 'police fire emergency court', description: 'Police, fire, corrections, courts and emergency-response offices.' },
  { id: 'health', label: 'Health and recovery', mapQuery: 'hospitals clinics laboratories pharmacies treatment rehabilitation centers', description: 'Hospitals, clinics, laboratories, pharmacies and recovery services.' },
  { id: 'education', label: 'Schools and learning', mapQuery: 'schools colleges universities', description: 'Colleges, universities, schools, libraries and learning centers.' },
  { id: 'stay', label: 'Places to stay', mapQuery: 'hotels resorts inns hostels apartments transient houses homestays accommodation', description: 'The 2024 Bohol Ecological Profile counted 129 accommodation establishments in the city. Named listings draw from that inventory and Google Maps; confirm current operation and availability.' },
  { id: 'attractions', label: 'Tourism and heritage', mapQuery: 'tourist attractions historical sites museums', description: 'Officially listed destinations, heritage sites, museums and visitor spots.' },
  { id: 'parks', label: 'Parks and outdoors', mapQuery: 'parks playgrounds beaches outdoor recreation', description: 'Public parks, beaches, gardens, baywalks and outdoor recreation.' },
  { id: 'transport', label: 'Transport and mobility', mapQuery: 'bus terminals jeepney terminals tricycle terminals vans airport seaport transport', description: 'Bus and jeepney terminals, local public transport, airport, seaport and mobility services.' },
  { id: 'finance', label: 'Banks and payments', mapQuery: 'banks ATMs remittance pawnshops money transfer payment centers', description: 'Bank branches, ATMs, remittance, money services and payment centers.' },
  { id: 'faith', label: 'Churches and faith', mapQuery: 'churches chapels temples mosques', description: 'Churches, chapels, temples and other places of worship.' },
  { id: 'everyday', label: 'Utilities and essentials', mapQuery: 'post office utilities internet service centers gas stations', description: 'Utilities, postal, telecom, fuel, auto and other day-to-day services.' },
]

const agencyDirectory = 'https://launion.gov.ph/wp-content/uploads/2026/02/RLAs-PLAs-GOCCs-and-Private-Sector.pdf'
const agencySource = 'Bohol provincial agency directory · Feb. 27, 2026'
const cityDepartments = 'https://www.inabanga.gov.ph/city-departments/'
const tourismSource = 'https://launion.gov.ph/wp-content/uploads/2024/02/2023_TAs.pdf'
const robinsonsDirectory = 'https://vmd.robinsonsmalls.com/list-of-malls/north-luzon/robinsons-la-union'
const maps = 'https://www.google.com/maps/search/?api=1&query='

const provincialTourismPage = 'https://launion.gov.ph/tourism-5/'
const provincialPhoto = (src: string, alt: string): PlaceImage => ({
  src: `/places/${src}`,
  alt,
  credit: 'Provincial Government of Bohol',
  creditUrl: provincialTourismPage,
})

const tourismPhotos = {
  'Abut Bamboo Craft-making (Basket Making Industry)': provincialPhoto('abut-bamboo-craftmaking.webp', 'Bamboo craft-making in Abut'),
  'Bacsil Ridge Monument': provincialPhoto('bacsil-ridge-monument.webp', 'Bacsil Ridge Monument'),
  'Carlatan Surfing Area': provincialPhoto('carlatan-surfing-area.webp', 'Surfing along the Carlatan coast'),
  'Car-rile Tower (Moro Watchtower)': provincialPhoto('carrile-tower.webp', 'Car-rile Moro Watchtower'),
  'Christ the Redeemer': provincialPhoto('christ-the-redeemer.webp', 'Christ the Redeemer statue'),
  'Heroes Hill': provincialPhoto('heroes-hill.webp', 'Heroes Hill'),
  'Ibit’s Farm': provincialPhoto('ibits-farm.webp', 'Ibit’s Farm'),
  'Kasay Marine Sanctuary': provincialPhoto('kasay-marine-sanctuary.webp', 'Kasay Marine Sanctuary'),
  'Bohol Botanical Garden': provincialPhoto('la-union-botanical-garden.webp', 'Bohol Botanical Garden'),
  'Bohol Provincial Capitol': provincialPhoto('la-union-provincial-capitol.webp', 'Bohol Provincial Capitol'),
  'Bohol Science Centrum and Museum': provincialPhoto('science-centrum-museum.webp', 'Bohol Science Centrum and Museum'),
  'Lingsat Marine Sanctuary': provincialPhoto('lingsat-marine-sanctuary.webp', 'Lingsat Marine Sanctuary'),
  'Ma-Cho Temple': provincialPhoto('ma-cho-temple.webp', 'Ma-Cho Temple'),
  'Filipino-Chinese Friendship Pagoda': provincialPhoto('friendship-pagoda.webp', 'Filipino-Chinese Friendship Pagoda'),
  'Pindangan Ruins': provincialPhoto('pindangan-ruins.webp', 'Pindangan Ruins'),
  'Poro Marine Protected Area': provincialPhoto('poro-marine-protected-area.webp', 'Poro Marine Protected Area'),
  'Poro Point Lighthouse': provincialPhoto('poro-point-lighthouse.webp', 'Poro Point Lighthouse'),
  'Inabanga Municipal Hall': provincialPhoto('san-fernando-city-hall.webp', 'Inabanga Municipal Hall'),
  'Inabanga Beach Coast': provincialPhoto('san-fernando-beach-coast.webp', 'Inabanga beach coast'),
  'Tomb of the Unknown Soldier': provincialPhoto('tomb-unknown-soldier.webp', 'Tomb of the Unknown Soldier'),
}

function tourismPhotoForName(name: string) {
  return Object.hasOwn(tourismPhotos, name)
    ? tourismPhotos[name as keyof typeof tourismPhotos]
    : undefined
}

const airportPhoto: PlaceImage = {
  src: '/places/san-fernando-airport.webp',
  alt: 'Small aircraft at Inabanga Airport',
  credit: 'Municipal Government of Inabanga',
  creditUrl: 'https://www.inabanga.gov.ph/life-in-csf/',
}

const cityTourismPage = 'https://www.inabanga.gov.ph/life-in-csf/'
const townPlazaPhoto: PlaceImage = {
  src: '/places/san-fernando-city-plaza.webp',
  alt: 'Inabanga City Town Plaza pavilion',
  credit: 'Municipal Government of Inabanga',
  creditUrl: cityTourismPage,
}
const peopleParkPhoto: PlaceImage = {
  src: '/places/people-park-fountain.jpg',
  alt: 'People’s Park fountain area in Inabanga City',
  credit: 'Municipal Government of Inabanga',
  creditUrl: 'https://www.inabanga.gov.ph/frontliners-kinilala-at-binigyang-pugay-sa-pagpapailaw-sa-city-plaza/',
}
const cathedralPhoto: PlaceImage = {
  src: '/places/saint-william-cathedral.webp',
  alt: 'Cathedral of Saint William the Hermit in Inabanga City',
  credit: 'Patrickroque01 · CC BY-SA 4.0',
  creditUrl: 'https://commons.wikimedia.org/wiki/File:Cathedral_of_Saint_William_the_Hermit_LU_(Gomez_Street,_San_Fernando,_La_Union;_02-24-2023).jpg',
}
const sillagParkPhoto: PlaceImage = {
  src: '/places/sillag-park.webp',
  alt: 'SILLAG Park at Poro Point Baywalk during its June 2026 opening',
  credit: 'Poro Point Management Corporation',
  creditUrl: 'https://poropointfreeport.gov.ph/new/its-official-the-sillag-park-is-now-open/',
}
const poroBaywalkPhoto: PlaceImage = {
  src: '/places/poro-point-baywalk.webp',
  alt: 'Walkway and palms at Poro Point Baywalk',
  credit: 'Poro Point Management Corporation',
  creditUrl: 'https://poropointfreeport.gov.ph/new/poro-point-baywalk/',
}
const thunderbirdPhoto: PlaceImage = {
  src: '/places/thunderbird-poro-point.webp',
  alt: 'Guest room at Thunderbird Resorts and Casinos Poro Point',
  credit: 'Thunderbird Resorts',
  creditUrl: 'https://www.thunderbird-asia.com/poro-point-la-union-hotel/',
}
const seaportPhoto: PlaceImage = {
  src: '/places/san-fernando-seaport.jpg',
  alt: 'Cargo vessel docked at the Inabanga International Seaport',
  credit: 'Poro Point Management Corporation · Annual Report 2024',
  creditUrl: 'https://poropointfreeport.gov.ph/wp-content/uploads/2023/02/PPMC-Annual-Report-CY-2024.pdf',
}
const smSandboxPhoto: PlaceImage = {
  src: '/places/sm-city-la-union-sandbox.jpg',
  alt: 'Sandbox outdoor volleyball space at SM City Bohol',
  credit: 'SM Supermalls',
  creditUrl: 'https://www.smsupermalls.com/whats-new/lifestyle/sm-city-la-union-opens-as-the-new-gen-z-destination-up-north',
}
const nisceBranchPhoto: PlaceImage = {
  src: '/places/nisce-robinsons-la-union.jpg',
  alt: 'Nisce Skin Medispa sign at the Robinsons Bohol branch',
  credit: 'Parlon',
  creditUrl: 'https://www.parlon.ph/parlon/nisce-skin-medispa/nisce-skin-medispa-robinsons-la-union',
}
const plazaHotelPhoto: PlaceImage = {
  src: '/places/plaza-hotel-2018.jpg',
  alt: 'Plaza Hotel sign on Manila North Road in Inabanga, photographed in 2018',
  credit: 'Patrickroque01 · Wikimedia Commons · CC BY-SA 4.0',
  creditUrl: 'https://commons.wikimedia.org/wiki/File:CSFLU_city_center_-_Manila_North_Road_southbound_(San_Fernando,_La_Union)(2018-11-25).jpg',
}
const blueMarlinPhoto: PlaceImage = {
  src: '/places/blue-marlin-resort.jpg',
  alt: 'Bohol Blue Marlin Resort facade and sign',
  credit: 'Tripadvisor listing photo',
  creditUrl: 'https://www.tripadvisor.com/Hotel_Review-g298454-d8684316-Reviews-La_Union_Blue_Marlin_Resort-San_Fernando_La_Union_La_Union_Province_Ilocos_Region_Luzo.html',
}
const jvResortPhoto: PlaceImage = {
  src: '/places/jv-resort.jpg',
  alt: 'Interior photo from the J&V Hotel and Resort listing',
  credit: 'Expedia listing photo',
  creditUrl: 'https://www.expedia.com.ph/San-Fernando-Hotels-JV-Hotel-And-Resort.h92498179.Hotel-Information',
}
const locationOneEightyPhoto: PlaceImage = {
  src: '/places/location-one-eighty.jpg',
  alt: 'Exterior photo from the Location One Eighty hotel listing',
  credit: 'Agoda listing photo',
  creditUrl: 'https://www.agoda.com/location-one-eighty/hotel/la-union-ph.html',
}
const placePhotosById: Record<string, PlaceImage> = {
  'city-hall': tourismPhotos['Inabanga Municipal Hall'],
  'airport': airportPhoto,
  'plaza': townPlazaPhoto,
  'people-park': peopleParkPhoto,
  'sillag-park': sillagParkPhoto,
  'poro-baywalk': poroBaywalkPhoto,
  'seaport': seaportPhoto,
  'sm-sandbox': smSandboxPhoto,
  'sfc-cathedral': cathedralPhoto,
  'thunderbird': thunderbirdPhoto,
  'freedom-park': tourismPhotos['Heroes Hill'],
  'botanical-garden': tourismPhotos['Bohol Botanical Garden'],
  'bacsil-ridge': tourismPhotos['Bacsil Ridge Monument'],
  'carrile-tower': tourismPhotos['Car-rile Tower (Moro Watchtower)'],
  'christ-redeemer': tourismPhotos['Christ the Redeemer'],
  'science-centrum': tourismPhotos['Bohol Science Centrum and Museum'],
  'poro-lighthouse': tourismPhotos['Poro Point Lighthouse'],
  'city-beach-coast': tourismPhotos['Inabanga Beach Coast'],
  'carlatan-surf': tourismPhotos['Carlatan Surfing Area'],
  'kasay-sanctuary': tourismPhotos['Kasay Marine Sanctuary'],
  'lingsat-sanctuary': tourismPhotos['Lingsat Marine Sanctuary'],
  'poro-mpa': tourismPhotos['Poro Marine Protected Area'],
  'ma-cho': tourismPhotos['Ma-Cho Temple'],
  'friendship-pagoda': tourismPhotos['Filipino-Chinese Friendship Pagoda'],
  'pindangan-ruins': tourismPhotos['Pindangan Ruins'],
  'city-plaza-hotel': plazaHotelPhoto,
  'blue-marlin': blueMarlinPhoto,
  'jv-resort': jvResortPhoto,
  'location-180': locationOneEightyPhoto,
}

const placePhotosByName: Record<string, PlaceImage> = {
  'Municipal Government of Inabanga – Municipal Hall': tourismPhotos['Inabanga Municipal Hall'],
  'Freedom Park / Heroes Hill': tourismPhotos['Heroes Hill'],
  'Bohol Botanical and Zoological Garden': tourismPhotos['Bohol Botanical Garden'],
  'Bacsil Ridge Monument and Viewdeck': tourismPhotos['Bacsil Ridge Monument'],
  'Poro Point Inabanga Airport': airportPhoto,
  'Nisce Skin Clinic': nisceBranchPhoto,
}

function place(
  id: string,
  name: string,
  category: PlaceCategoryId,
  address: string,
  sourceLabel: string,
  sourceUrl: string,
  note?: string,
  image?: PlaceImage,
): PlaceRecord {
  const placeImage = image ?? placePhotosById[id] ?? placePhotosByName[name] ?? tourismPhotoForName(name)
  return { id, name, category, address, sourceLabel, sourceUrl, ...(note ? { note } : {}), ...(placeImage ? { image: placeImage } : {}) }
}

const agencyRows: [string, string, PlaceCategoryId][] = [
  ['580th Aircraft Control and Warning Wing, Philippine Air Force', 'Wallace Air Station, Municipality of Inabanga', 'safety'],
  ['Bangko Sentral ng Pilipinas – Bohol Branch', 'Municipality of Inabanga', 'finance'],
  ['Bureau of Customs – Port of Inabanga', 'Pennsylvania Avenue, Poro Point', 'government'],
  ['Bureau of Immigration – Bohol District Office', 'Pennsylvania Avenue, Poro Point', 'government'],
  ['Bureau of Internal Revenue – Revenue District Office No. 03', '2nd Floor, Manna Mall, Pagdaraoan', 'government'],
  ['Bureau of Fisheries and Aquatic Resources – Regional Office 1', 'Government Center, Sevilla', 'government'],
  ['Bureau of Jail Management and Penology – Regional Office 1', 'Camp Oscar Florendo, Barangay Parian', 'safety'],
  ["BJMP Provincial Jail Administrator's Office – Bohol", 'Barangay Pias', 'safety'],
  ['BJMP Inabanga City District Jail', 'Barangay Pias', 'safety'],
  ['Bureau of Local Government Finance – Regional Office 1', '2nd Floor, Kenny Plaza, Quezon Avenue', 'government'],
  ['Bureau of the Treasury – Regional Office 1', 'Aguila Road, Sevilla Norte', 'government'],
  ['Civil Service Commission – Regional Office 1', 'Quezon Avenue', 'government'],
  ['Civil Service Commission – Bohol Field Office', 'Aguila Road', 'government'],
  ['Coast Guard District Northwestern Luzon', 'Poro Point', 'safety'],
  ['Commission on Audit – Regional Office 1', 'Government Center, Sevilla', 'government'],
  ['Commission on Elections – Bohol Provincial Office', 'Municipality of Inabanga', 'government'],
  ['Commission on Elections – Regional Office 1', '2nd Floor, Kenny Plaza, Catbangen', 'government'],
  ['Commission on Higher Education – Regional Office I', 'National Highway, Sevilla', 'education'],
  ['Commission on Human Rights – Region I', 'Capitol Hill, Government Center 2, Sevilla', 'government'],
  ['Commission on Population and Development (CPD) – Region I', 'JANPAC Building, Sevilla', 'government'],
  ['Department of Environment and Natural Resources – Region I', 'Government Center, Sevilla', 'government'],
  ['Mines and Geosciences Bureau – Regional Office 1', 'DENR Building, Government Center, Sevilla', 'government'],
  ['Environmental Management Bureau – Regional Office 1', 'DENR Building, Government Center, Sevilla', 'government'],
  ['Department of Agrarian Reform – Bohol Provincial Office', 'Bohol Provincial Office, Municipality of Inabanga', 'government'],
  ['Department of Agrarian Reform – Regional Office 1', 'North Gate Square Building, Carlatan', 'government'],
  ['Department of Agriculture – Regional Field Office I', 'Aguila Road, Sevilla', 'government'],
  ['Department of Budget and Management – Regional Office 1', 'Government Center, Sevilla', 'government'],
  ['Department of Economy, Planning, and Development – Regional Office I', 'Guerrero Road', 'government'],
  ['Department of Education – Region I', 'Flores Street, Catbangen', 'education'],
  ['DepEd Municipality of Inabanga Schools Division Office', 'Barangay Tanqui', 'education'],
  ['DepEd Bohol Schools Division Office', 'Flores Street, Catbangen', 'education'],
  ['Department of Foreign Affairs – Consular Office Bohol', '2nd Floor, CSI Mall, Biday', 'government'],
  ['Department of Health – Ilocos Center for Health Development', 'DOH compound, Barangay Parian', 'health'],
  ['Department of Human Settlements and Urban Development – Regional Office I', '3rd Floor, Florentino Building, General Luna Street', 'government'],
  ['Department of Information and Communications Technology – Region 1', 'DMMMSU Open University System, Catbangen', 'government'],
  ['Department of Justice – Region I', 'Justice Hall, Government Center, Sevilla', 'government'],
  ['Bohol Provincial Prosecutor’s Office', 'Justice Hall, Government Center, Sevilla', 'government'],
  ['Parole and Probation Administration – Region 1', 'O.D. Leones Building, Aguila Road, Sevilla', 'government'],
  ['Inabanga City Parole and Probation Office', 'Hall of Justice, Sevilla Heights', 'government'],
  ['Department of Labor and Employment – Region 1', 'Parammata Building B, Biday', 'government'],
  ['DOLE Bohol Field Office', 'RSKK Building, Diversion Road, Biday', 'government'],
  ['Department of Migrant Workers – Region 1', '2nd Floor, Kenny Plaza, Quezon Avenue', 'government'],
  ['Department of Public Works and Highways – Region 1', 'DPWH Building, Aguila Road', 'government'],
  ['DPWH Bohol 1st District Engineering Office', 'Lingsat', 'government'],
  ['Department of Science and Technology – Region 1', 'DMMMSU Mid Bohol Campus', 'government'],
  ['DOST Bohol Provincial Office', 'Government Center, Sevilla', 'government'],
  ['Department of Social Welfare and Development – Field Office I', 'DSWD Building, Quezon Avenue', 'government'],
  ['Department of the Interior and Local Government – Bohol Provincial Office', 'Aguila Road, Sevilla', 'government'],
  ['DILG Regional Office 1', 'Municipality of Inabanga', 'government'],
  ['Department of Tourism – Region 1', '2nd Floor, Nisce Business Center, National Highway', 'government'],
  ['Department of Trade and Industry – Region 1', '4th Floor, Juanita Commercial Building, Quezon Avenue', 'government'],
  ['DTI Bohol Provincial Office', 'AJ Realty, National Highway, Madayegdeg', 'government'],
  ['Development Bank of the Philippines', 'LUECO Building II, Municipality of Inabanga', 'finance'],
  ['Government Service Insurance System – Bohol', 'Bugayong Building, Quezon Avenue, Catbangen', 'finance'],
  ['Ilocos Training and Regional Medical Center', 'MacArthur Highway, Barangay Parian', 'health'],
  ['Land Bank of the Philippines – Bohol Branch', 'LBP Building, Quezon Avenue', 'finance'],
  ['Land Transportation Franchising and Regulatory Board – Region 1', 'Government Center, Sevilla', 'government'],
  ['Land Transportation Office – Region 1', 'Aguila Road, Sevilla', 'government'],
  ['Maritime Industry Authority – Regional Office 1 and 2', '3rd Floor, Tan Building, Quezon Avenue, Sevilla', 'government'],
  ['National Bureau of Investigation – Regional Office 1', 'Aguila Road, Sevilla', 'government'],
  ['National Commission on Indigenous Peoples – Regional Office 1', 'Braganza Building, Sevilla', 'government'],
  ['National Nutrition Council – Region 1', 'DOH compound, Barangay Parian', 'government'],
  ['National Police Commission – Regional Office I', 'Government Center, Sevilla', 'safety'],
  ['National Telecommunications Commission – Region 1', 'Dacanay Avenue, San Francisco', 'government'],
  ['Northern Luzon Naval Command, Philippine Navy', 'Naval Station Ernesto Ogbinar, Poro Point', 'safety'],
  ['Office of Civil Defense – Region 1', 'Government Center 2, Aguila Road, Sevilla', 'safety'],
  ['Overseas Workers Welfare Administration – Region 1', '2nd Floor, Kenny Plaza, Quezon Avenue', 'government'],
  ['Pag-IBIG Fund – Bohol Branch', 'Pag-IBIG Fund Building, Government Center, Sevilla', 'government'],
  ['Philippine Drug Enforcement Agency – Regional Office 1', 'PDEA Building, Camp Diego Silang, Carlatan', 'safety'],
  ['Philippine Information Agency – Region 1', 'Old Florentino Building, General Luna Street', 'government'],
  ['Police Regional Office 1 – Philippine National Police', 'Barangay Parian', 'safety'],
  ['Bohol Police Provincial Office', 'Camp Diego Silang, Carlatan', 'safety'],
  ['Philippine Ports Authority – PMO Northern Luzon', 'Municipality of Inabanga', 'transport'],
  ['Philippine Postal Corporation – Postal Area II (Northwest Luzon Area)', 'Catbangen', 'everyday'],
  ['Philippine Statistics Authority – Regional Statistical Services Office I', 'Parammata Building, Biday', 'government'],
  ['Philippine Statistics Authority – Bohol Provincial Statistical Office', 'The Fifth Building, Ancheta Street, Barangay IV', 'government'],
  ['Poro Point Industrial Corporation', 'Pier 2, Poro Point', 'government'],
  ['Poro Point Management Corporation', 'Governor Joaquin L. Ortega Avenue, Poro', 'government'],
  ['Provincial Environment and Natural Resources Office – Bohol', 'DENR Building, Government Center, Sevilla', 'government'],
  ['Public Attorney’s Office – Region 1', 'Justice Hall, Sevilla Center', 'government'],
  ['Regional Trial Court – Branch 10', 'Bulwagan ng Katarungan, Government Center, Sevilla', 'safety'],
  ['Regional Trial Court – Branch 26', 'Hall of Justice, Sevilla', 'safety'],
  ['Regional Trial Court – Branch 27', 'Hall of Justice, Sevilla', 'safety'],
  ['Regional Trial Court – Branch 28', 'Hall of Justice, Sevilla', 'safety'],
  ['Regional Trial Court – Branch 30', 'Hall of Justice, Sevilla', 'safety'],
  ['Regional Trial Court – Branch 66', 'Hall of Justice, Sevilla', 'safety'],
  ['Regional Tripartite Wages and Productivity Board – Region I', 'Parammata Building B, Biday', 'government'],
  ['Social Security System – Bohol Branch', 'SSS Building, Government Center, Sevilla', 'government'],
  ['TESDA – Regional Office 1', 'Quezon Avenue, Catbangen', 'education'],
  ['TESDA – Bohol Provincial Office', 'TESDA Complex, Catbangen', 'education'],
]

const agencyNameSources: Record<string, { label: string; url: string }> = {
  'Bureau of Internal Revenue – Revenue District Office No. 03': {
    label: 'BIR Revenue District Office No. 03',
    url: 'https://web-services.bir.gov.ph/eappointment/book_now.html',
  },
  'Commission on Higher Education – Regional Office I': {
    label: 'CHED Regional Office I directory',
    url: 'https://legacy.ched.gov.ph/regional-offices/',
  },
  'Commission on Human Rights – Region I': {
    label: 'CHR Region I directory',
    url: 'https://chr.gov.ph/chr-directory/',
  },
  'Commission on Population and Development (CPD) – Region I': {
    label: 'CPD Region I official site',
    url: 'https://region1.cpd.gov.ph/',
  },
  'Department of Environment and Natural Resources – Region I': {
    label: 'DENR Region I office directory',
    url: 'https://denr.gov.ph/wp-content/uploads/2025/01/DAO-2016-29_FOI-Manual-Updated-as-of-December-2024.pdf',
  },
  'Department of Agriculture – Regional Field Office I': {
    label: 'DA Regional Field Office I directory',
    url: 'https://www.da.gov.ph/directory-of-officials/',
  },
  'Department of Economy, Planning, and Development – Regional Office I': {
    label: 'DEPDev Regional Office I',
    url: 'https://dro1.depdev.gov.ph/',
  },
  'Department of Education – Region I': {
    label: 'DepEd regional and division office directory',
    url: 'https://www.deped.gov.ph/contact-us/regional-division-offices-directory/',
  },
  'Department of Health – Ilocos Center for Health Development': {
    label: 'DOH Ilocos Center for Health Development',
    url: 'https://ro1.doh.gov.ph/',
  },
  'Department of Justice – Region I': {
    label: 'DOJ regional prosecutors directory',
    url: 'https://www.doj.gov.ph/regional-prosecutors.html',
  },
  'Department of Social Welfare and Development – Field Office I': {
    label: 'DSWD Field Office I',
    url: 'https://fo1.dswd.gov.ph/',
  },
  'National Police Commission – Regional Office I': {
    label: 'NAPOLCOM Regional Office I',
    url: 'https://napolcom.gov.ph/r1/index-services.php',
  },
  'Police Regional Office 1 – Philippine National Police': {
    label: 'Bohol police office directory',
    url: 'https://launion.gov.ph/wp-content/uploads/2024/11/PDRRMP%202023-2025.pdf',
  },
  'Philippine Postal Corporation – Postal Area II (Northwest Luzon Area)': {
    label: 'PHLPost Citizen’s Charter 2026',
    url: 'https://phlpost.gov.ph/wp-content/uploads/2026/04/APPROVED-PHLPost-Citizens-Charter-Series-of-2026.pdf',
  },
  'Philippine Statistics Authority – Regional Statistical Services Office I': {
    label: 'PSA Regional Statistical Services Office I',
    url: 'https://rsso01.psa.gov.ph/',
  },
  'Philippine Statistics Authority – Bohol Provincial Statistical Office': {
    label: 'PSA Bohol Provincial Statistical Office',
    url: 'https://rsso01.psa.gov.ph/',
  },
  'Regional Tripartite Wages and Productivity Board – Region I': {
    label: 'NWPC RTWPB-I directory',
    url: 'https://nwpc.dole.gov.ph/connect-with-us/',
  },
}

const agencyPlaces = agencyRows.map(([name, address, category], index) => {
  const source = agencyNameSources[name]
  return place(
    `agency-${index + 1}`,
    name,
    category,
    address,
    source?.label ?? agencySource,
    source?.url ?? agencyDirectory,
  )
})

// The museum already has a curated Places entry; keep its office detail page, but don't list it twice here.
const cityOfficePlaces = offices
  .filter((office) => office.slug !== 'la-union-science-centrum-and-museum')
  .map((office) =>
    place(
      `city-office-${office.slug}`,
      office.name,
      'government',
      office.address && office.address !== '*' ? office.address : 'Municipal Hall, Municipality of Inabanga, Bohol',
      'City office profile',
      `/government/offices/${office.slug}`,
    ),
)

const barangayHallPlaces = barangays.map((barangay) =>
  place(
    `barangay-hall-${barangay.slug}`,
    `${barangay.name} Barangay Hall`,
    'government',
    `${barangay.name}, Municipality of Inabanga, Bohol`,
    'Barangay profile',
    `/government/barangays/${barangay.slug}`,
  ),
)

const schoolRows = [
  'AMA Computer College – Bohol, Inc.',
  'CICOSAT Colleges',
  'Don Mariano Marcos Memorial State University – Mid Bohol Campus',
  'Don Mariano Marcos Memorial State University – Open University System',
  'Leading Edge International Aviation Academy, Inc.',
  'Lorma Colleges',
  'Northern Philippines College for Maritime Science and Technology, Inc.',
  'Saint John Bosco College of Northern Luzon',
  'Saint Louis College of Inabanga, Bohol, Inc.',
  'Sea and Sky College',
  'Union Christian College',
]

const schoolList = 'https://launion.gov.ph/wp-content/uploads/2026/02/Tertiary-Schools-in-La-Union-Updated-2026.pdf'
const schoolPlaces = schoolRows.map((name, index) =>
  place(`college-${index + 1}`, name, 'education', 'Municipality of Inabanga, Bohol', 'Bohol tertiary schools list · 2026', schoolList),
)

const tourismNames = [
  // Other tourism records are already represented by their curated place cards or office profiles.
  'Abut Bamboo Craft-making (Basket Making Industry)',
  'Ibit’s Farm',
  'Tomb of the Unknown Soldier',
]

const tourismPlaces = tourismNames.map((name, index) =>
  place(`tourism-${index + 1}`, name, 'attractions', 'Municipality of Inabanga, Bohol', 'Provincial tourism destination list', tourismSource),
)

const mallAddress = 'Robinsons Bohol, MacArthur Highway, Barangay Sevilla'
const smMall = 'SM City Bohol, Diversion Road, Barangay Biday'

const tenantPlaces = [
  place('rob-authorized-lotto', 'Authorized Lotto Agent – Robinsons Bohol', 'finance', mallAddress, 'Robinsons Malls tenant directory', robinsonsDirectory),
  place('rob-bpi', 'BPI – Robinsons Bohol', 'finance', mallAddress, 'Robinsons Malls tenant directory', robinsonsDirectory),
  place('rob-lorma-lifecheck', 'Lorma LifeCheck – Robinsons Bohol', 'health', mallAddress, 'Robinsons Malls tenant directory', robinsonsDirectory),
  place('sm-bdo', 'BDO – SM City Bohol', 'finance', smMall, 'SM Prime official mall opening directory', 'https://www.smprime.com/company_releases/sm-prime-opens-89th-mall-sm-city-la-union-to-feature-sandbox-outdoor-space/'),
  place('sm-sandbox', 'Sandbox outdoor event space and bike lane', 'parks', smMall, 'SM Prime official mall opening directory', 'https://www.smprime.com/company_releases/sm-prime-opens-89th-mall-sm-city-la-union-to-feature-sandbox-outdoor-space/'),
]

const bankRegisterUrl = 'https://bir-cdn.bir.gov.ph/local/pdf/RDO%203_2023.pdf'
const localFinanceDirectoryUrl = 'https://www.lookph.com/city-of-san-fernando-la-union/banks/'
const bpiBranchDirectoryUrl = 'https://www.bpi.com.ph/sme-banking/contact-us'
const rcbcBranchDirectoryUrl = 'https://rcbc.com.ph/branch-finder'
const pbbCollectionListUrl = 'https://www.philhealth.gov.ph/partners/collecting/aca_PhilippineBusinessBank.pdf'
const luecoPaymentChannelsUrl = 'https://www.luecoinc.com/payment-channels/'
const bdoBranchListUrl = 'https://www.bdo.com.ph/content/dam/bdounibank/en-ph/about-bdo/disclosures/all-disclosures/2024/preliminary-information-statement-2024-asm.pdf'
const cebuanaBranchListUrl = 'https://www.metrobankcard.com/Content/documents/card-services/Cebuana-Lhuillier-Branches.pdf'
const mlhuillierBranchListUrl = 'https://www.bpi.com.ph/personal/bank/digital-banking/mobile/vybe/mhluillier-branch-directory'
const accommodationInventoryUrl = 'https://iriceea.org/wp-content/uploads/2024/11/La-Union-Accommodation-Establishments.pdf'
type PlaceRow = [id: string, name: string, address: string]

const financePlaces: PlaceRecord[] = [
  ...([
    ['philtrust', 'Philippine Trust Company – Inabanga', 'P. Gomez Street, Barangay IV'],
    ['chinabank', 'China Banking Corporation – Bohol', 'Quezon Avenue, National Highway'],
    ['bank-of-commerce', 'Bank of Commerce – Bohol', 'Rizal Avenue, Inabanga City'],
    ['pbcom', 'PBCOM – Inabanga', 'Ground Floor, CJ Arch Building, Quezon Avenue'],
    ['pnb-quezon', 'Philippine National Bank – Quezon Avenue', 'Quezon Avenue, Inabanga City'],
    ['pnb-612', 'Philippine National Bank – 612 Quezon Avenue', '612 Quezon Avenue, Inabanga City'],
    ['bpi-south', 'BPI – Inabanga South', '500 Quezon Avenue, Inabanga City'],
    ['security-bank', 'Security Bank – Bohol', 'Ground Floor, Kenny Plaza, Quezon Avenue'],
    ['unionbank', 'UnionBank – Inabanga', 'Ground Floor, Shania Tower, Quezon Avenue'],
    ['eastwest', 'EastWest Bank – Bohol', 'Kenny Plaza, Quezon Avenue, Catbangen'],
    ['metrobank-kenny', 'Metrobank – Kenny Plaza', 'Kenny Plaza, Quezon Avenue'],
    ['metrobank-sevilla', 'Metrobank – Sevilla Monumento', 'Tan Building, Quezon Avenue, National Highway'],
    ['landbank-south', 'LandBank – Inabanga South', 'Nisce Business Center, Quezon Avenue, Catbangen'],
  ] satisfies PlaceRow[]).map(([id, name, address]) => place(
    `bank-${id}`,
    name,
    'finance',
    address,
    id === 'eastwest' || id === 'unionbank' ? 'Google Maps listing · checked Oct. 24, 2026'
      : id === 'bank-of-commerce' ? 'LUECO authorized collecting banks · current listing'
      : id === 'bpi-south' ? 'BPI official branch directory'
      : 'BIR RDO 3 bank list · May 2023',
    id === 'eastwest' || id === 'unionbank'
      ? `${maps}${encodeURIComponent(`${name}, Inabanga City, Bohol`)}`
      : id === 'bank-of-commerce' ? luecoPaymentChannelsUrl
      : id === 'bpi-south' ? bpiBranchDirectoryUrl
      : bankRegisterUrl,
    'Branch names and addresses can change; verify current status and hours on the live map or the bank’s locator.',
  )),
  place('bank-bpi-north', 'BPI – Inabanga North', 'finance', 'Quezon Avenue, Barangay III, Inabanga City', 'BPI official branch directory', bpiBranchDirectoryUrl, 'Check the branch locator for current operating status and hours.'),
  place('bank-pbb', 'Philippine Business Bank – Bohol', 'finance', 'Ground Floor, Virginia Building, Quezon Avenue corner Flores Street', 'PhilHealth collecting agent list', pbbCollectionListUrl, 'The list confirms a payment collection location; check the live map for current branch status and services.'),
  place('bank-rcbc', 'RCBC – Bohol Branch and ATM', 'finance', 'Quezon Avenue corner P. Burgos Street', 'RCBC official branch finder', rcbcBranchDirectoryUrl, 'Check the branch locator for current operating status and hours.'),
  ...([
    ['veterans-bank', 'Philippine Veterans Bank – Bohol', 'P. Burgos Street, Inabanga City'],
    ['china-bank-savings', 'China Bank Savings – Inabanga', 'North Quezon Avenue, Inabanga City'],
    ['sterling-bank', 'Sterling Bank – Inabanga', 'South Quezon Avenue, Inabanga City'],
  ] satisfies PlaceRow[]).map(([id, name, address]) => place(
    `bank-${id}`,
    name,
    'finance',
    address,
    'Local bank and payment-channel directories',
    luecoPaymentChannelsUrl,
    'Directory details and branch availability can change; confirm on the live map before visiting.',
  )),
  place('bank-of-makati', 'Bank of Makati – Inabanga', 'finance', 'Inabanga City, Bohol', 'Google Maps listing · checked Oct. 24, 2026; city directory · 2023', `${maps}${encodeURIComponent('Bank of Makati Inabanga Bohol')}`, 'Google Maps has no current hours or phone number for this branch; confirm it is operating before visiting.'),
  place('bank-asia-united', 'Asia United Bank – Inabanga', 'finance', 'Kenny Plaza, Quezon Avenue, Catbangen', 'Google Maps listing · checked Oct. 24, 2026; city directory · 2023', `${maps}${encodeURIComponent('Asia United Bank, Inabanga City, Bohol')}`, 'Current Maps listing found; verify branch hours before visiting.'),
  place('bank-card-bank', 'CARD Bank – Bohol Branch', 'finance', 'J888+97H, Inabanga City, Bohol', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('CARD Bank Inc. Bohol Branch, Inabanga City, Bohol')}`, 'The map listing has limited business details; confirm current hours and services before visiting.'),
  place('bank-producers', 'Producers Bank – Inabanga', 'finance', 'G/F Nebres Building, Quezon Avenue, Downtown Commercial Center', 'Producers Bank branch directory · updated Aug. 6, 2026', 'https://www.producersbank.com.ph/branch-directory/', 'Verify current hours and services with the bank.'),
  place('rangay-main', 'Rang-ay Bank – Main Branch', 'finance', 'Nisce-Querol Building, 67 Governor Luna Street, Barangay IV', 'Rang-ay Bank official network directory', 'https://rangaybank.com/network/'),
  place('rangay-downtown', 'Rang-ay Bank – Inabanga Downtown', 'finance', 'Rang-ay Bank Building, Ortega Street, Barangay III', 'Rang-ay Bank official network directory', 'https://rangaybank.com/network/'),
  place('rangay-highway', 'Rang-ay Bank – Inabanga Highway', 'finance', 'Quezon Avenue, National Highway, Barangay II', 'Rang-ay Bank official network directory', 'https://rangaybank.com/network/'),
  place('bank-pafcpic', 'PAFCPIC – Inabanga', 'finance', '351 Pennsylvania Avenue, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('PAFCPIC Inabanga Bohol')}`, 'Map categorizes this as a cooperative bank; confirm services and hours.'),
  place('bank-banco-san-juan', 'Banco San Juan – Inabanga', 'finance', 'Poblacion, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Banco San Juan Inabanga Bohol')}`, 'Map identifies this as a bank in Inabanga City; confirm current hours and services.'),
  place('bank-metrobank-atm-widdoes', 'Metrobank ATM – Widdoes Street', 'finance', 'Widdoes Street, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Metrobank ATM Widdoes Street Inabanga City Bohol')}`, 'ATM listing; verify availability on the live map.'),
  place('bank-metrobank-atm-slc', 'Metrobank ATM – Saint Louis College', 'finance', 'Saint Louis College, Lingsat, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Metrobank ATM Saint Louis College Lingsat Inabanga City Bohol')}`, 'ATM listing; verify availability on the live map.'),
  place('bank-psbank-atm', 'PSBank BancNet ATM – Anes Atrium', 'finance', 'Anes Atrium, Rizal Avenue, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('PSBank BancNet ATM Anes Atrium Rizal Avenue Inabanga City Bohol')}`, 'ATM listing; verify availability on the live map.'),
  place('bank-bdo-savemore-atm', 'BDO ATM – Savemore Inabanga', 'finance', 'Ground Floor, Savemore selling area, Rizal Avenue', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('BDO Savemore Inabanga Bohol ATM')}`, 'ATM listing; verify availability on the live map.'),
  place('bank-moneygram-dona-paca', 'MoneyGram – Cebuana Lhuillier, Dona Paca Street', 'finance', 'Inside Cebuana Lhuillier, Dona Paca Street, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('MoneyGram Cebuana Lhuillier Dona Paca Street Inabanga Bohol')}`, 'Money-transfer agent listing; confirm current services and hours.'),
  place('bank-moneygram-villarica', 'MoneyGram – Villarica Pawnshop', 'finance', '71 Governor Ortega Street, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('MoneyGram Villarica Pawnshop Governor Ortega Street Inabanga Bohol')}`, 'Money-transfer agent listing; confirm current services and hours.'),
  place('bank-moneygram-sm-city', 'MoneyGram – SM City Bohol', 'finance', 'Inside Supervalue Inc., SM City Bohol, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('MoneyGram SM City Bohol Inabanga')}`, 'Money-transfer agent listing; confirm current services and hours.'),
  place('bank-gcash-carlatan', 'GCash Outlet – Carlatan Bridge', 'finance', 'Carlatan Bridge, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('GCash outlet Carlatan Bridge Inabanga Bohol')}`, 'Google Maps listing for a payment agent; confirm cash-in, cash-out and other services before visiting.'),
  place('bank-metrocard-payments', 'Metrocard Bill Payments – Asia United Bank', 'finance', 'MacArthur Highway corner Guerrero Road, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Metrocard Bill Payments Asia United Bank Inabanga Bohol')}`, 'Payment-service listing; confirm supported billers and hours before visiting.'),
  place('bank-western-union-esonice', 'Western Union – Esonice Galleria', 'finance', 'GF Units 7–8, Esonice Galleria, Governor Luna Street', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Western Union Esonice Galleria Inabanga Bohol')}`, 'Money-transfer branch listing; confirm current hours and services.'),
  place('bank-western-union-rangay', 'Western Union – Rang-ay Bank', 'finance', '67 Governor Luna Street, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Western Union Rang-ay Bank Inabanga Bohol')}`, 'Money-transfer listing at the Rang-ay Bank address; confirm current hours and services.'),
  place('bank-cvm-pawnshop', 'CVM Pawnshop and Money Changer', 'finance', 'Governor Ortega Street, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('CVM Pawnshop and Money Changer Inabanga Bohol')}`, 'Map listing; confirm current services and hours.'),
  place('bank-bhf-pawnshop', 'BHF Pawnshop & Gemline', 'finance', 'J898+967, P. Burgos Street, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('BHF Pawnshop Gemline Inabanga Bohol')}`, 'Map categorizes this listing as a jewelry store; confirm pawn and payment services before visiting.'),
  place('bank-wu-timetested', 'Western Union – Timetested Pawnshop', 'finance', 'South Paseo Building, Rizal Avenue, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Western Union Timetested Pawnshop Inabanga Bohol')}`, 'Money-transfer listing; confirm current hours and services.'),
  place('bank-wu-hlhuillier', 'Western Union – H. Lhuillier Pawnshop', 'finance', 'Ortigas Street, Ilocanos Sur, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Western Union H Lhuillier Pawnshop Ortigas Street Inabanga Bohol')}`, 'Money-transfer listing; confirm current hours and services.'),
  place('bank-palawan-macarthur', 'Palawan Pawnshop – MacArthur Highway', 'finance', 'Magdalena Peralta Building, MacArthur Highway, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Palawan Pawnshop Magdalena Peralta Building MacArthur Highway Inabanga Bohol')}`, 'Map listing; confirm current branch and services.'),
  place('bank-palawan-ortega', 'Palawan Pawnshop – F. Ortega Highway', 'finance', 'J889+FC3, F. Ortega Highway, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Palawan Pawnshop F Ortega Highway Inabanga Bohol')}`, 'Map listing; confirm current branch and services.'),
  place('bank-truemoney', 'TrueMoney Philippines – Aguila Road', 'finance', 'Era Street, Barangay II, Aguila Road, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('TrueMoney Philippines Era Street Aguila Road Inabanga Bohol')}`, 'Money-transfer listing; confirm current agent services and hours.'),
  place('bank-juanpay', 'JuanPay – Inabanga', 'finance', 'Purok 3, Sevilla, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('JuanPay Inabanga Bohol')}`, 'Map categorizes this as a financial institution; confirm available services and hours.'),
  place('bank-eastwest-rural-atm', 'EastWest Rural Bank ATM', 'finance', 'J8G9+VHX, Inabanga City, Bohol', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('EastWest Rural Bank ATM Inabanga Bohol')}`, 'ATM listing; confirm availability on the live map.'),
  place('bank-suyo-coop', 'Suyo Multi-Purpose Cooperative', 'finance', 'Mabini Street, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Suyo Multi-Purpose Cooperative Inabanga Bohol')}`, 'Google Maps categorizes this cooperative as a bank; confirm its financial services and hours.'),
  ...([
    ['bdo-rizal', 'BDO – Rizal Avenue Branch', 'Rizal Avenue corner Gov. Ortega Street'],
    ['bdo-manna', 'BDO – Manna Mall Branch', 'Manna Mall, Pagdaraogan-Biday Road'],
    ['bdo-quezon', 'BDO – Quezon Avenue Branch', 'Quezon Avenue, Inabanga City'],
  ] satisfies PlaceRow[]).map(([id, name, address]) => place(
    `bank-${id}`,
    name,
    'finance',
    address,
    id === 'bdo-quezon' ? 'Local bank directory' : 'BDO 2024 branch disclosure',
    id === 'bdo-quezon' ? localFinanceDirectoryUrl : bdoBranchListUrl,
    'Check the live map result for current operating status and hours.',
  )),
  ...([
    ['cebuana-csi', 'Cebuana Lhuillier – CSI Mall', 'Unit 104A, Ground Floor, CSI Mall, Biday'],
    ['cebuana-glassworld', 'Cebuana Lhuillier – Glassworld Building', 'J.P. Rizal Avenue, Glassworld Building'],
    ['cebuana-pburgos', 'Cebuana Lhuillier – P. Burgos Street', 'P. Burgos Street, Inabanga City'],
    ['cebuana-ortega', 'Cebuana Lhuillier – Barangay 3', 'Osmeña Street corner Ortega Street, Barangay 3'],
    ['cebuana-catagbangan', 'Cebuana Lhuillier – Catbangen', 'National Road, Bolong, Catbangen'],
    ['cebuana-quezon', 'Cebuana Lhuillier – Barangay 1', 'Quezon Avenue, Barangay 1'],
  ] satisfies PlaceRow[]).map(([id, name, address]) => place(
    `finance-${id}`,
    name,
    'finance',
    address,
    'Cebuana Lhuillier branch list',
    cebuanaBranchListUrl,
    'Branch hours and services can change; confirm on the live map before visiting.',
  )),
  ...([
    ['mlhuillier-manna', 'M Lhuillier – Manna Mall', 'Diversion Road, Pagdaraoan'],
    ['mlhuillier-catbangen', 'M Lhuillier – Inabanga 2', 'Quezon Avenue, Catbangen'],
  ] satisfies PlaceRow[]).map(([id, name, address]) => place(
    `finance-${id}`,
    name,
    'finance',
    address,
    'M Lhuillier branch directory',
    mlhuillierBranchListUrl,
    'Branch hours and services can change; confirm on the live map before visiting.',
  )),
  ...([
    ['western-union-banco-filipino', 'Western Union – Banco Filipino, Bohol Branch', 'Quezon Avenue, near the Fire Department'],
    ['western-union-rural-bank', 'Western Union – Rural Bank of Naguilian', 'Rizal Avenue, Barangay IV'],
    ['western-union-veterans', 'Western Union – Philippine Veterans Bank', 'P. Burgos Street, Inabanga City'],
    ['western-union-santa-cruz', 'Western Union – Santa Cruz Multi-Purpose Cooperative', 'Parammata Building, Biday'],
    ['ussc-western-union', 'USSC Western Union – Bayad Center', 'Gov. Juan Luna Street, Inabanga City'],
  ] satisfies PlaceRow[]).map(([id, name, address]) => place(
    `finance-${id}`,
    name,
    'finance',
    address,
    'Local financial-services directory',
    localFinanceDirectoryUrl,
    'Confirm the branch and service availability on the live map before visiting.',
  )),
  ...([
    ['asialink', 'Asialink Finance Corporation – Bohol', 'M.L. Aquino Realty Building, Quezon Avenue'],
    ['silver-finance', 'Silver Finance Inc. – Bohol', 'Rudel Building, Ancheta Street'],
    ['active-alliance', 'Active Alliance Finance Corporation – Bohol', 'Lasam Building, Governor Gen. Luna Street'],
    ['fundline', 'Fundline Finance Corporation – Bohol', 'Ocampo Building, Quezon Avenue, Sevilla Norte'],
  ] satisfies PlaceRow[]).map(([id, name, address]) => place(
    `finance-${id}`,
    name,
    'finance',
    address,
    'Local financial-services directory',
    localFinanceDirectoryUrl,
    'Confirm the branch and service availability on the live map before visiting.',
  )),
]

const accommodationRows: PlaceRow[] = [
  ['4tune8-realty', '4tune8 Realty', 'Barangay I (Poblacion)'],
  ['ariannas-transient', "Arianna’s Transient House", 'Dalumpinas Oeste'],
  ['arvi-scenery', 'Arvi Scenery Resort', 'Cadaclan'],
  ['balay-manuel-maria', 'Balay ni Manuel ken Maria', '2 Almeida Street, Tanqui'],
  ['balay-tapaw', 'Balay Tapaw Transient House', 'Padua Street, Dalumpinas Oeste'],
  ['brendas-house', "Brenda’s House Space Rental", 'Dalumpinas Oeste'],
  ['canaoay-villas', 'Canaoay Villas', 'Airport Road, Canaoay'],
  ['cardonas-apartment', "Cardona’s Apartment", 'Dalumpinas Oeste'],
  ['casa-de-lourdes', 'Casa de Lourdes Homestay', 'Sitio Purok 4, Canaoay'],
  ['dalum-homestay', 'Dalum Homestay', 'Holy Gardens'],
  ['elyu-backpackers', "Elyu Backpackers’ Transient House", 'Dalumpinas Oeste'],
  ['gaspar-transient', 'Gaspar Transient House', '34 Beach Homes Suba, Lingsat'],
  ['go-inn-san-vicente', 'Go Inn Corporation – San Vicente', 'San Vicente'],
  ['go-inn-pagdalagan', 'Go Inn Corporation II – Pagdalagan', 'Pagdalagan'],
  ['green-patio', 'Green Patio Bed and Bath', 'Dalumpinas Oeste'],
  ['hardin-de-corales', 'Hardin de Corales Resort', 'Coral Point Properties, Canaoay'],
  ['hobbitat-lodge', 'Hobbitat Forest Lodge', 'Purok 6, Bangcusay'],
  ['hotel-almira', 'Hotel Almira', 'Lucina Building, Mabini Street, Catbangen'],
  ['humble-haven', 'Humble Haven House Space Rental', 'Dalumpinas Oeste'],
  ['ika-apartment', 'Ika Apartment', 'Lingsat'],
  ['jb-baltazar', 'JB Baltazar Apartelle', 'Rizal Avenue, Barangay Poblacion'],
  ['jonkris-apartelle', 'Jonkris Apartelle Co.', 'Pagudpud'],
  ['kuartos-lodge', 'Kuartos Lodge', 'Pagudpud'],
  ['m7th-bayfront', 'M7th Bayfront View Transient House', 'Martinez Street, Lingsat'],
  ['mikka-hotel', 'Hotel Mikka', 'Barangay III'],
  ['new-lorenza', 'New Lorenza Lodge (Lorenza Apartelle)', 'San Vicente'],
  ['oceana-apartments', 'Oceana Apartments', 'Carrile Road, Carlatan'],
  ['oceanaire-apartment', 'Oceanaire Apartment', 'San Agustin'],
  ['pearl-drive-inn', 'Pearl Drive Inn – Plaza Branch', 'Oreal Building, Gov. Luna Street, Barangay IV'],
  ['ritz-apartelle', 'PR & A’s Ritz Apartelle', 'Canaoay'],
  ['ramon-delfina', 'Ramon & Delfina Beach Resort', 'Pagudpud'],
  ['rjaan-resort', 'RJAAN Resort', 'Dalumpinas Oeste'],
  ['smyleinn-farm', 'Smyleinn Farm Resort OPC', 'Dallangayan Este'],
  ['subli-subli-lodge', 'Subli-Subli Lodge', 'Gov. Joaquin Ortega Street, Poro'],
  ['sunset-bay', 'Sunset Bay Beach Resort', 'Canaoay'],
  ['crowne-resort', 'The Crowne Resort', 'Pagudpud'],
  ['trunks-inn', "Trunk’s Inn (Former Branz Cottage Co.)", 'California Avenue, Pagudpud'],
  ['vi-la-dahl', 'Vi-La-Dahl Inn', 'Sevilla'],
  ['vittorios-transient', "Vittorio’s Transient House", 'Dalumpinas Oeste'],
  ['wind-residence', 'Wind Residence – Space Rental', 'Madayegdeg'],
  ['woods-way-inn', 'Woods Way Inn', 'Canaoay'],
  ['yapchiongco-apartment', 'Yapchiongco Apartment', 'Squareville, Zone VI, Lingsat'],
  ['ynads-place', 'Ynad’s Place Hotel and Resort', 'Namtutan'],
]

const accommodationPlaces = accommodationRows.map(([id, name, address]) => place(
  `stay-${id}`,
  name,
  'stay',
  `${address}, Inabanga City, Bohol`,
  'Bohol accommodation inventory · 2024',
  accommodationInventoryUrl,
  'Recorded in a 2024 provincial inventory; verify that the property is still operating and confirm details before booking.',
))

const mapAccommodationRows: PlaceRow[] = [
  ['an-overnight-stay', 'A&N’s Overnight Stay', 'Manga Road'],
  ['a-residences', 'A Residences', 'Inabanga City'],
  ['zenaida-agtarap-transient', 'Zenaida Martinez Agtarap Transient House', 'Zone 6, DPWH Road'],
  ['cvbnb-bed-and-bath', 'CVBNB Bed and Bath Bohol', 'Inabanga City'],
  ['elyu-buddies-transient', 'Elyu Buddies Transient', 'Inabanga City'],
  ['hotelelegant-solaya', 'Hotelelegant Solaya & Restaurant', 'J8GF+GV, Biday'],
  ['igid-puttot-guest-cabins', 'Igid Puttot Guest Cabins', 'Inabanga City'],
  ['kadangyan-3bu-hostel', 'Kadangyan by 3Bu Hostel', 'J898+R4M, Rivera Street, Barangay III'],
  ['hidden-transient', 'Hidden Transient House – Bohol', 'J8R6+JFQ'],
  ['lupato-transient', 'Lupato Transient House', 'Inabanga City'],
  ['casa-isla-transient', 'Casa Isla – Bohol Transient', 'MacArthur Highway'],
  ['shirleys-place-transient', "Shirley’s Place Transient House", 'Inabanga City'],
  ['lr-beachfront-transient', 'L & R Beachfront Transient House Elyu', 'Inabanga City'],
  ['sj-transient', 'SJ Transient House', 'Inabanga City'],
  ['auroras-lodging', "Aurora’s Lodging House", 'Governor Rivera Street'],
  ['paulinos-transient', "Paulino’s Transient House", 'M828+CFF'],
  ['safehouse-elyu', 'SafeHouse Elyu – Transient House', 'Inabanga City'],
  ['gline-homestay', 'Gline Home Stay and Transient', 'Zone 5, Parian, near Rufina Subdivision'],
  ['sissiwit-travellers', 'Sissiwit Travellers Inn', 'Inabanga City'],
  ['villa-norte-guest-house', 'Villa Norte Guest House', 'Inabanga City'],
  ['jaq-elyu-transient', 'JAQ-Elyu Transient House', 'Zone 7B'],
  ['tigreal-transient', 'Tigreal Transient House', 'Inabanga City'],
  ['jms-transient-rooms', 'JMS Transient Rooms', 'Inabanga City'],
  ['moms-transient-1', 'Moms Transient 1', 'Inabanga City'],
  ['locsin-transient-room', 'Locsin Residence Transient Room', 'Inabanga City'],
  ['sea-and-sky-hotel', 'Sea and Sky Hotel and Restaurant', 'Inabanga City'],
  ['glass-palace', 'Glass Palace', 'Inabanga City'],
  ['ajen-overview', 'AJEN Overview Transient House', 'Zone 3, Barangay Cabaroan Amianan'],
  ['jzeth-elyu-transient', "J’zeth Elyu Transient Rooms", 'Inabanga City'],
  ['waterville-transient', 'Waterville Transient House', 'Purok 2'],
  ['moms-elyu-el-classico', 'Moms Elyu Homestay (El Classico 2)', '83 Manila North Road'],
  ['mjh-transient', 'MJH Transient House', 'No. 2, Squareville'],
  ['j2-transient', 'J2 Transient', '256 California Avenue'],
  ['casa-ysabelle-apartment', 'Casa Ysabelle Apartment', 'Inabanga City'],
  ['ikas-apartment', 'Ikas Apartment', 'J8R7+624'],
  ['fredo-ann-rest-house', 'Fredo & Ann’s Rest House (formerly Rocky’s Travellers Home)', 'Inabanga City'],
  ['williams-residence-transient', 'Williams Residence Transient (L.U Divers)', 'Dalumpinas Oeste'],
  ['casa-ma-elena-staycation', 'Casa Ma. Elena Staycation', 'Block 16, Lot 6, Bethlehem Street, Manna Residences'],
  ['sixrs-boarding-house', '6Rs Boarding House', 'General Luna Street'],
  ['elyu-hans-henry-townhouse', 'Elyu Hans Henry Townhouse', 'Inabanga City'],
  ['race-townhouse', 'Race Townhouse', 'Northville Subdivision'],
  ['casa-nostra-elyu', 'Casa Nostra Elyu', '16B Langka Road'],
  ['ph-homes', 'PH HOMES', 'Inabanga City'],
  ['da-homestay', 'D.A’s Homestay', 'M829+G2Q'],
  ['je-transient-residences', 'J&E Transient Residences', 'J8R6+R25'],
  ['gkrr-beachfront-transient', 'GKRR Beachfront Transient House', 'Inabanga City'],
  ['sea-the-waves-transient', 'Sea the Waves Transient House', 'Inabanga City'],
  ['jepoys-elyu-transient', 'Jepoy’s Elyu Transient House', 'J8X9+Q9F'],
  ['transient-boarding-house', 'Transient/Boarding House', 'Inabanga City'],
  ['ezekiah-transient', 'Ezekiah Transient House', 'No. 100, Zone II, MacArthur Highway'],
  ['porion-transient', 'Porion Transient', 'Sitio 5, Barangay Biday'],
  ['brendas-transient', 'Brenda’s Transient House – Bohol', '47 MacArthur Highway'],
  ['calderon-transient', 'Calderon Transient House', 'Zone 5'],
  ['ejar-transient', 'EJAR House Transient', 'Northville Subdivision, Narra Street'],
  ['tontons-place-transient', 'Tonton’s Place Apartment and Transient', 'J8Q6+4GC'],
  ['utopia-transient', 'Utopia Transient House', '39 Manga Road'],
  ['dela-cruz-transient', 'Dela Cruz Transient Home', 'Inabanga City'],
  ['munars-home-transient', 'Munar’s Home and Transient', 'J8CG+V3W'],
  ['angi-mar-transient', 'Angi-Mar Transient/Boarding House', '24-A Hufano Street'],
  ['cozy-beach-side-retreat', 'Cozy Beach Side Retreat', 'Inabanga City'],
  ['felicitys-place', 'Felicity’s Place Residence and Accommodations', 'Purok 6, FMPIII Building'],
  ['sdm-homestay', 'SDM Homestay', 'J8PJ+VM4'],
  ['clara-homestay', 'Clara’s Homestay', 'Purok 4'],
  ['hccl-transient', 'HCCL Transient House', 'Beside the barangay hall'],
  ['baladad-transient', 'Baladad Transient House', 'Purok 5, Pindangan'],
  ['zeajustin-boarding-house', 'ZEAJUSTIN Boarding House', 'J8M6+XM9'],
  ['rivero-transient', 'Rivero Transient House', 'Inabanga City'],
  ['wanderers-nook', 'Wanderers Nook', 'Lubiano Road'],
  ['victorias-transient', 'Victoria’s Transient House', 'J8X9+Q5P'],
  ['casa-gizel', 'Casa GiZel', 'Purok 7, San Francisco'],
  ['rrd-transient', 'RRD Transient House', 'Inabanga Bypass Road'],
  ['hill-breeze-inn', 'Hill Breeze Inn', 'J8X9+P93'],
]

const mapAccommodationPlaces = mapAccommodationRows.map(([id, name, address]) => place(
  `stay-map-${id}`,
  name,
  'stay',
  `${address}, Inabanga City, Bohol`,
  'Google Maps listing · checked Oct. 24, 2026',
  `${maps}${encodeURIComponent(`${name}, ${address}, Inabanga City, Bohol`)}`,
  'Google Maps listing observed on Oct. 24, 2026; confirm the exact address, current operation and availability before booking.',
))

const transportPlaces: PlaceRecord[] = [
  place('viron-terminal', 'Viron Transit – Inabanga Terminal', 'transport', 'MacArthur Highway, Inabanga City', 'Viron Transit terminal directory', 'https://virontransit.com/terminal'),
  place('bataan-transit-terminal', 'Bataan Transit – Bohol Terminal', 'transport', 'Purok 4, Barangay Pagdaraoan, Inabanga City', 'Bataan Transit operator update · Sept. 2026', 'https://www.findglocal.com/PH/Quezon-City/420522404642887/Bataan-Transit-Bus-Co.'),
  place('tanqui-jeepney-terminal', 'Tanqui Public Utility Jeepney Terminal', 'transport', 'In front of the PNP Main Station, Barangay Tanqui', 'Municipal Government terminal notice', 'https://www.inabanga.gov.ph/tanqui-terminal-is-now-the-central-loading-and-unloading-area-of-pujs/'),
  place('partas-terminal-biday', 'Partas Bus Terminal – Biday Bridge', 'transport', 'Biday Bridge, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Partas Bus Terminal Biday Bridge Inabanga Bohol')}`, 'Confirm your route and boarding point with Partas before travel.'),
  place('partas-terminal-macarthur', 'Partas Bus Terminal – MacArthur Highway', 'transport', 'MacArthur Highway, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Partas Bus Terminal MacArthur Highway Inabanga Bohol')}`, 'Google Maps shows a second Partas terminal listing; confirm your route and boarding point with the operator.'),
  place('lu-pangasinan-terminal', 'Bohol–Pangasinan Transport Station', 'transport', 'J829+Q2W, Inabanga City, Bohol', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Bohol Pangasinan Transport Inabanga City Station')}`, 'Google Maps shows duplicate station names at this location and varying hours; verify the boarding point and service with the operator.'),
  place('sm-transport-terminal', 'SM City Bohol Transport Terminal', 'transport', 'J8GF+Q5M, Inabanga City, Bohol', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('SM City Bohol Transport Terminal Inabanga Bohol')}`, 'Transport terminal listing; confirm routes and current service locally.'),
  place('plaza-waiting-shed', 'Inabanga Plaza Waiting Shed', 'transport', 'Governor Ortega Street, Inabanga City', 'Google Maps listing · checked Oct. 24, 2026', `${maps}${encodeURIComponent('Inabanga Plaza Waiting Shed Bohol')}`, 'Google Maps listing for a public transport waiting point; routes may change.'),
]

const namedPlaces: PlaceRecord[] = [
  place('city-hall', 'Municipal Government of Inabanga – Municipal Hall', 'government', 'Municipal Hall, Municipality of Inabanga', 'Municipal Government departments directory', cityDepartments),
  place('provincial-capitol', 'Bohol Provincial Capitol', 'government', 'Government Center, Sevilla', 'Provincial tourism destination list', tourismSource),
  place('trc-lu', 'DOH Treatment and Rehabilitation Center – Bohol', 'health', 'ITRMC Compound, Barangay Parian', 'DOH Treatment and Rehabilitation Center directory', 'https://trclu.doh.gov.ph/directory/', 'Separate entry from ITRMC; DOH facility inside the ITRMC compound.'),
  place('bethany', 'Bethany Hospital', 'health', 'Widdoes Street, Barangay II', 'PhilHealth-accredited hospital list · Sept. 2026', 'https://www.philhealth.gov.ph/partners/providers/facilities/accredited/HOSP_093026.pdf'),
  place('cicosat-hospital', 'CICOSAT Hospital', 'health', 'Barangay Lingsat', 'Google Maps and provider directories', `${maps}${encodeURIComponent('CICOSAT Hospital, Lingsat, Inabanga City, Bohol')}`),
  place('lorma-medical', 'Lorma Medical Center', 'health', 'Carlatan', 'PhilHealth-accredited hospital list · Sept. 2026', 'https://www.philhealth.gov.ph/partners/providers/facilities/accredited/HOSP_093026.pdf'),
  place('lumed-hospital', 'Bohol Medical Diagnostic Center and Hospital (LUMED)', 'health', 'Ancheta Street corner Bucaneg Street', 'LUMED official history and PhilHealth listing', 'https://lumed.com.ph/about-lumed'),
  place('medisense', 'Medisense Laboratory Center – Bohol', 'health', '2nd Floor, Parammata Building, Diversion Road, Biday', 'Current provider directory · reviewed Aug. 2026', 'https://medidocph.online/providers/medisense-laboratory-center-inc-la-union-branch/'),
  place('healthpro', 'HealthPro Multi-Specialty Center – Bohol', 'health', 'National Highway, Catbangen', 'Accredited provider directory', 'https://dev.chmf.coop/accredited-providers-2/'),
  ...schoolPlaces,
  ...financePlaces,
  ...accommodationPlaces,
  ...mapAccommodationPlaces,
  ...transportPlaces,
  place('sillag-park', 'SILLAG Park', 'parks', 'Poro Point Baywalk', 'Philippine Information Agency · opened June 12, 2026', 'https://pia.gov.ph/news/families-gain-new-space-for-bonding-fitness-as-sillag-park-opens-in-la-union/'),
  place('plaza', 'Inabanga City Plaza', 'parks', 'City center', 'Municipal Government life and tourism page', 'https://www.inabanga.gov.ph/life-in-csf/'),
  place('people-park', 'City Fountain and People’s Park', 'parks', 'City center', 'Municipal Government life and tourism page', 'https://www.inabanga.gov.ph/life-in-csf/'),
  place('freedom-park', 'Freedom Park / Heroes Hill', 'parks', 'Municipality of Inabanga', 'Provincial tourism destination list', tourismSource),
  place('poro-baywalk', 'Poro Point Baywalk', 'parks', 'Poro Point Freeport Zone', 'Poro Point Management Corporation Baywalk page', 'https://poropointfreeport.gov.ph/new/poro-point-baywalk/'),
  place('botanical-garden', 'Bohol Botanical and Zoological Garden', 'parks', 'Barangay Cadaclan', 'Provincial tourism destination list', tourismSource),
  place('airport', 'Poro Point Inabanga Airport', 'transport', 'California Avenue, Barangay Canaoay', 'Bohol provincial agency directory · Feb. 27, 2026', agencyDirectory),
  place('seaport', 'Inabanga International Seaport', 'transport', 'Poro Point Freeport Zone', 'Poro Point Management Corporation seaport overview', 'https://poropointfreeport.gov.ph/investment/san-fernando-international-seaport/'),
  place('city-plaza-hotel', 'Plaza Hotel', 'stay', 'City center, Inabanga City', 'Google Hotels listing', 'https://www.google.com/travel/hotels/entity/ChcIutOGtvLN6uxxGgsvZy8xdGhjcHdkdhAB'),
  place('blue-marlin', 'Bohol Blue Marlin Resort', 'stay', 'Airport Road, Inabanga City', 'Google Hotels listing', 'https://www.google.com/travel/hotels/entity/ChkI5_n_5biqgM8wGg0vZy8xMWNsbWY4dG1tEAE?gsas=1'),
  place('jv-resort', 'J&V Hotel and Resort', 'stay', 'Purok 5, Barangay Sevilla', 'Google Hotels listing', 'https://www.google.com/travel/hotels/entity/ChoInMPWw9WRyuDSARoNL2cvMTFycGQ5emJkeBAB?gsas=1'),
  place('location-180', 'Location One Eighty', 'stay', 'Carlatan', 'Google Hotels listing', 'https://www.google.com/travel/hotels/entity/ChkIheTBweS0ku5sGg0vZy8xMWcyNHkweDV2EAE?gsas=1'),
  place('thunderbird', 'Thunderbird Resorts and Casinos Poro Point', 'stay', 'Poro Point Freeport Zone', 'Google Hotels listing', 'https://www.google.com/travel/hotels/entity/CgoIqeaItYPZ15x2EAE?gsas=1'),
  place('sfc-cathedral', 'Cathedral Parish of Saint William the Hermit', 'faith', 'City center', 'Google Maps listing and provincial tourism references', `${maps}${encodeURIComponent('Cathedral Parish of Saint William the Hermit Inabanga Bohol')}`),
  place('ma-cho', 'Ma-Cho Temple', 'faith', 'Barangay I', 'Provincial tourism destination list', tourismSource),
  place('friendship-pagoda', 'Filipino-Chinese Friendship Pagoda', 'faith', 'Municipality of Inabanga', 'Provincial tourism destination list', tourismSource),
  place('pindangan-ruins', 'Pindangan Ruins', 'faith', 'Barangay Parian', 'Municipal Government destination page', 'https://www.inabanga.gov.ph/pindangan-ruins/'),
  place('city-bus-terminals', 'More buses, jeepneys and local transport', 'transport', 'Inabanga City, Bohol', 'Live Google Maps category search', `${maps}${encodeURIComponent('bus terminals jeepney terminals tricycle terminals van transport Inabanga City Bohol')}`, 'Use live map results to check additional operators, boarding points and current service.'),
  place('bacsil-ridge', 'Bacsil Ridge Monument and Viewdeck', 'attractions', 'Barangay Bacsil', 'Provincial tourism destination list', tourismSource),
  place('carrile-tower', 'Car-rile Tower (Moro Watchtower)', 'attractions', 'Municipality of Inabanga', 'Provincial tourism destination list', tourismSource),
  place('christ-redeemer', 'Christ the Redeemer', 'attractions', 'Municipality of Inabanga', 'Provincial tourism destination list', tourismSource),
  place('science-centrum', 'Bohol Science Centrum and Museum', 'attractions', 'Barangay Cadaclan', 'Provincial tourism destination list', tourismSource),
  place('poro-lighthouse', 'Poro Point Lighthouse', 'attractions', 'Poro Point Freeport Zone', 'Provincial tourism destination list', tourismSource),
  place('city-beach-coast', 'Inabanga Beach Coast', 'attractions', 'Coastal barangays, Municipality of Inabanga', 'Provincial tourism destination list', tourismSource),
  place('carlatan-surf', 'Carlatan Surfing Area', 'parks', 'Barangay Carlatan', 'Provincial tourism destination list', tourismSource),
  place('kasay-sanctuary', 'Kasay Marine Sanctuary', 'parks', 'Barangay Kasay', 'Provincial tourism destination list', tourismSource),
  place('lingsat-sanctuary', 'Lingsat Marine Sanctuary', 'parks', 'Barangay Lingsat', 'Provincial tourism destination list', tourismSource),
  place('poro-mpa', 'Poro Marine Protected Area', 'parks', 'Poro Point coastal area', 'Provincial tourism destination list', tourismSource),
  place('city-offices-link', 'Municipal government departments and offices', 'government', 'Inabanga Municipal Hall', 'Official city departments directory', cityDepartments, 'Open the linked directory for individual city departments and service contacts.'),
  place('barangay-halls-link', 'All 59 barangay halls and profiles', 'government', 'All city barangays', 'Better Inabanga barangay directory', '/government/barangays', 'Open the city’s interactive barangay directory for each barangay and its profile.'),
  place('ev-charging', 'EV charging and fuel stops', 'everyday', 'Inabanga City, Bohol', 'Live Google Maps category search', `${maps}${encodeURIComponent('EV charging stations gas stations Inabanga City Bohol')}`),
  place('banking-map', 'More banks, ATMs, remittance and payment centers', 'finance', 'Inabanga City, Bohol', 'Live Google Maps category search', `${maps}${encodeURIComponent('banks ATMs remittance pawnshops money transfer payment centers Inabanga City Bohol')}`, 'Open the live map results for additional branches and payment agents; check current hours and service availability.'),
  place('pharmacies-map', 'Pharmacies and drugstores', 'health', 'Inabanga City, Bohol', 'Live Google Maps category search', `${maps}${encodeURIComponent('pharmacies drugstores Inabanga City Bohol')}`),
  place('schools-map', 'Public and private elementary and high schools', 'education', 'Inabanga City, Bohol', 'DepEd Region 1 school registry and Google Maps', 'https://deped.ro1apps.com/schoolreg', 'The 2026 provincial list covers tertiary schools; use the DepEd registry for basic education schools.'),
  place('city-clinics-map', 'Clinics, dentists and diagnostic centers', 'health', 'Inabanga City, Bohol', 'Live Google Maps category search', `${maps}${encodeURIComponent('clinics dentists diagnostic centers Inabanga City Bohol')}`),
  place('city-hotel-map', 'More hotels, resorts, inns and homestays', 'stay', 'Inabanga City, Bohol', 'Live Google Maps search · 2024 city profile reports 129 accommodation establishments', `${maps}${encodeURIComponent('hotels resorts inns hostels apartments transient houses homestays Inabanga City Bohol')}`, 'The named list combines a 2024 accommodation inventory and current map results, but does not represent all 129 establishments. Map results may include nearby municipalities; verify location, current operation and availability before booking.'),
  place('city-everyday-map', 'Post, internet, utilities and essential services', 'everyday', 'Inabanga City, Bohol', 'Live Google Maps category search', `${maps}${encodeURIComponent('post office internet providers utilities Inabanga City Bohol')}`),
]

const placeByIdentity = new Map<string, PlaceRecord>()
for (const item of [...agencyPlaces, ...cityOfficePlaces, ...barangayHallPlaces, ...tourismPlaces, ...tenantPlaces, ...namedPlaces]) {
  placeByIdentity.set(`${normalizePlaceName(item.name)}|${normalizePlaceName(item.address)}|${item.category}`, item)
}

export const places: PlaceRecord[] = [...placeByIdentity.values()]

function normalizePlaceName(name: string) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

export function googleMapsSearch(place: Pick<PlaceRecord, 'name' | 'address'>) {
  return `${maps}${encodeURIComponent(`${place.name}, ${place.address}, Inabanga City, Bohol`)}`
}

export function categoryMapsSearch(category?: PlaceCategory) {
  const query = category
    ? `${category.mapQuery} in Inabanga City, Bohol, Philippines`
    : 'places and businesses in Inabanga City, Bohol, Philippines'
  return `${maps}${encodeURIComponent(query)}`
}
