import './TodoItems.css';

function TodoItems(props) {
    return(
        <div className='main-todoitems'>
            <p>{props.taskName}</p>
            <p>{props.taskDescription}</p>
            <button>{props.taskStatus}</button>
        </div>
    );
}

export default TodoItems;