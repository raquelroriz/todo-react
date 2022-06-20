import React, { useState } from 'react';

interface OnPressEnterProps {
  onPressEnter: (newTodo: string) => void;
}

export function InputTxt({ onPressEnter }: OnPressEnterProps) {
  const [newTodo, setNewTodo] = useState('');

  const keyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      onPressEnter(newTodo);
      setNewTodo('');
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
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
