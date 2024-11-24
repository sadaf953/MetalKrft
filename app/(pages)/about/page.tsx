import type { Metadata } from 'next';
import Hero2 from '~/components/widgets/Hero2';
import Features4 from '~/components/widgets/Features4';
import Features3 from '~/components/widgets/Features3';
import Features2 from '~/components/widgets/Features2';
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
      <Features2 {...featuresHome} />
      <Features4 {...featuresFourAbout} />
      <Features3 {...features3About} />
      <Features {...featuresAcceptedMaterials} />
    </>
  );
};

export default Page;
