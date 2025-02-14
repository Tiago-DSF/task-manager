const AddItemsContainer = ({ taskList, addItem }) => {
  let newTask = '';
  return (
    <div className='inputTask'>
      <input
        type='text'
        placeholder="Digite a sua tarefa..."
        onChange={(evt) => {
        newTask = evt.target.value;
        }}/>
      <button onClick={() => addItem(newTask)}>Adicionar Tarefa</button>
    </div>
  );
};
export default AddItemsContainer;
