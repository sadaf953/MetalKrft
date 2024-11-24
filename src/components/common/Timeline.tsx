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
  const firstRow = items?.slice(0, 3) || [];
  const secondRow = items?.slice(3) || [];

  const renderRow = (rowItems: typeof items, rowIndex: number) => (
    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 w-full">
      {rowItems.map(({ title, description, icon: Icon, iconClass: itemIconClass }, index = 0) => (
        <div
          key={id ? `item-${id}-${rowIndex}-${index}` : `item-grid-${rowIndex}-${index}`}
          className={twMerge('flex flex-1 relative', panelClass)}
        >
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center mb-4">
              {Icon ? (
                <Icon className={twMerge('w-14 h-14 p-3 rounded-full border-2 bg-white dark:bg-slate-800', defaultIconClass, itemIconClass)} />
              ) : DefaultIcon ? (
                <DefaultIcon className={twMerge('w-14 h-14 p-3 rounded-full border-2 bg-white dark:bg-slate-800', defaultIconClass)} />
              ) : null}
            </div>

            <div className="text-center px-4">
              {title && (
                <h3 className={twMerge('text-xl font-bold text-gray-900 dark:text-slate-300 mb-2', titleClass)}>
                  {title}
                </h3>
              )}
              {description && (
                <p className={twMerge('text-gray-600 dark:text-slate-400 text-sm', descriptionClass)}>
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
    <>
      {items && items.length && (
        <div className="flex flex-col gap-8">
          {renderRow(firstRow, 0)}
          {renderRow(secondRow, 1)}
        </div>
      )}
    </>
  );
};

export default Timeline;
