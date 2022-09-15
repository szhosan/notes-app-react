import React from 'react';
import { ReactComponent as IconAdd } from '../../images/add.svg';
import { ReactComponent as IconArchive } from '../../images/archive.svg';
import { ReactComponent as IconDelete } from '../../images/delete.svg';



const ToDoListHeader: React.FC = () =>{
    return <div className='todos_header_container'>
    <div className='todos_icon_cont'></div>
    <div className='todos_name_cont'>Name</div>
    <div className='todos_created_cont'>Created</div>
    <div className='todos_category_cont'>Category</div>
    <div className='todos_content_cont'>Content</div>
    <div className='todos_dates_cont'>Dates</div>
    <div className='todos_butt_cont'>
      <button
        type="button"
        className='todos_oper_button'
        aria-label="add"
        data-modal-open
        title="add new item"
      >
        <IconAdd fill='white' width={25} height={25}/>
      </button>
      <button
        id="butt_archive"
        type="button"
        className='todos_oper_button'
        aria-label="archive"
        title="show/hide archived items"
      >
        <IconArchive fill='white' width={25} height={25} />
      </button>
      <button
        id="butt_delete_all"
        type="button"
        className='todos_oper_button'
        aria-label="delete all items"
        title="delete all items"
      >
        <IconDelete fill='white' width={25} height={25} />
      </button>
    </div>
  </div>
}

export default ToDoListHeader;