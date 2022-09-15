import { ITableSummaryItemProps } from '../../interfaces/interfaces';
import classNames from 'classnames';
import s from './ToDoSummaryItem.module.css';

const ToDoSummaryItem: React.FC<ITableSummaryItemProps> = ({ data }: ITableSummaryItemProps) => {
  const { category, categoryText, active, archivedAmount } = data;
  const categoryClasses = classNames('todos_icon_cont', category);
  return (
    <>
      <li>
        <div className='todos_header_container list_item'>
          <div className={categoryClasses}></div>
          <div className={s.todos_note_category_cont}>{categoryText}</div>
          <div className={s.todos_active_cont}>{active}</div>
          <div className={s.todos_archived_cont}>{archivedAmount}</div>
        </div>
      </li>
    </>
  );
};

export default ToDoSummaryItem;
