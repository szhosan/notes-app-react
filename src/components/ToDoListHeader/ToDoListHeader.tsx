import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconAdd } from '../../images/add.svg';
import { ReactComponent as IconArchive } from '../../images/archive.svg';
import { ReactComponent as IconDelete } from '../../images/delete.svg';
import { toggleShowArchived, setShowModal, removeAllItems } from '../../redux/todosReducer';
import { IRootState } from '../../interfaces/interfaces';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import classNames from 'classnames';

const ToDoListHeader: React.FC = () => {
  const showArchivedItems = useSelector((state: IRootState) => state.settings.showArchivedItems);
  const btnColor = showArchivedItems ? 'dark-brown' : 'white';
  const dispatch = useDispatch();

  const confirmAndRemoveAll = () => {
    confirmAlert({
      title: 'Remove confirmation',
      message: 'Remove all items from your list?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(removeAllItems()),
        },
      ],
    });
  };

  const btnClasses = classNames(
    'flex p-0 items-center justify-center mr-2 w-8 h-8 border-0 bg-no-repeat bg-center opacity-60',
  );

  return (
    <div className='flex mb-2 h-11 bg-zinc-500 rounded rounded-md items-center font-bold text-lg text-white'>
      <div className='flex-auto w-11'></div>
      <div className='flex-auto w-64'>Name</div>
      <div className='flex-auto w-32'>Created</div>
      <div className='flex-auto w-40'>Category</div>
      <div className='flex-auto w-80'>Content</div>
      <div className='flex-auto w-52'>Dates</div>
      <div className='flex'>
        <button
          type='button'
          className={btnClasses}
          aria-label='add new item'
          data-modal-open
          title='add new item'
          onClick={() => {
            dispatch(setShowModal(true));
          }}
        >
          <IconAdd fill={btnColor} width={25} height={25} />
        </button>
        <button
          id='butt_archive'
          type='button'
          className={btnClasses}
          aria-label='show/hide archived items'
          title='show/hide archived items'
          onClick={() => dispatch(toggleShowArchived())}
        >
          <IconArchive fill={btnColor} width={25} height={25} />
        </button>
        <button
          id='butt_delete_all'
          type='button'
          className={btnClasses}
          aria-label='delete all items'
          title='delete all items'
          onClick={confirmAndRemoveAll}
        >
          <IconDelete fill={btnColor} width={25} height={25} />
        </button>
      </div>
    </div>
  );
};

export default ToDoListHeader;
