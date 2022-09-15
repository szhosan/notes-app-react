import { useState } from 'react';
const AddEditToDoForm: React.FC = () => {
  const [toDo, setToDo] = useState({
    name: '',
    category: 'task',
    content: '',
    isArchived: 'false',
  });
  return (
    <>
      <button className='todos_oper_button close_modal_butt' aria-label='Закрыть окно'>
        <svg className='close-icon' width='25px' height='25px'>
          <use href='./images/sprite.svg#icon-close'></use>
        </svg>
      </button>

      <form className='modal_form' autocomplete='off'>
        <h2 className='form_title'>
          <output name='title'>Add new note</output>
        </h2>

        <label className='form_label'>
          <span className='form_label_text'>Name</span>
          <input className='form_input' type='text' name='name' value={toDo.name} required />
        </label>

        <label className='form_label'>
          <span className='form_label_text'>Switch category</span>
          <div className='category_switch_cont'>
            {/* <label className='category_switch_item'>
              <input type='radio' name='category' value='task' checked />
              Task
            </label>
            <label className='category_switch_item'>
              <input type='radio' name='category' value='thought' />
              Random thought
            </label>
            <label>
              <input type='radio' name='category' value='idea' />
              Idea
            </label> */}
            <></>
          </div>
        </label>

        <label className='form_label'>
          <span className='form_label_text'>Content</span>
          <textarea
            className='form_input form_content'
            type='text'
            name='content'
            placeholder='Input note content'
          ></textarea>
        </label>

        <button name='submitBtn' type='submit'>
          Create note
        </button>
      </form>
    </>
  );
};

export default AddEditToDoForm;
