import React, { useState } from 'react';

interface OnPressEnterProps {
  onPressEnter: (newTitle: string, newCompleted: boolean) => void;
}

export function InputTxt({ onPressEnter }: OnPressEnterProps) {
  const [newTitle, setNewTitle] = useState('');

  const keyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      onPressEnter(newTitle, false);
      setNewTitle('');
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
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
        value={newTitle}
      />
    </div>
  );
}
