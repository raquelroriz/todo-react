import { InputTxt } from './components/InputTxt';
import { Listagem } from './components/Listagem';
import React, { useState } from 'react';
function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const handlerSave = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <div className="flex justify-center text-5xl font-mono font-bold">
        <h1 className="my-4">ToDo</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid justify-items-center grid-cols-1 border-2 border-indigo-500/50 border-gray-300 w-8/12 shadow-2xl py-8">
          {/* 
          linha responsavel pelo preenchimento new todo
          */}

          <div className="linha1 w-11/12 ">
            <InputTxt onPressEnter={handlerSave}></InputTxt>
          </div>

          {/* 
          linha responsavel pela marcação do que está feito ou a fazer
          novo fica com a checkbox livre (active todo)
          feito checkbox preenchido e riscado (done todo)
          */}

          <div className="linha2 w-11/12 py-8">
            <Listagem todoList={todos}></Listagem>
          </div>

          {/* 
          linha responsavel pelo rodape
          primeiro mostra quantos itens ainda faltam (contador)
          segundo combo de 3 botões, 1° mostra todos(All), 2° apenas os ativos(Active) e 3° os completos (Completed)
          terceiro botão para limpar tudo (Clear completed)
          */}

          <div className="linha3 w-11/12">
            <div className="flex flex-row items-center self-center">
              <div className="basis-2/12">itens left</div>

              <div className="basis-8/12 container mx-auto">
                <div className="d-inline-flex p-3 justify-center flex flex-row gap-1 items-center ">
                  <div className="basis-2/12">
                    <button className="btn btn-sm">All</button>
                  </div>

                  <div className="basis-2/12">
                    <button className="btn btn-sm">Active</button>
                  </div>

                  <div className="basis-2/12">
                    <button className="btn btn-sm">Completed</button>
                  </div>
                </div>
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
