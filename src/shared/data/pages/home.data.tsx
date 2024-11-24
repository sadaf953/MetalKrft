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
import processImg from '~/assets/images/process.png';

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
};


// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: true,
  columns: 3,
  header: {
    title: (
      <>
        Why Choose <span className="whitespace-nowrap">MetalKraft CNC</span>
      </>
    ),
    subtitle:
      "Experience excellence in precision manufacturing with our state-of-the-art CNC capabilities, industry expertise, and commitment to quality.",
    tagline: 'Features',
  },
  items: [
    {
      title: 'State-of-the-Art CNC Machinery',
      description:
        'Our Vertical Machining Centers (VMCs) and CNC Turning Machines deliver unmatched accuracy, reliability, and efficiency for diverse applications.',
      icon: IconComponents,
      callToAction: {
        text: 'Learn more',
        href: '/services',
      },
    },
    {
      title: 'Tailored to Your Needs',
      description:
        'We provide bespoke solutions from high-precision turning to prototype development, ensuring your project meets industry-specific requirements.',
      icon: IconListCheck,
      callToAction: {
        text: 'Learn more',
        href: '/services',
      },
    },
    {
      title: 'Exceeding Industry Standards',
      description:
        'With a commitment to quality, MetalKraft CNC adheres to stringent inspection protocols, ensuring products meet and exceed client expectations.',
      icon: IconCheck,
      callToAction: {
        text: 'Learn more',
        href: '/quality',
      },
    },
    {
      title: 'Efficient and Timely Delivery',
      description:
        'Our streamlined workflows and advanced CAD/CAM integrations ensure projects are completed on schedule without compromising precision.',
      icon: IconRocket,
      callToAction: {
        text: 'Learn more',
        href: '/process',
      },
    },
    {
      title: 'Environmentally Conscious Manufacturing',
      description:
        'We integrate eco-friendly practices into our machining processes, from resource-efficient operations to effective waste management.',
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Learn more',
        href: '/sustainability',
      },
    },
    {
      title: 'Client-Centered Collaboration',
      description:
        'We work closely with clients to develop innovative machining solutions, fostering long-term partnerships.',
      icon: IconBulb,
      callToAction: {
        text: 'Learn more',
        href: '/contact',
      },
    },
  ],
};

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
    title: 'Vertical Machining Centers (VMCs)',
    subtitle: 'Our VMCs deliver high-precision 3-axis milling operations, with future scalability for 4-axis and 5-axis machining.',
    tagline: 'Capabilities',
  },
  content:
    'They are perfect for producing intricate components, molds, and dies, catering to industries like aerospace and automotive.',
  items: [
    {
      title: 'CNC Turning Machines',
      description:
        'Our CNC turning machines are designed for high-accuracy operations such as facing, grooving, threading, and knurling.',
    },
    {
      title: 'Ideal Applications',
      description:
        'Ideal for cylindrical components like shafts and bushings, these machines ensure repeatability and exceptional quality.',
    },
    {
      title: 'Custom Solutions',
      description:
        'Both machines provide versatility in material handling, including metals (aluminum, steel, brass) and plastics (nylon, acrylic). This versatility enables tailored solutions for complex projects.',
    },
  ],
  image: {
    src: millingImg,
    alt: 'CNC Machining Center',
  },
  isReversed: false,
  isAfterContent: false,
};

export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  header: {
    title: 'Advanced Manufacturing Capabilities',
    subtitle: 'State-of-the-art machinery combined with expert craftsmanship',
  },
  content:
    'Our advanced CNC machines and skilled operators work together to deliver precision components that meet your exact specifications.',
  items: [
    {
      title: '3-Axis Milling Operations',
    },
    {
      title: 'High-Precision Turning',
    },
    {
      title: 'Complex Surface Machining',
    },
    {
      title: 'Multi-Material Processing',
    },
    {
      title: 'Prototype Development',
    },
    {
      title: 'Production-Scale Manufacturing',
    },
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
  isImageDisplayed: true,
  image: {
    src: processImg,
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
