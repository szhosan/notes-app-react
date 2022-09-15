import { ITableProps, IRootState, IManageState } from '../../interfaces/interfaces';
import { useSelector } from 'react-redux';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import calculateTodoListStats from '../../helpers/calculateToDoListStat';
import ToDoSummaryItem from '../ToDoSummaryItem/ToDoSummaryItem';

const ToDoTable: React.FC<ITableProps> = (props: ITableProps) => {
  const items = useSelector((state: IRootState) => state.toDoList);
  const showArchivedItems = useSelector((state: IManageState) => state.showArchivedItems);
  return (
    <>
      {props.header}
      {items &&
        (() => {
          switch (props.header.type.name) {
            case 'ToDoListHeader':
              return (
                <ul>
                  {items
                    .filter(({ isArchived }) => isArchived === showArchivedItems)
                    .map((item) => (
                      <li key={item.id}>
                        <ToDoListItem data={item} />
                      </li>
                    ))}
                </ul>
              );
            case 'ToDoSummaryHeader':
              return (
                <ul>
                  {calculateTodoListStats(items).map((item, index) => (
                    <ToDoSummaryItem key={index} data={item} />
                  ))}
                </ul>
              );

            default:
              break;
          }
        })()}
    </>
  );
};

export default ToDoTable;
