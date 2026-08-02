// ==========================================================================
// PLACEHOLDER SITE LOGIC (Alpine.js components)
// Replace FORM_ENDPOINTS below with your real Formspree endpoints before
// going live. See README.md for setup steps.
// ==========================================================================

const FORM_ENDPOINTS = {
  enquiry: 'https://formspree.io/f/YOUR_ENQUIRY_FORM_ID',
  careers: 'https://formspree.io/f/YOUR_CAREERS_FORM_ID',
};

// Compliance map path data below traces Australia's real state borders
// (public-domain geography), plotted on a 0 0 500 480 viewBox.
const COMPLIANCE_STATES = [
  { code: 'WA', name: 'Western Australia', labelX: 119, labelY: 233,
    path: 'm 166.2,72.77 c -2.1,0.12 -0.6,3.24 -2.8,3.41 -1.2,0.62 -2.8,1.6 -3.8,0.41 -1.3,0.81 -2.2,3.21 -2.9,0.46 -0.1,-0.96 -1.5,-1.41 -0.9,0 1.8,2.73 -0.2,6.65 -3.2,7.15 -0.4,-0.4 0,-1.9 -1.3,-1.2 -1.6,0.6 -3.6,0.9 -5,1.7 0.1,2 1.2,4.1 1,6 -1.3,0.4 -3.3,-1.6 -4.1,-0.3 -0.8,1.7 0.4,3.7 0.1,5.2 -1.7,-1.1 -4.6,-0.8 -5,1.3 0.7,2 1.3,4.1 -0.5,5.7 -1.2,1.3 -2.6,4.5 0.1,5 0.9,0.9 -0.1,3.1 -1.5,2.2 -3,0.3 -4.1,-2.7 -6.3,-3.7 -2.2,-0.4 -5.2,-1 -4.2,2.3 -0.7,2.5 1,4.2 2.4,5.9 0.6,1 1.9,3.9 -0.4,3.5 -1.8,1.1 -0.6,4.6 -1.7,5.9 -3.4,-3.9 -5.6,-9 -8.7,-12.8 -1,3.1 -3.2,6.3 -6.5,7.4 -0.8,2 -2,4.5 -1.4,6.6 0.6,2.2 2.5,4.6 2.4,6.8 -2,2.5 -3.8,5.3 -6.4,7.1 -1.6,3.8 -2,8.4 -5.6,11.3 -1.79,2 -3.27,4.4 -6.14,4.8 -5.48,1.9 -10.65,5 -16.39,5.9 -2.61,-0.7 -4.83,-0.5 -6.18,2.1 -2.73,3.8 -8.08,3.2 -11.56,6 -2.65,1.4 -4.96,4.2 -8.26,3.2 -2.95,0.3 -6.51,-1.3 -8.61,1.4 -4.31,3.3 -8.46,6.8 -10.98,11.6 -1.75,2.8 -5.58,2.8 -7.83,5.1 -4.52,2.2 -4.8,7.7 -7.53,11.4 -1.97,0.4 -1.57,-2.9 -1.75,-4.2 -0.28,-1.3 0.45,-3.4 -0.38,-4.4 -2.41,2.5 -2.69,6.4 -3.15,9.7 -0.35,2.8 2.5,4.8 2.33,7.7 1.48,4 -1.63,7.3 -2.81,11 -0.37,4 1.27,8.2 3.92,11.4 2.84,4.6 6.88,8.5 9.25,13.3 0.59,2.4 0.55,5.4 -0.95,7.3 -2.25,0.4 -1.58,-3.1 -3.07,-3.4 -1.35,1.4 1.12,3.7 1.55,5.1 -1.45,1.7 -4.91,1.7 -5.28,-0.9 -0.32,-0.8 -1.88,-2.9 -2.81,-2.3 2.25,4.7 7.19,7 10.54,10.7 3.43,5 3.98,11.3 8.03,15.9 2.49,4 6.06,7.3 7.88,11.6 1.98,6 2.48,12.5 6.35,17.7 2.87,5 6.25,9.9 8.78,15 0.3,5.5 1.08,11 2.08,16.3 -0.3,2.4 -1.3,4.5 -1.91,6.7 -2.48,0 -4.82,0 -3.33,3 0.82,1.6 0,5.2 2.07,5.4 5.91,-0.2 9,6.9 14.96,6.4 1.08,0.4 1.69,1.7 3.08,1 2.96,-0.1 6.09,-1.6 8.96,-0.7 1.3,1.4 4.04,0.5 3.83,-1.5 1.56,-0.5 3.65,-0.1 4.6,-2 2.48,-2.9 4.66,-6.6 8.87,-7 2.84,-0.5 2.14,-4.3 4.54,-5.6 2.5,-3.3 7,-2.5 10.6,-3.5 4.9,-0.5 9.7,-2.2 14.6,-1.8 3,2 6.7,-0.3 10,-0.5 2.3,-0.8 5.3,-0.6 7.3,-1.9 1.7,-3.2 2.7,-6.6 4,-10 6.8,-3.3 13.3,-7.3 19.5,-11.7 5.9,-1.3 12.1,0.1 17.9,-2 5.3,-1 10.3,-3.5 14.4,-6.8 0.3,-13.9 -0.9,-27.7 -1.3,-41.6 -2.4,-59.9 -4.2,-119.7 -6.3,-179.6 -1.8,0.2 -4.8,-1.2 -5.5,1.3 -1.8,0.2 -4.1,1.2 -3.9,3.5 -0.1,1.4 -0.9,0.8 -0.7,-0.3 -0.6,-2.6 1.1,-6 -1.6,-7.5 -3.8,-3.82 -7.7,-8.13 -13.2,-9.23 -0.8,-0.2 -1.6,-0.42 -2.3,-0.38 z',
    summary: 'Roadworthy check not mandatory for a private used-car sale',
    body: 'Western Australia does not require a mandatory pre-sale inspection for most private used-car sales, though a licensed dealer must still disclose known defects. If you’re registering an interstate or previously written-off vehicle, WA may require an inspection before plates are issued.' },
  { code: 'NT', name: 'Northern Territory', labelX: 254, labelY: 150,
    path: 'm 293.5,35.25 c -0.1,-0.1 -0.5,0.45 -0.9,0.87 -0.9,0.68 -1.3,1.89 -1.1,2.97 0.8,-0.8 1.6,-1.84 2,-2.93 0.1,-0.63 0.1,-0.87 0,-0.91 z m -61.2,0.87 c -0.1,0.21 -0.2,0.4 -0.4,0.6 -0.2,0.76 -0.8,1.04 -1.5,1.03 0,0.43 1.4,1.11 2,1.63 0.2,0 1.2,1.11 1.1,0.59 -0.4,-1.28 -0.8,-2.6 -1.2,-3.85 z m 3,0.54 c -1.3,0.77 -0.8,2.78 -1.3,4 2.1,0.16 6.3,-0.9 6.4,2.4 -0.3,1.74 1.3,4.98 -1,5.56 -2.9,1.15 -5.6,3.23 -8.8,2.29 -2.2,0.11 -4.9,-0.89 -6.9,0 -0.5,2.03 -3,-1.43 -4,0.34 -1.9,1.51 -0.6,3.92 -0.2,5.84 -1.5,-0.66 -2.9,-2.48 -4.5,-2.5 -1,2.35 -5,1.54 -4.9,4.66 0,1.04 -1.3,2.96 -0.4,3.69 1.8,-0.79 1.7,2.21 1.3,3.22 -0.9,2.14 -3.4,1.41 -5.2,1.15 -1.6,2.34 -2.1,5.81 -4.5,7.38 -1.6,0.37 -1.4,2.43 -1.9,3.59 1.5,2.16 3.9,3.88 4.8,6.28 -1.8,1.08 -0.8,3.28 -1,5 -1.4,0.72 -2.8,-1.54 -4,-2.18 -1.4,-1.29 -3.1,-2.92 -5.2,-2.16 1.4,48.18 3.3,96.38 4.5,144.58 1,1.2 4.3,0.1 6.1,0.4 29,-0.6 58.1,-1.4 87.2,-0.6 4.4,0 9.1,0.4 13.5,0 1.1,-41.6 2.2,-83.3 3,-124.9 -3.8,-2.7 -7.4,-6.36 -12.3,-6.36 -1.9,-0.52 -3.7,-0.28 -5.4,0.6 -1.5,-1.6 -1,-4.41 -1.6,-6.41 -0.3,-2 -3.1,-2.4 -4.6,-3.44 -2.1,-0.48 -5.1,-1.28 -5.1,-4 0.8,-5.52 4,-10.41 5.6,-15.59 -0.6,-0.1 -2.4,0.89 -1.8,-0.53 0.6,-1.68 0.5,-5.07 1.5,-5.69 1.8,1.63 2.7,2.26 2.1,-0.5 -0.1,-0.98 1.6,-2 1.5,-0.47 1.9,1.4 4.4,-0.96 3.7,-2.97 -1.4,-1.12 -0.2,-2.03 1,-2.46 1.6,-1.62 3,-4.05 3,-6.35 -1.3,-0.79 -3.4,2.11 -4.2,0 -0.7,-1.16 -0.6,-3.14 -1.6,-3.91 -2.6,1.43 -1,5.62 -3.5,7.19 -0.9,0.33 -2.4,0.76 -2,-0.87 -0.3,-0.93 0.7,-4.01 -1.2,-3.28 -1.7,-0.1 -0.7,-2.09 -0.6,-2.91 -3.3,0 -6.3,1.67 -8.6,3.94 -2.4,-1.06 -4.4,-3.44 -7,-3.69 -4,0.68 -8.5,0.42 -11.7,-2.38 -0.3,-1.95 -2,0.91 -3.2,0.1 -3.4,-0.44 -6.5,-2.07 -8.5,-4.88 -0.9,-1.9 -1.6,2.32 -2.9,0.78 -1.8,-1.22 -3.4,-3.45 -5.6,-3.96 z m -12.4,0.22 c -1.4,0.7 -2.2,2.29 -3.9,2.28 -1.2,0.1 -2.4,0.67 -3.5,0.46 -1.4,-0.6 -2.8,-1.64 -4.2,-2.15 0.6,1.51 1.3,3.11 2.2,4.47 1.6,1.03 3.3,2.06 5,3.09 1.8,-0.85 3.8,-1.2 5.4,-2.37 0.6,-0.67 1.4,-1.31 1.6,-2.07 -0.3,-0.94 -0.1,-2.23 -1.2,-2.68 -0.4,-0.35 -0.9,-0.82 -1.4,-1.03 z m -13.1,2.5 -0.9,0.59 c -1.1,0.31 -0.8,1.45 -0.9,2.37 0,0.71 -0.4,1.55 -0.1,2.19 1.7,0 3.5,-0.18 5.2,-0.44 -1.1,-1.61 -2.2,-3.21 -3.3,-4.71 z M 293,69.72 c -0.1,-0 -0.2,0 -0.3,0.34 -0.4,0.37 -0.7,1.39 -1.3,0.66 -0.6,-0.26 -0.3,1.56 -0.5,2.12 -0.1,1.3 -0.1,2.85 1.2,3.6 1.3,0.47 3,0.33 4.2,-0.38 0.5,-0.59 -0.2,-1.5 -0.2,-2.18 -0.3,-1.15 -0.4,-2.41 -0.8,-3.47 -0.6,0.12 -1.1,1.01 -1.7,0.84 -0.3,-0.2 -0.3,-1.42 -0.6,-1.53 z',
    summary: 'No mandatory roadworthy for a standard private sale',
    body: 'The Northern Territory generally doesn’t require a roadworthy inspection for a straightforward private used-car sale. Vehicles being re-registered after being unregistered for an extended period, or written-off/repaired vehicles, are assessed separately and usually need an inspection.' },
  { code: 'QLD', name: 'Queensland', labelX: 390, labelY: 200,
    path: 'm 373.1,32.44 c -2.3,0.96 -5.7,2.21 -5.4,5.28 -1,3.08 -3.9,5.23 -4.4,8.59 -0.3,1.81 -1.4,3.08 -3.2,3.38 -1.2,1.78 -1.4,4.31 -1.8,6.37 1.6,0.7 2.2,1.45 1.3,3.32 -0.3,3.92 -1.9,7.54 -3.2,11.18 -0.7,6.28 -0.5,12.68 1,18.88 -3.5,10.66 -6.4,21.76 -11.9,31.56 -3.1,1.2 -6.4,2 -9.6,2.9 -3.5,-2.6 -7.8,-4.2 -10.7,-7.5 -0.7,-3.1 -3.5,-5 -6.5,-5.8 -3.5,-1 -7.3,-1.8 -9.5,-5 -0.9,-0.1 0,3.2 -0.4,4.1 -1,40 -2,80.1 -2.8,120.1 11.8,0.7 23.7,0.8 35.5,1.7 -0.5,13.3 -1.5,26.5 -2,39.8 30.8,2.7 61.6,5.3 92.5,7.7 3,-0.8 5,-3.8 7.9,-4.4 3.6,0.5 7.8,-0.8 10.8,1.7 2.4,0.4 5,0.7 6.8,2.7 1.9,1.4 3.1,3.5 2.6,5.8 1.5,-2.1 3.8,-3 6.4,-2.6 2.4,0.7 0.7,-2.6 1.4,-3.9 1.5,-2.1 4.6,-2.3 6.8,-3.7 3,0.6 6.2,3.1 9.2,1.4 1.3,-0.4 3,-0.9 2,-2.6 -0.5,-4.2 -2.2,-8.4 -1.8,-12.7 0.4,-0.7 1.2,-0.7 0.9,-1.9 0,-4.5 -0.1,-9 0.6,-13.5 -2.6,-2.5 -1.2,-6.5 -2.3,-9.5 -3.4,-1.4 -2.4,-5.5 -4,-8.1 -2.3,-1.8 -4.2,-3.9 -4.9,-6.7 -0.9,-3.4 -5.3,-3.2 -6.8,-6 -1.7,-2.3 -4.5,-4.2 -3.9,-7.4 -0.4,-4.4 0,-9 -1.1,-13.2 -0.8,0.5 -0.3,3.2 -1.8,2.1 -2.1,-1.5 -4.2,-3.4 -5.3,-5.7 -1.8,0.6 0,4 -2.5,3.8 -2.6,1 -2.6,-2.6 -3.3,-4.2 -0.9,-3 0.5,-6.4 -0.6,-9.4 -2.9,-2.3 -2.1,-7.2 -4.9,-9.6 -1.1,-0.7 -3,-1.6 -2.1,-3.2 -0.4,-1.6 2.4,-0.8 1.6,-2.5 -1.3,-2.1 -3.4,-4.1 -5.8,-4.1 -2,-2.4 -4.3,-5.4 -7.8,-4.9 -1.9,-1.3 -1.2,-4.7 -3,-6.1 -4.8,0.2 -8.7,-2.9 -12.6,-5.2 -0.2,-1.8 0.6,-4.2 -0.7,-5.5 0.3,-1.9 -3.2,-2 -2.1,-4.2 0.5,-6.1 0.4,-12.6 -1.7,-18.4 -4.2,-2.1 -4.9,-7.4 -5.5,-11.6 -0.9,-4.7 -0.7,-9.44 -0.1,-14.08 -2.5,-3.84 -7.6,-5.66 -8.9,-10.34 -1.7,-2.04 -4.5,0.66 -6.3,1.38 -1.7,1.24 -3.1,-1.67 -4.4,-2.63 -1.5,-3.68 -1.5,-7.92 -2.5,-11.78 -1,-4.8 -1,-10.12 -4.4,-14.03 -0.9,-1.71 -0.4,-3.74 -0.6,-5.6 -1.5,0.4 -3.2,-0.32 -2.9,-2.18 -0.5,-4.63 -0.2,-9.47 -1.1,-14 l -0.1,0 -0.1,0 z m -43.5,73.16 c -1.2,0.8 -2.3,1.9 -3.4,2.7 0.4,0.5 0.6,2 1.5,1.3 1.7,-0.7 3.5,-1.4 5.1,-2.2 -0.9,-0.7 -2,-1.7 -3.2,-1.8 z m 159.5,124.9 c 0.2,2.1 -1.7,3.5 -2.7,5.1 0,1.8 -0.4,3.6 -0.3,5.2 1.3,-1.5 2.4,-3.2 3.6,-4.8 0.3,-1.6 0.7,-3.3 -0.2,-4.8 -0.1,-0.2 -0.2,-0.5 -0.4,-0.7 z',
    summary: 'Safety Certificate required before a registered vehicle changes hands',
    body: 'In Queensland, most vehicles more than 6 months old need a current Safety Certificate before the sale is settled and rego transferred, unless it’s an unregistered vehicle sale. We can help point you to an approved inspection station near you.' },
  { code: 'SA', name: 'South Australia', labelX: 272, labelY: 275,
    path: 'm 265.3,229.8 c -3.6,0 -7.2,0.1 -10.8,0.1 -18.7,0.1 -37.3,0.5 -55.9,0.9 1.3,20.8 1.8,41.6 2.8,62.5 l 0.6,12.9 c 4.9,-2.7 10.8,-1.7 16.2,-2.4 6.1,0 13.2,-1.9 18.2,2.5 2,1.5 4.2,4 7,2.5 3.1,-0.3 5.6,3.1 8.6,2.9 0.1,-0.9 0.7,-1.5 1.5,-0.6 2.3,2.1 4.4,4.9 7.8,5.1 2.4,0.2 0.2,2.9 0.1,4.1 -1.1,1.8 1.8,2.7 2.9,3.9 1.5,0.6 3.6,0.6 4.4,2.4 1.3,2.4 1.1,5.4 3.5,7.1 2.1,2.9 3.4,6.7 3.1,10.3 -0.9,0.8 -2.1,-1.8 -3.1,-1.2 0.5,1.6 2.8,2.3 4,3.4 1.6,0.7 3.1,2.5 4.7,2.5 0.3,-1 0.3,-2.5 -1,-2.7 0.5,-3.6 4.8,-5.3 5.9,-8.7 2.2,-2.7 5.4,-4.8 8.8,-5.3 2.6,-3.2 4.8,-6.7 6.4,-10.4 0.5,-1.3 0.1,-3.8 0.9,-4.7 1.1,2.7 1.9,5.7 2.4,8.5 -1.7,0.6 -0.7,3.3 -1.5,4.6 -1.6,4.2 -5.3,7.8 -5.1,12.6 -0.3,2.4 0.1,5.9 -3.1,6.2 -1.2,0.2 -3.1,-0.3 -2.9,1.6 -0.5,0.9 -0.4,3.3 1.1,2.3 2.2,-1.3 5.1,-0.7 7.4,-1.6 1.2,-3.9 1.7,-8.5 4.6,-11.7 2.2,1.1 2.8,4.2 3.8,6.2 1.6,4.4 -1.9,8.4 -3.6,12.1 4.4,1.1 8.6,-1.5 12.7,-2 -0.7,2.1 -1.9,4.1 0.3,5.9 2.8,3.9 5.2,9 3.4,13.8 -0.4,4.1 2.2,7.9 4.5,11.1 1.3,1.5 3.2,3.7 5.3,3.7 2,-23.9 3.2,-47.9 4.8,-71.9 1.7,-28.7 3.7,-57.5 4.9,-86.3 -25.1,-1.6 -50.4,-2.2 -75.6,-2.2 z m 30.3,127.5 c -0.3,0.1 -0.7,0.2 -1,0.4 -1,0.3 -2,0.6 -2.9,1 -1.4,0.5 -2.9,0.9 -4.1,1.4 0.3,0.8 0.4,1.8 1,2.5 2.9,0.2 5.8,0.8 8.7,0.7 0.9,-0.2 1.5,-1 1.7,-1.8 1.5,-0.1 3.1,0.2 4.5,-0.1 -0.1,-1.1 -1.5,-1.3 -2.5,-1.5 -0.9,-0.2 -1.8,-0.4 -2.8,-0.6 0.1,-0.7 0,-1.6 -0.9,-1.6 -0.5,-0.2 -1.1,-0.4 -1.7,-0.4 z',
    summary: 'No general roadworthy required for a private sale',
    body: 'South Australia doesn’t require a standard roadworthy inspection for most private used-car sales, though the vehicle must still be safe and roadworthy in practice. Imported, re-registered or previously written-off vehicles usually need a separate inspection first.' },
  { code: 'NSW', name: 'New South Wales', labelX: 405, labelY: 320,
    path: 'm 339.5,272 c -1.6,21.7 -2.6,43.6 -4.2,65.3 2.7,0.8 5.2,3.1 8,2.9 2.7,-1.6 7.4,-0.7 8,2.9 0.8,1.8 1,4.2 2.3,5.6 1.6,-0.5 2.2,-3.4 3.9,-1.5 1.8,1.4 5.5,1.5 4.6,4.4 -0.2,2.2 0.5,4.2 2.5,5.3 4,3.1 7.2,7.1 10.4,10.9 1.6,1.4 2.9,-0.4 3.1,-1.8 1.9,-1.2 4.6,-1.2 6.6,-0.4 2.6,2.6 6.4,3.6 9.9,2.9 2.6,0.3 5,3.2 7.5,1.3 3.2,-1.7 8.8,-0.5 8.9,3.8 0.6,2.5 0.9,5.1 0,7.5 5.7,3.9 11.5,8 17.4,11.5 1.1,-2.6 0.6,-5.7 2.1,-8.2 2.2,-4.1 3,-8.8 4.4,-13.2 1.5,-2.8 3.3,-5.7 5.5,-8 0.7,0.3 1.6,0.8 1.8,-0.4 2.1,-5.1 4.2,-10.3 7.9,-14.5 1.1,-1.4 -0.6,-4.1 0.4,-4.9 3.1,0.2 3.9,-3.7 5.8,-5.5 1,-1.9 2.8,-3.1 4.9,-3.3 0.6,-0.5 0.1,-1.7 1.3,-2 2.2,-0.6 3,-2.6 3.7,-4.5 3.8,-4.7 7.9,-9.6 8.8,-15.7 0.7,-5.6 4.1,-10.1 5.8,-15.3 1.9,-5.5 4.8,-10.7 5.3,-16.6 0,-1.4 0.3,-3.4 -0.2,-4.7 -2.1,0.7 -4.2,2.3 -6.3,0.8 -2.4,-0.5 -4.8,-2.3 -7.1,-0.5 -1.4,1 -4.4,0.9 -4,3.4 0.9,3.2 -1.1,3.5 -3.8,3.1 -2.1,0 -3.4,1.8 -5,2.9 0.8,-4.7 -3.9,-8.5 -8.4,-8.2 -1.7,-0.7 -3,-2.3 -5.1,-2 -2.9,0.2 -6.5,-1.5 -8.7,1 -2.3,1.3 -4.2,4.2 -7.2,3.2 -30.2,-2.5 -60.5,-5.2 -90.8,-7.5 z m 85.6,90 c 0.6,0.6 2.9,1.6 0.9,2 -3.5,0.4 -2.6,5.1 -4.3,7 -2.5,-2 -2.9,-5.5 -1.4,-8.2 1.6,-1.1 3.2,-3.2 4.8,-0.8 z',
    summary: 'e-Safety Check ("Pink Slip") required before a used vehicle can be re-registered',
    body: 'In New South Wales, a vehicle more than 5 years old generally needs a current e-Safety Check (commonly still called a "Pink Slip") from an authorised inspection station before registration can be renewed or transferred.' },
  { code: 'ACT', name: 'Aust. Capital Territory', labelX: 459, labelY: 384,
    path: 'm 423.5,361.1 c -0.4,0.2 -0.9,0.5 -1.3,0.8 -0.8,0.6 -2,0.9 -2,2.1 -0.1,1.2 -0.7,2.6 -0.4,3.8 0.6,0.9 1.2,1.9 2,2.5 0.7,-1.9 1.2,-4 1.9,-5.9 0.9,-0.3 1.9,-0.6 2.8,-1 -1.2,-0.6 -2.1,-1.4 -3,-2.3 z m 25.1,13.8 c -3.5,0 -6.4,2.8 -6.4,6.4 l 0,5.5 c 0,3.5 2.9,6.4 6.4,6.4 l 20.8,0 c 3.5,0 6.4,-2.9 6.4,-6.4 l 0,-5.5 c 0,-3.6 -2.9,-6.4 -6.4,-6.4 l -20.8,0 z',
    summary: 'Inspection required when a vehicle changes hands',
    body: 'The ACT typically requires a roadworthiness inspection when a used vehicle is transferred between owners, arranged through an Access Canberra approved inspection station, before the transfer is finalised.' },
  { code: 'VIC', name: 'Victoria', labelX: 370, labelY: 380,
    path: 'm 335.4,338 c -1.4,17.6 -2.3,35.3 -3.7,52.9 2.5,1.1 5.3,1.9 6.8,4.4 1.9,-0.1 3.9,-1.2 5.8,-0.2 4.9,1.6 9,5 13.2,7.8 3.6,-0.7 6.9,-2.2 9.5,-4.8 1,-1.1 2.9,-1.1 3.9,-1.9 -1.6,-1.7 -2.5,-2.8 0.6,-3.3 1.6,-1.1 4.6,-1.4 5,1 0.1,1.9 -0.7,4.5 -3,4.2 2.2,1.8 4.6,-0.3 6.6,-1 0.8,2 0.7,4.7 2.1,6.3 2.9,0.3 4.1,3.9 6,5.7 0.9,1.6 1.9,-1.8 2.3,-2.6 -1,-0.2 -2.8,1.7 -2.7,-0.4 -0.8,-2.4 2.4,-1.8 3.8,-2.1 1.3,0 2.5,0.8 3.6,-0.5 4.6,-3.1 9,-6.6 14.5,-7.8 3.8,-1.1 8,0.1 12,-0.1 1.2,-0.4 3.4,0.8 4,-0.5 -0.2,-2 1.9,-1.2 2.9,-1.1 -5.3,-4.6 -11.6,-8 -17.3,-12 -1.7,-0.4 -0.8,-1.7 -0.3,-2.7 0.3,-2.7 -0.1,-5.9 -1.6,-8.3 -2.6,-2.5 -6.5,-1.1 -9.5,0.1 -2.4,-1 -5,-2.9 -7.7,-1.9 -3.1,0.1 -5.9,-1.3 -8.1,-3.3 -1.8,-0.1 -4.1,-0.4 -5.8,0.5 0,1.8 -1.5,2.8 -3.1,2.6 -3.8,-5.2 -8.2,-9.9 -13.4,-13.8 -0.5,-2 1.2,-5.3 -1.5,-6 -1.9,-0.7 -4.1,-3.5 -5.6,-0.6 -1.4,1.7 -2.5,-0.9 -2.8,-2.2 -0.9,-2.7 -1.7,-6.9 -5.6,-6.6 -2,-0.1 -3.7,2.1 -5.6,0.5 -1.8,-0.8 -3.5,-1.7 -5.3,-2.3 z',
    summary: 'Roadworthy Certificate (RWC) required before registering in your name',
    body: 'In Victoria, the seller generally must provide a current Roadworthy Certificate from a licensed vehicle tester before a used car can be registered in the buyer’s name.' },
  { code: 'TAS', name: 'Tasmania', labelX: 387, labelY: 450,
    path: 'm 403.4,420.4 c -0.2,0.2 -0.3,0.4 -0.5,0.6 -1.2,0.6 -0.1,1.7 0.1,2.6 0.4,1.2 0.7,2.6 1.3,3.6 0.7,-0.3 2,-0.2 1.6,-1.4 -0.1,-1 0.6,-2.2 -0.4,-3 l -2.1,-2.4 z m 2.5,8.1 c -0.3,0.2 -1.2,-0.2 -1.4,0.2 0.7,0.3 1.5,0.8 2.3,0.8 -0.1,-0.4 -0.5,-1 -0.9,-1 z m -36.1,0.9 c -0.6,2.2 -0.7,4.5 -1.1,6.7 1.3,3.6 2.1,7.3 3.8,10.7 0.7,1.4 1.7,2.8 2.4,4.2 -0.5,0.7 -0.9,1.5 -1.5,1.8 -0.5,-0.6 -0.7,-1.8 -1.3,-2.3 0.2,2.2 0.4,4.3 1,6.4 l 3.3,6.6 c 1.1,0.5 2.5,0.8 3.3,1.5 -0.5,0.6 -1.7,0.7 -1.9,1.6 0.4,1.1 1.9,0.8 2.9,1.1 1.4,0 2.5,0.8 3.7,1.6 0.7,0.1 1.4,-0.7 2.1,-1 1.1,-0.4 1,-1.9 1.6,-2.8 0.4,-0.9 0.6,-2.5 1.5,-1.1 0.3,0.2 0.8,1.3 1.1,0.5 l 3.3,-5.4 c 1.2,0.1 2.5,0.2 3.7,0.4 0.7,-2.1 1.1,-4.3 2,-6.3 0.9,-1.2 1.8,-2.7 2.8,-3.7 0.2,0.6 0,1.5 0.2,2 0.6,-3.4 1.2,-6.8 1.4,-10.2 0,-1.7 -0.1,-3.3 -0.1,-5 -0.8,-0.9 -1.7,-1.9 -2.5,-2.9 -0.3,0.6 -0.6,1.9 -1.5,1.2 -0.6,-0.2 -1.3,-0.9 -1.9,-0.7 -1,0.6 -1.6,2.1 -3,1.7 -1.6,0 -3.3,-0.4 -4.9,0.3 -1.2,0.3 -2.4,0.9 -3.6,1 -2,-0.6 -4.3,-0.6 -6.1,-1.8 -1.9,-1.6 -3.6,-3.6 -5.9,-4.6 -1,0.2 -2.2,0.8 -3,-0.2 -0.6,-0.4 -1.1,-1 -1.8,-1.3 z',
    summary: 'Inspection Report needed for older or re-registered vehicles',
    body: 'Tasmania generally doesn’t require a routine roadworthy check for a straightforward private used-car sale, but a Vehicle Inspection Report is required for vehicles being re-registered after a break in registration, or that are otherwise flagged for inspection.' },
];

function statCounter(target, opts = {}) {
  const suffix = opts.suffix || '';
  const decimals = opts.decimals || 0;
  return {
    display: (0).toFixed(decimals) + suffix,
    done: false,
    init() {
      const el = this.$el;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.done) {
            this.done = true;
            this.run(target, suffix, decimals);
            io.disconnect();
          }
        });
      }, { threshold: 0.4 });
      io.observe(el);
    },
    run(target, suffix, decimals) {
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = eased * target;
        this.display = (decimals ? val.toFixed(decimals) : Math.floor(val).toLocaleString()) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else this.display = (decimals ? target.toFixed(decimals) : target.toLocaleString()) + suffix;
      };
      requestAnimationFrame(step);
    },
  };
}

function gallery() {
  return {
    index: 0,
    slides: [1, 2, 3, 4, 5, 6],
    next() { this.index = (this.index + 1) % this.slides.length; },
    prev() { this.index = (this.index - 1 + this.slides.length) % this.slides.length; },
    goTo(i) { this.index = i; },
  };
}

function complianceMap() {
  return {
    active: 'NSW',
    select(code) { this.active = code; },
    get current() {
      return COMPLIANCE_STATES.find((s) => s.code === this.active) || COMPLIANCE_STATES[0];
    },
    // SVG doesn't give <template> elements a document fragment, so Alpine's
    // x-for can't clone into it — build the map with the DOM API instead and
    // drive it off Alpine's reactivity manually.
    initMap(svg) {
      const ns = 'http://www.w3.org/2000/svg';
      const self = this;
      COMPLIANCE_STATES.forEach((st) => {
        const path = document.createElementNS(ns, 'path');
        path.setAttribute('d', st.path);
        path.style.cursor = 'pointer';
        path.style.strokeWidth = '1.6';
        path.style.transition = 'fill .15s, stroke .15s, filter .15s';
        path.addEventListener('click', () => self.select(st.code));
        svg.appendChild(path);

        const text = document.createElementNS(ns, 'text');
        text.setAttribute('x', st.labelX);
        text.setAttribute('y', st.labelY);
        text.textContent = st.code;
        text.style.cursor = 'pointer';
        text.style.pointerEvents = 'none';
        text.style.fontFamily = 'Inter, system-ui, sans-serif';
        text.style.fontSize = '20px';
        text.style.textAnchor = 'middle';
        text.style.textTransform = 'uppercase';
        svg.appendChild(text);

        Alpine.effect(() => {
          const isActive = st.code === self.active;
          path.style.fill = isActive ? 'var(--accent)' : 'var(--card)';
          path.style.stroke = isActive ? 'var(--accent)' : 'var(--border)';
          path.style.filter = isActive ? 'drop-shadow(0 0 10px rgba(59,130,246,.6))' : 'none';
          text.style.fill = isActive ? 'var(--accent-contrast)' : 'var(--text-dim)';
          text.style.fontWeight = isActive ? '700' : '500';
        });
      });
    },
  };
}

// Shared by the homepage's "6 most recent" preview and the full stock.html
// listing — pass { limit: 6 } for the homepage, {} for the full page.
function stockSection(opts = {}) {
  const limit = opts.limit || null;
  return {
    cars: [],
    loading: true,
    filter: 'All',
    sort: 'newest',
    async init() {
      try {
        const res = await fetch('stock.json');
        this.cars = await res.json();
      } catch (e) {
        console.error('Failed to load stock.json', e);
      } finally {
        this.loading = false;
      }
    },
    get types() {
      return ['All', ...new Set(this.cars.map((c) => c.type))];
    },
    get sorted() {
      const list = this.filter === 'All' ? this.cars.slice() : this.cars.filter((c) => c.type === this.filter);
      if (this.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
      else if (this.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
      else list.sort((a, b) => new Date(b.posted) - new Date(a.posted));
      return list;
    },
    get filtered() {
      return limit ? this.sorted.slice(0, limit) : this.sorted;
    },
    priceLabel(car) {
      const price = '$' + car.price.toLocaleString('en-AU');
      return car.status === 'sold' ? ('Sold · ' + price) : price;
    },
    badgeClass(car) {
      return car.status === 'available' ? 'available' : car.status === 'on hold' ? 'on-hold' : 'sold';
    },
    // Homepage has its own #enquire section to scroll to; from stock.html
    // (no enquiry form on that page) hop to the homepage with the car name
    // carried in the URL so the message field still gets prefilled.
    enquireAbout(car) {
      const target = document.getElementById('enquire');
      if (target) {
        Alpine.store('enquiry').message = 'I’m interested in the ' + car.title + '.';
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = 'index.html?car=' + encodeURIComponent(car.title) + '#enquire';
      }
    },
  };
}

// Individual car page (car.html?slug=...) — pulls the matching entry out of
// the same stock.json, so a new sync just needs a slug to get its own page.
function carDetail() {
  return {
    car: null,
    loading: true,
    notFound: false,
    photoIndex: 0,
    async init() {
      const slug = new URLSearchParams(location.search).get('slug');
      try {
        const res = await fetch('stock.json');
        const cars = await res.json();
        this.car = cars.find((c) => c.slug === slug) || null;
        if (!this.car) this.notFound = true;
      } catch (e) {
        console.error('Failed to load stock.json', e);
        this.notFound = true;
      } finally {
        this.loading = false;
      }
    },
    get photos() {
      return this.car && this.car.photos && this.car.photos.length ? this.car.photos : ['placeholder'];
    },
    get descriptionParagraphs() {
      return this.car && this.car.full_description ? this.car.full_description.split('\n').filter((p) => p.trim()) : [];
    },
    nextPhoto() { this.photoIndex = (this.photoIndex + 1) % this.photos.length; },
    prevPhoto() { this.photoIndex = (this.photoIndex - 1 + this.photos.length) % this.photos.length; },
    goToPhoto(i) { this.photoIndex = i; },
    priceLabel() {
      const price = '$' + this.car.price.toLocaleString('en-AU');
      return this.car.status === 'sold' ? ('Sold · ' + price) : price;
    },
    // BETA — placeholder finance estimate only: (price / 1000) * 5 per week.
    // Not a real finance quote; replace with an actual lender calculation
    // before this is presented to customers as a genuine offer.
    financeLabel() {
      const perWeek = Math.round((this.car.price / 1000) * 5);
      return '$' + perWeek.toLocaleString('en-AU') + ' per week';
    },
    badgeClass() {
      return this.car.status === 'available' ? 'available' : this.car.status === 'on hold' ? 'on-hold' : 'sold';
    },
    enquire() {
      window.location.href = 'index.html?car=' + encodeURIComponent(this.car.title) + '#enquire';
    },
  };
}

function enquiryForm() {
  return {
    submitting: false,
    submitted: false,
    error: false,
    name: '',
    // Arriving from stock.html?car=... (a different page, so the Alpine
    // store didn't carry over) — prefill the message from the URL instead.
    init() {
      const car = new URLSearchParams(location.search).get('car');
      if (car) Alpine.store('enquiry').message = 'I’m interested in the ' + car + '.';
    },
    async submit(e) {
      this.submitting = true;
      this.error = false;
      const form = e.target;
      try {
        const res = await fetch(FORM_ENDPOINTS.enquiry, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (res.ok) this.submitted = true;
        else this.error = true;
      } catch (err) {
        this.error = true;
      } finally {
        this.submitting = false;
      }
    },
    reset() {
      this.submitted = false;
    },
  };
}

// Full application form on careers.html — supports a file upload (Resume/CV),
// which FormData picks up automatically from the <input type="file">.
function careersApplyForm() {
  return {
    submitting: false,
    submitted: false,
    error: false,
    name: '',
    async submit(e) {
      this.submitting = true;
      this.error = false;
      const form = e.target;
      try {
        const res = await fetch(FORM_ENDPOINTS.careers, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (res.ok) this.submitted = true;
        else this.error = true;
      } catch (err) {
        this.error = true;
      } finally {
        this.submitting = false;
      }
    },
    reset() {
      this.submitted = false;
    },
  };
}

document.addEventListener('alpine:init', () => {
  Alpine.store('enquiry', { message: '' });
  Alpine.store('careers', { position: '' });
  Alpine.data('nav', () => ({ open: false }));
  Alpine.data('statCounter', statCounter);
  Alpine.data('gallery', gallery);
  Alpine.data('complianceMap', complianceMap);
  Alpine.data('stockSection', stockSection);
  Alpine.data('carDetail', carDetail);
  Alpine.data('enquiryForm', enquiryForm);
  Alpine.data('careersApplyForm', careersApplyForm);
});
