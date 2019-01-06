import style from './TodoForm.css';

const TodoForm = props => {
   
    return (
        <form className={style.addToDoForm}>
            <input type={'text'} placeholder={'task'} className={'addToDoForm-input'} />
            <button type={'button'} onClick={()=>props.add(document.querySelector('.addToDoForm-input').value)} >Add task</button>
        </form>
    );
}

export default TodoForm;

