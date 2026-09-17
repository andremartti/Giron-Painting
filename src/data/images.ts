/**
 * Photo catalog.
 *
 * These are royalty-free placeholder photos from Unsplash (Unsplash License).
 * Replace them with the company's own project photos: drop the files in
 * `public/images/` and change the value to the path, e.g. "/images/hero.jpg".
 *
 * Alt text lives in the translation files (`src/i18n`) so it can be translated.
 */
export const images = {
  hero: 'photo-1756435292384-1bf32eff7baf',
  estimateCta: 'photo-1762811054947-605b20298615',
  whyUs: 'photo-1745665777586-09381ba528d6',

  aboutMain: 'photo-1613844044163-1ad2f2d0b152',
  aboutDetail: 'photo-1693985120993-e9b203ce7631',

  serviceInterior: 'photo-1562259949-e8e7689d7828',
  serviceExterior: 'photo-1574359411659-15573a27fd0c',
  serviceResidential: 'photo-1676802037786-3697d60497ae',
  serviceCommercial: 'photo-1772300164438-f73307d3b645',
  serviceRemodeling: 'photo-1682888813913-e13f18692019',
  serviceDrywall: 'photo-1768839725085-829e6ac7ac26',
  serviceCabinets: 'photo-1652918320907-f9ec8623ab30',
  serviceRenovations: 'photo-1634586648651-f1fb9ec10d90',

  projectInteriorRoom: 'photo-1789352050099-add5a055b233',
  projectInteriorLiving: 'photo-1724582586529-62622e50c0b3',
  projectInteriorOpen: 'photo-1600210492493-0946911123ea',
  projectExteriorFarmhouse: 'photo-1680645944941-da9198d7f6aa',
  projectExteriorBrick: 'photo-1707872732780-f98cf7592e2c',
  projectExteriorSiding: 'photo-1746311529146-b22d1e4524d7',
  projectRemodelBath: 'photo-1584622650111-993a426fbf0a',
  projectRemodelKitchen: 'photo-1601760561441-16420502c7e0',
  projectConstructionFraming: 'photo-1693639767415-27ff64ce4da2',
  projectConstructionInterior: 'photo-1768321914149-5a6428ec2f82',
  projectCommercialLobby: 'photo-1758448721162-0c77cf477d6f',
  projectCommercialOffice: 'photo-1758630737900-a28682c5aa69',
} as const;

export type ImageKey = keyof typeof images;
