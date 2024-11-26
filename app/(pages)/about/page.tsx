import type { Metadata } from 'next';
import Hero2 from '~/components/widgets/Hero2';
import Features from '~/components/widgets/Features';

import {
  hero2About,
  featuresFourAbout,
  features3About,
  featuresAcceptedMaterials,
  featuresHome,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: 'About us',
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      <Features {...featuresHome} />
      <Features {...featuresFourAbout} />
      <Features {...features3About} />
      <Features {...featuresAcceptedMaterials} />
    </>
  );
};

export default Page;
