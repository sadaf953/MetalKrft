import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features from '~/components/widgets/Features';
import Features2 from '~/components/widgets/Features2';
import Steps from '~/components/widgets/Steps';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';

import {
  callToActionHome,
  featuresAbout,
  featuresHome,
  heroHome,
  quality,
  stepsHome,
  contentHomeOne,
  contentHomeTwo,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

const Page = () => {
  return (
    <>
      <Hero {...heroHome} />
      <Features {...featuresAbout} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Steps {...stepsHome} />
      <CallToAction {...callToActionHome} />
    </>
  );
};

export default Page;
