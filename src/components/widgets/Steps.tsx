import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';
import { StepsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Timeline from '../common/Timeline';
import Headline from '../common/Headline';

const Steps = ({
  id,
  header,
  items,
  isImageDisplayed = true,
  image,
  isReversed = false,
  hasBackground = false,
}: StepsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    <div
      className={`flex flex-col gap-8 md:gap-12 ${isReversed ? 'md:flex-row-reverse' : ''} ${
        isImageDisplayed ? 'md:flex-row' : ''
      } bg-blue-50 dark:bg-blue-900/20 p-4 sm:p-8 md:p-12 rounded-xl`}
    >
      <div
        className={`md:py-4 ${
          isImageDisplayed ? 'md:pr-16 md:rtl:pr-0 md:rtl:pl-16 md:basis-1/2' : 'max-w-4xl mx-auto w-full'
        }`}
      >
        {header && (
          <Headline
            header={header}
            containerClass="text-center md:text-left"
            titleClass="text-3xl sm:text-4xl"
            subtitleClass="text-center md:text-left max-w-3xl mx-auto md:mx-0"
          />
        )}
        <Timeline 
          items={items} 
          defaultIcon={IconCheck} 
          iconClass="text-primary border-primary-900"
          containerClass="mt-8 md:mt-12 space-y-6"
        />
      </div>
      {isImageDisplayed && (
        <div className="relative md:basis-1/2">
          {image && (
            <Image
              src={image.src}
              width={400}
              height={768}
              alt={image.alt}
              placeholder="blur"
              className="inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700"
              quality={50}
            />
          )}
        </div>
      )}
    </div>
  </WidgetWrapper>
);

export default Steps;
