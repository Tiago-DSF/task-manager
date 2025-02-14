import { useState } from "react"; //importação pra receber os dados do array em forma de estado (state)
import ItemsContainer from "./ItemsContainer";
import AddItemsContainer from "./AddItemsContainer";
import "./App.css";

function App() {
  const [taskList, setTasklist] = useState([]);

  const removeItem = (item) => {
    const newList = [...taskList]; //faz uma cópia da lista de tarefas
    const itemIndex = newList.indexOf(item); //pega a posição de um item, dentro da lista dessa lista de tarefas
    newList.splice(itemIndex, 1); //faz modificação no newlist
    setTasklist(newList); //seleciona um item dessa lista atualizada, ou, com o item removido
  };
//nessa função você poderia reutilizar o modelo acima, porem, existe uma versão mais enxuta pra isso
  const addItem = (item) =>{
   setTasklist([...taskList, item]);//criando um array que tem elementos iguais, só que com um elemento a mais (item)
  }
  return (

    <div>
      <h1>Lista de Tarefas</h1>
      <AddItemsContainer addItem={addItem}/>

      <ItemsContainer taskList={taskList} removeItem={removeItem} />
    </div>
  );
}

export default App;
