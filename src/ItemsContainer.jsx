///Arquivo dos itens da lista

import TaskItem from "./TaskItems";

const ItemsContainer = ({ taskList, removeItem }) => {
  return (
    <div className="items-container">
      <p>
        
        {taskList.map((t) => (
          <TaskItem task={t} removeItem={removeItem} />
        ))}
      </p>
    </div>
  );
};

export default ItemsContainer;
