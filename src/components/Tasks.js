import Task from "./Task"
const Tasks = ({tasks, onDelete, onDoubleClick}) => {
    return (
        <div>
            {tasks.map(t => <Task key={t.id} task={t} onDelete={onDelete} onDoubleClick={onDoubleClick}/>)}
        </div>
    )
}

export default Tasks
