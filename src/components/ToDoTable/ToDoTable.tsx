import { ITableProps, IRootState, HeaderType } from '../../interfaces/interfaces';
import { useSelector } from 'react-redux';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import calculateTodoListStats from '../../helpers/calculateToDoListStat';
import ToDoSummaryItem from '../ToDoSummaryItem/ToDoSummaryItem';
import ToDoListHeader from '../ToDoListHeader/ToDoListHeader';
import ToDoSummaryHeader from '..//ToDoSummaryHeader/ToDoSummaryHeader';

const ToDoTable: React.FC<ITableProps> = (props: ITableProps) => {
  const items = useSelector((state: IRootState) => state.toDoList);
  const showArchivedItems = useSelector((state: IRootState) => state.settings.showArchivedItems);
  return (
    <>
      {(() => {
        switch (props.headerType) {
          case HeaderType.list:
            return (
              <>
                <ToDoListHeader />
                {items.length > 0 ? (
                  <ul>
                    {items
                      .filter(({ isArchived }) => isArchived === showArchivedItems)
                      .map((item) => (
                        <li key={item.id}>
                          <ToDoListItem data={item} />
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p style={{ textAlign: 'center' }}>There is no any notes in your list</p>
                )}
              </>
            );
          case HeaderType.stats:
            return (
              items.length > 0 && (
                <>
                  <ToDoSummaryHeader />
                  <ul>
                    {calculateTodoListStats(items).map((item, index) => (
                      <ToDoSummaryItem key={index} data={item} />
                    ))}
                  </ul>
                </>
              )
            );

          default:
            break;
        }
      })()}
    </>
  );
};

export default ToDoTable;
