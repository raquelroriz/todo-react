interface OnPressDeleteProps {
  todoList: Todo[];
  onPressDelete: () => void;
}
interface Todo {
  title: string;
  completed: boolean;
  id: number;
}

export function Delete({ onPressDelete, todoList }: OnPressDeleteProps) {
  function showButton() {
    const hasCompleted = todoList.some((elem: Todo) => elem.completed == true);
    if (hasCompleted) {
      return (
        <button
          className="btn btn-sm"
          name="clear-completed"
          onClick={onPressDelete}
        >
          Clear completed
        </button>
      );
    } else {
      return <div></div>;
    }
  }
  return showButton();
}
