import { InputTxt } from './components/InputTxt';
import { Listagem } from './components/Listagem';
import { Contador } from './components/Contador';
import { Filtro } from './components/Filtro';
import React, { useState } from 'react';

interface Todo {
  title: string;
  completed: boolean;
  id: number;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('');
  const handlerSave = (newTitle: string, newCompleted: boolean) => {
    let newTodo: Todo = {
      title: newTitle,
      completed: newCompleted,
      id: todos.length + 1,
    };
    setTodos([...todos, newTodo]);
  };

  const handlerFilter = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <>
      <div className="flex justify-center text-5xl font-mono font-bold">
        <h1 className="my-4">ToDo</h1>
      </div>
      <div className="flex justify-center ">
        <div className="grid justify-items-center grid-cols-1 border-2 border-indigo-500/50 border-gray-300 w-8/12 shadow-2xl py-8">
          <div className="linha1 w-11/12 ">
            <InputTxt onPressEnter={handlerSave}></InputTxt>
          </div>

          <div className="linha2 w-11/12 py-8">
            <Listagem todoList={todos}></Listagem>
          </div>

          <div className="linha3 w-11/12">
            <div className="flex flex-row items-center self-center">
              <div className="basis-2/12">
                <Contador todoCount={todos.length}></Contador>
              </div>

              <div className="basis-8/12 container mx-auto">
                <Filtro onPressFilter={handlerFilter}></Filtro>
              </div>

              <div className="basis-2/12 gap-5">
                <button className="btn btn-sm">Clear completed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
