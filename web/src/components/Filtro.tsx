import React, { useState } from 'react';

interface OnPressFilterProps {
  onPressFilter: (newFilter: string) => void;
}

export function Filtro({ onPressFilter }: OnPressFilterProps) {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    onPressFilter(button.name);
  };

  return (
    <div className="d-inline-flex p-3 justify-center flex flex-row gap-1 items-center ">
      <div className="basis-2/12">
        <button className="btn btn-sm" name="all" onClick={clickHandler}>
          All
        </button>
      </div>

      <div className="basis-2/12">
        <button className="btn btn-sm" name="avalible" onClick={clickHandler}>
          Avalible
        </button>
      </div>

      <div className="basis-2/12">
        <button className="btn btn-sm" name="completed" onClick={clickHandler}>
          Completed
        </button>
      </div>
    </div>
  );
}
