import { ITableSummaryItemProps } from '../../interfaces/interfaces';
import classNames from 'classnames';
import capitalize from '../../helpers/capitalizeCategories';

const ToDoSummaryItem: React.FC<ITableSummaryItemProps> = ({ data }: ITableSummaryItemProps) => {
  const { category, active, archivedAmount } = data;
  const iconClasses = classNames(
    'flex min-h-11 h-11 w-16 bg-no-repeat bg-center bg-contain',
    {
      'bg-ideaIco': category === 'idea',
    },
    {
      'bg-thoughtIco': category === 'thought',
    },
    {
      'bg-taskIco': category === 'task',
    },
  );
  return (
    <>
      <li>
        <div className='flex mb-2 h-11 bg-zinc-500 rounded rounded-md items-center font-medium text-lg text-zinc-900 min-h-12 bg-white'>
          <div className={iconClasses}></div>
          <div className='flex w-80'>{capitalize(category)}</div>
          <div className='flex w-70'>{active}</div>
          <div className='flex w-60'>{archivedAmount}</div>
        </div>
      </li>
    </>
  );
};

export default ToDoSummaryItem;
