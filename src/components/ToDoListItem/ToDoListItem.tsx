import { ITableItemProps } from '../../interfaces/interfaces'
import classNames from 'classnames'; 
import { useDispatch } from 'react-redux';
import { removeItem, toggleArchived  } from '../../redux/todosReducer';


const ToDoListItem : React.FC<ITableItemProps> = ({data}:ITableItemProps) =>{
    const dispatch = useDispatch();
    const {id, name, category, categoryText, content, created, isArchived, dates} = data;
    const containerClasses = classNames('todos_header_container', 'list_item', {'is_archived': isArchived})
    const iconClasses = classNames('todos_icon_cont', category);
    return <div className={containerClasses}>
            <div className= {iconClasses}></div>
            <div className='todos_name_cont'>{name}</div>
            <div className='todos_created_cont'>{created}</div>
            <div className='todos_category_cont'>{categoryText}</div>
            <div className='todos_content_cont'>{content}</div>
            <div className='todos_dates_cont'>{dates?.map(date=>date).join(', ')}</div>
            <div className='todos_butt_cont'>
            <button
                type='button'
                className='todos_oper_button butt_edit'
                aria-label='edit'        
                data-operation='edit'
                title="edit item"
            ></button>
            <button
                type='button'
                className='todos_oper_button butt_archive'
                aria-label='archive'        
                data-operation='archive'
                title="change archive status"
                onClick={()=>{dispatch(toggleArchived(id))}}
            ></button>
            <button
                type='button'
                className='todos_oper_button butt_delete'
                aria-label='delete'        
                data-operation='delete'
                title="delete item"
                onClick={()=>{dispatch(removeItem(id))}}
            ></button>
            </div>
        </div>;
}

export default ToDoListItem;

