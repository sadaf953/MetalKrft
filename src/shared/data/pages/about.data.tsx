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


// Features data for Accepted Materials section


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
