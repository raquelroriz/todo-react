import React, { useState } from 'react';

interface OnPressEnterProps {
  onPressEnter: (newTitle: string, newCompleted: boolean) => void;
}

export function InputTxt({ onPressEnter }: OnPressEnterProps) {
  const [newTitle, setNewTitle] = useState('');
  const [isValid, setValid] = useState(true);

  const keyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isEnterPressedRule = event.key == 'Enter';
    const isEmptyRule = newTitle == '';

    if (isEnterPressedRule && !isEmptyRule) {
      onPressEnter(newTitle, false);
      setNewTitle('');
      setValid(true);
    } else if (isEnterPressedRule && isEmptyRule) {
      setValid(false);
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const showError = () => {
    if (isValid == false) {
      return (
        <div className="my-2 text-sm text-left text-red-400 ">
          Preencha antes de adicionar!
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div>
      <input
        onKeyDown={keyHandler}
        onChange={onChangeHandler}
        type="text"
        name="newtodo"
        placeholder="new ToDos"
        className={`input input-bordered w-full 
        ${isValid ? 'input-primary' : 'input-error'}`}
        value={newTitle}
      />
      {showError()}
    </div>
  );
}
