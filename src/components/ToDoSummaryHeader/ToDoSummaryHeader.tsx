import s from './ToDoSummaryHeader.module.css';

const ToDoSummaryHeader: React.FC = () => {
  return (
    <div className='todos_header_container'>
      <div className='todos_icon_cont'></div>
      <div className={s.todos_note_category_cont}>Note Category</div>
      <div className={s.todos_active_cont}>Active</div>
      <div className={s.todos_archived_cont}>Archived</div>
    </div>
  );
};

export default ToDoSummaryHeader;
