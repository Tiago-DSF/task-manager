// Arquivo da renderização de um elemento da lista de tarefas
const TaskItem = ({ task, removeItem }) => {
  return (
    <div className="task-item">
      <p>{task}</p>
      <button onClick={() => removeItem(task)}>Apagar</button>
    </div>
  );
};

export default TaskItem;
