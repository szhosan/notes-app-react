import React from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as IconAdd } from '../../images/add.svg'
import { ReactComponent as IconArchive } from '../../images/archive.svg'
import { ReactComponent as IconDelete } from '../../images/delete.svg'
import { toggleShowArchived } from '../../redux/todosReducer'

const ToDoListHeader: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <div className='todos_header_container'>
      <div className='todos_icon_cont'></div>
      <div className='todos_name_cont'>Name</div>
      <div className='todos_created_cont'>Created</div>
      <div className='todos_category_cont'>Category</div>
      <div className='todos_content_cont'>Content</div>
      <div className='todos_dates_cont'>Dates</div>
      <div className='todos_butt_cont'>
        <button
          type='button'
          className='todos_oper_button'
          aria-label='add new item'
          data-modal-open
          title='add new item'
        >
          <IconAdd fill='white' width={25} height={25} />
        </button>
        <button
          id='butt_archive'
          type='button'
          className='todos_oper_button'
          aria-label='show/hide archived items'
          title='show/hide archived items'
          onClick={() => dispatch(toggleShowArchived())}
        >
          <IconArchive fill='white' width={25} height={25} />
        </button>
        <button
          id='butt_delete_all'
          type='button'
          className='todos_oper_button'
          aria-label='delete all items'
          title='delete all items'
        >
          <IconDelete fill='white' width={25} height={25} />
        </button>
      </div>
    </div>
  )
}

export default ToDoListHeader
