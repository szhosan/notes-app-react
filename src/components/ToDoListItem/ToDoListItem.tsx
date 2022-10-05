import { ITableItemProps } from '../../interfaces/interfaces';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import {
  removeItem,
  toggleArchived,
  setShowModal,
  setToDoIdToEdit,
} from '../../redux/todosReducer';
import capitalize from '../../helpers/capitalizeCategories';

const ToDoListItem: React.FC<ITableItemProps> = ({ data }: ITableItemProps) => {
  const dispatch = useDispatch();
  const { id, name, category, content, created, isArchived, dates } = data;
  const containerClasses = classNames(
    'flex mb-2 h-11 bg-zinc-500 rounded rounded-md items-center font-medium text-lg text-zinc-900',
    'min-h-12 bg-white',
    {
      'text-red-800': isArchived,
    },
  );
  const iconClasses = classNames(
    'flex-auto min-h-11 h-11 w-11 bg-no-repeat bg-center bg-contain',
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
  const btnClasses = classNames(
    'flex p-0 items-center justify-center mr-2 w-8 h-8 border-0 bg-no-repeat bg-center opacity-60 cursor-pointer',
  );
  return (
    <div className={containerClasses}>
      <div className={iconClasses}></div>
      <div className='lex-auto w-64'>{name}</div>
      <div className='flex-auto w-32'>{created}</div>
      <div className='flex-auto w-40'>{capitalize(category)}</div>
      <div className='flex-auto w-80'>{content}</div>
      <div className='flex-auto w-52'>{dates?.map((date) => date).join(', ')}</div>
      <div className='flex'>
        <button
          type='button'
          className={btnClasses + ' bg-btnEdit'}
          aria-label='edit'
          data-operation='edit'
          title='edit item'
          onClick={() => {
            dispatch(setToDoIdToEdit(id));
            dispatch(setShowModal(true));
          }}
        ></button>
        <button
          type='button'
          className={btnClasses + ' bg-btnArchive'}
          aria-label='archive'
          data-operation='archive'
          title='change archive status'
          onClick={() => {
            dispatch(toggleArchived(id));
          }}
        ></button>
        <button
          type='button'
          className={btnClasses + ' bg-btnDelete'}
          aria-label='delete'
          data-operation='delete'
          title='delete item'
          onClick={() => {
            dispatch(removeItem(id));
          }}
        ></button>
      </div>
    </div>
  );
};

export default ToDoListItem;
