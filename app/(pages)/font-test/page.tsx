import { Inter, Titillium_Web, DM_Sans, Roboto_Condensed, Rajdhani, Barlow, Chivo, Saira_Semi_Condensed, Exo_2, Red_Hat_Display, IBM_Plex_Sans } from 'next/font/google';

const titilliumWeb = Titillium_Web({ 
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-titillium'
});

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans'
});

const robotoCondensed = Roboto_Condensed({ 
  subsets: ['latin'],
  variable: '--font-roboto-condensed'
});

const rajdhani = Rajdhani({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani'
});

const barlow = Barlow({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow'
});

const chivo = Chivo({ 
  subsets: ['latin'],
  variable: '--font-chivo'
});

const sairaSemiCondensed = Saira_Semi_Condensed({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-saira'
});

const exo2 = Exo_2({ 
  subsets: ['latin'],
  variable: '--font-exo2'
});

const redHatDisplay = Red_Hat_Display({ 
  subsets: ['latin'],
  variable: '--font-red-hat'
});

const ibmPlexSans = IBM_Plex_Sans({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex'
});

const FontTest = () => {
  const sampleHeading = "Precision CNC Machining Solutions";
  const sampleSubheading = "Advanced Manufacturing Technology";
  const sampleParagraph = "MetalKraft specializes in high-precision CNC machining, offering state-of-the-art manufacturing solutions for complex industrial components. Our advanced machinery and expert team ensure exceptional quality and precision in every project.";
  const sampleTechnicalSpec = "Machining Capabilities: Up to 5-axis simultaneous machining | Tolerance: ±0.001mm | Materials: Aluminum, Steel, Titanium";

  const fontSections = [
    { name: 'Titillium Web', className: titilliumWeb.className },
    { name: 'DM Sans', className: dmSans.className },
    { name: 'Roboto Condensed', className: robotoCondensed.className },
    { name: 'Rajdhani', className: rajdhani.className },
    { name: 'Barlow', className: barlow.className },
    { name: 'Chivo', className: chivo.className },
    { name: 'Saira Semi Condensed', className: sairaSemiCondensed.className },
    { name: 'Exo 2', className: exo2.className },
    { name: 'Red Hat Display', className: redHatDisplay.className },
    { name: 'IBM Plex Sans', className: ibmPlexSans.className },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Font Test Page</h1>
      
      {fontSections.map((font, index) => (
        <div key={index} className="mb-12 p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-primary-600">{font.name}</h2>
          
          <div className={font.className}>
            {/* Heading */}
            <h3 className="text-4xl font-bold mb-2">{sampleHeading}</h3>
            
            {/* Subheading */}
            <h4 className="text-2xl font-semibold mb-4 text-gray-700">{sampleSubheading}</h4>
            
            {/* Body Text */}
            <p className="mb-4 text-lg">{sampleParagraph}</p>
            
            {/* Technical Specifications */}
            <p className="text-sm font-medium text-gray-600">{sampleTechnicalSpec}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FontTest;
