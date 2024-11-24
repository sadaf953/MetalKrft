import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StepsProps,
  TestimonialsProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/hero.jpg';
import millingImg from '~/assets/images/CNC milling.png';
import turningImg from '~/assets/images/turning.png';
import processImg from '~/assets/images/process.png';
import {
  IconBrandTailwind,
  IconComponents,
  IconListCheck,
  IconRocket,
  IconTools,
  IconGitBranch,
  IconTool,
  IconSettings,
  Icon3dCubeSphere,
  IconDeviceDesktop,
  IconBuildingFactory,
  IconFileSearch,
  IconList,
  IconBulb,
  IconCpu,
  IconRotate,
  IconEngine,
  IconDeviceLaptop,
  IconBuildingBridge,
  IconBolt,
  IconRuler,
  IconRecycle,
  IconGavel,
  IconShieldCheck,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'About MetalKraft CNC',
  subtitle: (
    <>
      Bringing innovation to precision CNC machining in Sri City. We're a passionate startup combining modern technology with skilled craftsmanship to deliver quality results. Our facility is equipped with CNC machines operated by experienced technicians, ready to take on your manufacturing challenges.

      From prototyping to production runs, we approach every project with dedication and attention to detail. Let us help bring your designs to life with precision and care.
    </>
  ),
  tagline: 'Excellence in Manufacturing',
  image: {
    src: hero2Img,
    alt: 'MetalKraft CNC Manufacturing Facility',
  },
  callToAction: {
    text: 'Request a Quote',
    href: '/contact#form',
  },
  callToAction2: {
    text: 'View Capabilities',
    href: '/',
  }
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'Our Core Values',
    subtitle:
      'Guided by principles that ensure excellence in every project',
  },
  items: [
    {
      title: 'Quality First',
      description: 'Uncompromising commitment to precision and excellence',
      icon: IconComponents,
    },
    {
      title: 'Innovation',
      description: 'Embracing advanced technology and continuous improvement',
      icon: IconBulb,
    },
    {
      title: 'Reliability',
      description: 'Consistent performance and on-time delivery',
      icon: IconRotate,
    },
    {
      title: 'Customer Focus',
      description: 'Dedicated to exceeding client expectations',
      icon: IconListCheck,
    },
  ],
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-two-on-about',
  hasBackground: true,
  header: {
    title: 'Our Capabilities',
    subtitle:
      'State-of-the-art equipment and expertise',
  },
  items: [
    {
      title: 'CNC Milling',
      description: '3-5 axis precision milling for complex geometries',
      icon: IconTool,
    },
    {
      title: 'CNC Turning',
      description: 'High-precision turning for cylindrical components',
      icon: IconSettings,
    },
    {
      title: 'Prototyping',
      description: 'Rapid prototyping and small batch production',
      icon: IconDeviceDesktop,
    },
    {
      title: 'Production',
      description: 'High-volume manufacturing capabilities',
      icon: IconBuildingFactory,
    },
  ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: false,
  isReversed: false,
  isAfterContent: false,
  image: {
    src: processImg,
    alt: 'Our CNC Manufacturing Process',
  },
  header: {
    title: 'Our Process',
    subtitle:
      'From concept to completion, we ensure quality at every step',
  },
  items: [
    {
      title: 'Design Review',
      description:
        'Our engineers review your designs for manufacturability',
      icon: IconFileSearch,
    },
    {
      title: 'Material Selection',
      description:
        'Choose from a wide range of materials suited for your application',
      icon: IconList,
    },
    {
      title: 'Production',
      description:
        'State-of-the-art CNC machines for precise manufacturing',
      icon: IconBuildingFactory,
    },
    {
      title: 'Quality Control',
      description:
        'Rigorous inspection and testing of finished components',
      icon: IconComponents,
    },
  ],
};

// Features3 data on About page *******************
export const features3About: FeaturesProps = {
  id: 'features-three-on-about',
  hasBackground: false,
  header: {
    title: 'Industry Solutions',
    subtitle:
      'Serving diverse industries with precision components',
  },
  iconClass: 'w-5 h-5 p-1 bg-blue-50 rounded-sm dark:bg-slate-800',
  items: [
    {
      title: 'Aerospace',
      description:
        'High-precision components meeting aerospace standards',
      icon: IconRocket,
    },
    {
      title: 'Automotive',
      description:
        'Quality parts for automotive applications',
      icon: IconEngine,
    },
    {
      title: 'Medical',
      description:
        'Precision components for medical devices',
      icon: IconCpu,
    },
    {
      title: 'Military and Defense',
      description:
        'Mission-critical components with strict specifications',
      icon: IconShieldCheck,
    },
    {
      title: 'Consumer Goods',
      description:
        'High-quality parts for consumer products',
      icon: IconBrandTailwind,
    },
    {
      title: 'Robotics and Automation',
      description:
        'Precision parts for robotic systems and automation equipment',
      icon: Icon3dCubeSphere,
    },
  ],
};

// Features data on About page *******************
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

// Features data for Accepted Materials section
export const featuresAcceptedMaterials: FeaturesProps = {
  id: 'features-accepted-materials',
  hasBackground: true,
  className: 'bg-slate-100 dark:bg-slate-800/40',
  header: {
    title: 'Accepted Materials',
    subtitle: 'We work with a wide range of materials to meet your manufacturing needs',
  },
  columns: 4,
  items: [
    {
      title: 'Aluminum',
      description: 'Lightweight and corrosion-resistant',
      icon: IconRocket,
      className: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    },
    {
      title: 'Brass',
      description: 'Excellent machinability and conductivity',
      icon: IconSettings,
      className: 'hover:bg-yellow-50 dark:hover:bg-yellow-900/20',
    },
    {
      title: 'Copper',
      description: 'High thermal and electrical conductivity',
      icon: IconGavel,
      className: 'hover:bg-orange-50 dark:hover:bg-orange-900/20',
    },
    {
      title: 'Stainless Steel',
      description: 'Corrosion-resistant and durable',
      icon: IconShieldCheck,
      className: 'hover:bg-gray-50 dark:hover:bg-gray-900/20',
    },
    {
      title: 'Tool Steel',
      description: 'High hardness and wear resistance',
      icon: IconTools,
      className: 'hover:bg-red-50 dark:hover:bg-red-900/20',
    },
    {
      title: 'Alloy Steel',
      description: 'Enhanced strength and properties',
      icon: IconEngine,
      className: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
    },
    {
      title: 'Mild Steel',
      description: 'Cost-effective and versatile',
      icon: IconBuildingBridge,
      className: 'hover:bg-zinc-50 dark:hover:bg-zinc-900/20',
    },
    {
      title: 'Plastics',
      description: 'Versatile engineering polymers',
      icon: IconRecycle,
      className: 'hover:bg-green-50 dark:hover:bg-green-900/20',
    },
  ],
};

// Testimonials data on About page *******************
export const testimonialsAbout: TestimonialsProps = {
  id: 'testimonials-on-about',
  hasBackground: false,
  header: {
    title: 'What Our Clients Say',
    subtitle:
      'Real stories from our valued customers',
  },
  items: [
    {
      title: 'Excellent Service',
      description:
        'MetalKraft CNC brings a fresh approach to precision machining. Their attention to detail and commitment to customer satisfaction stands out.',
      avatar: {
        src: 'https://picsum.photos/200/300',
        alt: 'Client Avatar',
      },
      name: 'John Doe',
      designation: 'CEO, XYZ Corporation',
    },
    {
      title: 'Impressive Quality',
      description:
        'We were impressed by the quality of the machined components provided by MetalKraft CNC. Their attention to detail and precision is unmatched.',
      avatar: {
        src: 'https://picsum.photos/200/301',
        alt: 'Client Avatar',
      },
      name: 'Jane Smith',
      designation: 'Procurement Manager, ABC Inc.',
    },
  ],
};
