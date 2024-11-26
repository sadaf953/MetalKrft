import { twMerge } from 'tailwind-merge';
import { Timeline as TimelineType } from '~/shared/types';

const Timeline = ({
  id,
  items,
  defaultIcon: DefaultIcon,
  containerClass,
  panelClass,
  iconClass: defaultIconClass,
  titleClass,
  descriptionClass,
}: TimelineType) => {
  const renderItems = (items: typeof items) => (
    <div className="flex flex-col gap-8 w-full">
      {items?.map(({ title, description, icon: Icon, iconClass: itemIconClass }, index = 0) => (
        <div
          key={id ? `item-${id}-${index}` : `item-grid-${index}`}
          className={twMerge('flex flex-col items-center text-center sm:items-start sm:text-left', panelClass)}
        >
          <div className="flex items-center gap-4">
            {Icon ? (
              <Icon className={twMerge('w-14 h-14 p-3 rounded-full border-2 bg-white dark:bg-slate-800', defaultIconClass, itemIconClass)} />
            ) : DefaultIcon ? (
              <DefaultIcon className={twMerge('w-14 h-14 p-3 rounded-full border-2 bg-white dark:bg-slate-800', defaultIconClass)} />
            ) : null}
            <div className="flex flex-col">
              {title && (
                <h3 className={twMerge('text-xl font-bold text-gray-900 dark:text-slate-300', titleClass)}>
                  {title}
                </h3>
              )}
              {description && (
                <p className={twMerge('text-gray-600 dark:text-slate-400 text-sm mt-2', descriptionClass)}>
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={twMerge('flex flex-col', containerClass)}>
      {items && items.length > 0 && renderItems(items)}
    </div>
  );
};

export default Timeline;
