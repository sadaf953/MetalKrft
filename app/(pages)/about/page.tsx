import type { Metadata } from 'next';
import Hero2 from '~/components/widgets/Hero2';
import Features4 from '~/components/widgets/Features4';
import Steps from '~/components/widgets/Steps';
import Features3 from '~/components/widgets/Features3';
import Features2 from '~/components/widgets/Features2';
import Features from '~/components/widgets/Features';
import {
  hero2About,
  featuresFourAbout,
  stepsAbout,
  features3About,
  featuresAbout,
  featuresAcceptedMaterials,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: 'About us',
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      <Features4 {...featuresFourAbout} />
      <Steps {...stepsAbout} />
      <Features3 {...features3About} />
      <Features {...featuresAcceptedMaterials} />
      <Features2 {...featuresAbout} />
    </>
  );
};

export default Page;
