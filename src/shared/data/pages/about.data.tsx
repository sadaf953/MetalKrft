import {
  ContentProps,
  FeaturesProps,
  HeroProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/hero.jpg';
import millingImg from '~/assets/images/CNC milling.png';
import turningImg from '~/assets/images/turning.png';
import {
  IconArrowsRightLeft,
  IconBulb,
  IconBrandTailwind,
  IconBuildingBridge,
  IconBuildingFactory,
  IconCheck,
  IconComponents,
  IconCpu,
  IconDeviceDesktop,
  IconDeviceLaptop,
  IconEngine,
  IconFileSearch,
  IconGavel,
  IconGitBranch,
  IconList,
  IconListCheck,
  IconRecycle,
  IconRocket,
  IconRotate,
  IconRuler,
  IconSettings,
  IconShieldCheck,
  IconTool,
  IconTools,
  Icon3dCubeSphere,
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

// Features data on About page *******************


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

// Features data for Accepted Materials section
export const featuresAcceptedMaterials: FeaturesProps = {
  id: 'features-accepted-materials',
  hasBackground: true,
  className: 'bg-slate-100 dark:bg-slate-800/40',
  header: {
    title: 'Materials We Work With',
    subtitle: 'We offer machining services for a wide range of materials to meet your specific requirements.',
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
    }
  ],
};

// Content data on About page *******************
export const contentAbout: ContentProps = {
  id: 'content-on-about',
  hasBackground: false,
  content: `
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="basis-1/2">
        <h3 class="text-2xl font-bold mb-4">Our Manufacturing Excellence</h3>
        <p class="mb-8">
          At MetalKraft CNC, we combine advanced technology with precision craftsmanship. Our state-of-the-art facility is equipped with the latest CNC machines and quality control systems, ensuring exceptional results for every project.
        </p>
        <p class="mb-8">
          Our team of skilled machinists and engineers brings years of experience and expertise to every project. We take pride in our ability to handle complex manufacturing challenges and deliver solutions that exceed expectations.
        </p>
        <div class="grid grid-cols-2 gap-4 mb-8">
          <div>
            <h4 class="font-semibold mb-2">Advanced Capabilities</h4>
            <ul class="list-disc list-inside">
              <li>5-Axis Machining</li>
              <li>Precision Turning</li>
              <li>Complex Milling</li>
              <li>Prototype Development</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Industry Solutions</h4>
            <ul class="list-disc list-inside">
              <li>Aerospace</li>
              <li>Medical Devices</li>
              <li>Automotive</li>
              <li>Industrial Equipment</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="basis-1/2">
        <div class="grid grid-cols-2 gap-4">
          <img
            class="w-full h-80 object-cover rounded-md"
            src="/images/machine-1.jpg"
            alt="CNC Machining Center"
            loading="lazy"
          />
          <img
            class="w-full h-80 object-cover rounded-md"
            src="/images/machine-2.jpg"
            alt="Quality Inspection"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  `,
};
