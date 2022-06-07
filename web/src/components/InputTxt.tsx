import React, { useState } from 'react';

export function InputTxt() {
  const [state, setState] = useState('');
  const keyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setState(event.key);
  };
  return (
    <div>
      a tecla pressionada foi:{state}
      <input
        onKeyDown={keyHandler}
        type="text"
        name="newtodo"
        placeholder="new ToDos"
        className="input input-bordered input-primary w-full"
      />
    </div>
  );
}
