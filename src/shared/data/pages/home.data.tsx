import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
  IconUpload,
  IconSettings,
  IconCalculator,
  IconBuildingFactory2,
  IconCertificate,
  IconTruck,
  IconRuler,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';
import heroImg from '~/assets/images/hero.jpg';
import millingImg from '~/assets/images/CNC MILLING.png';
import turningImg from '~/assets/images/turning.png';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Expert CNC Machining Solutions <span className="hidden md:inline"></span>
      <br />
       <span></span>{' '}
      <span className="sm:whitespace-nowrap">for Every Industry</span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold">
          MetalKraft CNC 
        </span>{' '}
        specializes in high-quality machining services including{' '}
        <em>CNC milling</em>, <em>turning</em> and <em>Custom Component Production</em>.
        <br />
        From prototypes to production runs, we deliver precision-engineered solutions for automotive, aerospace, and beyond.
      </span>
    </>
  ),
  callToAction: {
    text: 'Request a Quote',
    href: '/contact#form',
    icon: IconMail,
    targetBlank: false,
  },
  // callToAction2: {
  //   text: 'Learn more',
  //   href: '/',
  // },
  image: {
    src: heroImg,
    alt: 'Hero MetalKraft CNC',
  },
  items: [
    {
      title: 'ISO 9001:2015 Certified',
      description:
        'Maintaining highest quality standards',
      icon: IconComponents,
    },
    {
      title: 'Advanced Inspection',
      description:
        'State-of-the-art measurement equipment',
      icon: IconRuler,
    },
  ],
};

export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: true,
  className: 'bg-slate-100 dark:bg-slate-800/40',
  header: {
    title: 'Quality Assurance',
    subtitle:
      'Our commitment to excellence',
  },
  columns: 2,
  items: [
    {
      title: 'ISO 9001:2015 Certified',
      description:
        'Maintaining highest quality standards',
      icon: IconComponents,
    },
    {
      title: 'Advanced Inspection',
      description:
        'State-of-the-art measurement equipment',
      icon: IconRuler,
    },
  ],
};

// Features data on Home page *******************

// Industry Solutions data on Home page *******************
export const features2Home: FeaturesProps = {
  id: 'features2-on-home',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Industry Solutions',
    subtitle: 'Expertise in precision manufacturing for diverse industries',
    tagline: 'Industry Solutions',
  },
  items: [
    {
      title: 'Aerospace',
      description:
        'Precision components for aircraft, spacecraft, and defense applications.',
      icon: IconComponents,
      callToAction: {
        text: 'Learn more',
        href: '/industries/aerospace',
      },
    },
    {
      title: 'Automotive',
      description:
        'High-performance components for the automotive industry, from prototypes to production runs.',
      icon: IconListCheck,
      callToAction: {
        text: 'Learn more',
        href: '/industries/automotive',
      },
    },
    {
      title: 'Medical',
      description:
        'Precision components for medical devices, implants, and equipment.',
      icon: IconCheck,
      callToAction: {
        text: 'Learn more',
        href: '/industries/medical',
      },
    },
    {
      title: 'Energy',
      description:
        'Components for renewable energy systems, including solar, wind, and hydroelectric power.',
      icon: IconRocket,
      callToAction: {
        text: 'Learn more',
        href: '/industries/energy',
      },
    },
    {
      title: 'Consumer Products',
      description:
        'Precision components for consumer goods, from electronics to household appliances.',
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Learn more',
        href: '/industries/consumer-products',
      },
    },
    {
      title: 'Industrial Equipment',
      description:
        'Components for industrial machinery, including pumps, valves, and gearboxes.',
      icon: IconBulb,
      callToAction: {
        text: 'Learn more',
        href: '/industries/industrial-equipment',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Advanced CNC Machining Solutions',
    subtitle: 'Precision Engineering for Complex Manufacturing Challenges',
    tagline: 'Capabilities',
  },
  content:
    'Our state-of-the-art CNC machining centers combine cutting-edge technology with expert craftsmanship to deliver exceptional results for your most demanding projects.',
  items: [
    {
      title: 'Vertical Machining Centers',
      description:
        'High-precision 3-axis to 5-axis milling capabilities for complex components, molds, and dies. Perfect for aerospace and automotive parts.',
    },
    {
      title: 'CNC Turning Solutions',
      description:
        'Advanced turning centers equipped for high-accuracy operations including facing, grooving, threading, and custom profile turning.',
    },
    {
      title: 'Multi-Material Expertise',
      description:
        'Comprehensive experience working with metals, plastics, and exotic materials. Our versatile capabilities ensure optimal results for any material.',
    },
  ],
  image: {
    src: millingImg,
    alt: 'CNC Machining Center',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'MetalKraft specializes in delivering end-to-end manufacturing solutions, from prototype development to full-scale production. Our commitment to quality and precision ensures your components meet exact specifications.',
  items: [
    {
      title: 'Computer-controlled machines',
    },
    {
      title: 'High Precision and Accuracy',
    },
    {
      title: 'Complex  Geometric and Rotational Shapes',
    },
    {
      title: 'Efficient for varied production scales',
    }
  ],
  image: {
    src: turningImg,
    alt: 'CNC Manufacturing Process',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: false,
  image: {
    src: millingImg,
    alt: 'CNC Manufacturing Process',
  },
  header: {
    title: 'Our Ordering Process',
    subtitle: 'From concept to completion, we ensure precision and quality at every step.',
  },
  items: [
    {
      title: 'Share Your Design',
      description: 'Send us your part design as a CAD file or drawing through our contact form or email.',
      icon: IconUpload,
      href: '/contact#form',
    },
    {
      title: 'Confirm Specifications',
      description: 'Collaborate with our team to finalize specifications and agree on a lead time that fits your requirements.',
      icon: IconSettings,
    },
    {
      title: 'Receive a Quote',
      description: 'Once we review your design, we\'ll provide a detailed quote tailored to your project needs.',
      icon: IconCalculator,
    },
    {
      title: 'Manufacturing',
      description: 'We start production with our trusted processes, ensuring accuracy and quality throughout.',
      icon: IconBuildingFactory2,
    },
    {
      title: 'Quality Control',
      description: 'All parts undergo thorough inspections to meet the required standards before delivery.',
      icon: IconCertificate,
    },
    {
      title: 'Delivery',
      description: 'Your components are securely packaged and delivered promptly to your location.',
      icon: IconTruck,
    },
  ],
};

// Call to Action data on Home page *******************
export const callToActionHome: CallToActionProps = {
  id: 'cta-home',
  hasBackground: true,
  title: 'Ready to Transform Your Manufacturing Vision?',
  subtitle: 'Contact us today to discuss your CNC machining needs and get a custom quote for your project.',
  callToAction: {
    text: 'Request a Quote',
    href: '/contact#form',
    icon: IconMail,
    targetBlank: false,
  },
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Find answers to common questions about our CNC machining services, capabilities, and processes.',
    tagline: 'FAQs',
  },
  items: [
    {
      title: 'What industries do you serve?',
      description: 'We specialize in serving automotive, aerospace, electronics, and general engineering industries. Our precision CNC machining capabilities cater to diverse manufacturing needs across these sectors.',
    },
    {
      title: 'What is the typical turnaround time?',
      description: 'Depending on project complexity, our standard delivery time ranges from 1 to 4 weeks. We provide specific timeline estimates after reviewing your project requirements and specifications.',
    },
    {
      title: 'Can you handle custom designs?',
      description: 'Absolutely! We work with client specifications to deliver tailor-made components. Our team can work from your CAD files or help develop designs based on your requirements.',
    },
    {
      title: 'What materials do you work with?',
      description: 'We handle a wide range of materials including metals like aluminum, steel, brass, and plastics like nylon and acrylic. Our machines are equipped to work with various material specifications and grades.',
    },
    {
      title: 'Do you provide quality certification?',
      description: 'Yes, we provide detailed quality inspection reports and material certifications as needed. Our quality control processes ensure all components meet specified tolerances and industry standards.',
    },
    {
      title: 'What are your minimum order quantities?',
      description: 'We accommodate both prototype and production runs. Our capacity allows us to handle orders ranging from single prototypes to large production batches.',
    },
  ],
};
