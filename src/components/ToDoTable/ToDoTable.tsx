import { ITableProps, IRootState, IManageState } from '../../interfaces/interfaces'
import { useSelector } from 'react-redux'
import ToDoListItem from '../ToDoListItem/ToDoListItem'

const ToDoTable: React.FC<ITableProps> = (props: ITableProps) => {
  const items = useSelector((state: IRootState) => state.toDoList)
  const showArchivedItems = useSelector((state: IManageState) => state.showArchivedItems)
  // console.log(items);
  // console.log(props.header);
  return (
    <>
      {props.header}
      {items && (
        <ul>
          {items
            .filter(({ isArchived }) => isArchived === showArchivedItems)
            .map((item) => (
              <li key={item.id}>
                <ToDoListItem data={item} />
              </li>
            ))}
        </ul>
      )}
    </>
  )
}

export default ToDoTable
