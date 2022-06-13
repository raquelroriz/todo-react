import React, { useState } from 'react';

export function InputTxt() {
  //const [pressedKey, setPressedKey] = useState('');
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const keyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //setPressedKey(event.key);
    if (event.key == 'Enter') {
      setTodos(updateTodos(newTodo));
      setNewTodo('');
      console.log(todos);
    }
  };

  const updateTodos = (newTodo: string) => {
    return [...todos, newTodo];
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <p>O texto foi:{newTodo}</p>
      <input
        onKeyDown={keyHandler}
        onChange={onChangeHandler}
        type="text"
        name="newtodo"
        placeholder="new ToDos"
        className="input input-bordered input-primary w-full"
        value={newTodo}
      />
    </div>
  );
}
