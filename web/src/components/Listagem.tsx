interface TodoListProps {
  todoList: Todo[];
  onUpdate: (newTodoList: Todo[]) => void;
}

interface Todo {
  title: string;
  completed: boolean;
  id: number;
}

export function Listagem({ todoList, onUpdate }: TodoListProps) {
  const clickHandlerInput = (event: React.MouseEvent<HTMLInputElement>) => {
    const checkbox: HTMLInputElement = event.currentTarget;

    const index = todoList.findIndex(
      (element: Todo) => element.id === parseInt(checkbox.value)
    );
    todoList[index].completed = !todoList[index].completed;
    onUpdate(todoList);
  };

  const imprimirItem = (item: Todo) => {
    return (
      <div key={item.id} className="flex flex-row">
        <div className="basis-1/12">
          <input
            type="checkbox"
            className="radio radio-primary"
            onClick={clickHandlerInput}
            value={item.id}
            defaultChecked={item.completed}
          />
        </div>

        <div className="basis-11/12 truncate">
          <span className={`${item.completed ? 'line-through' : ''}`}>
            {item.title}
          </span>
        </div>
      </div>
    );
  };

  return todoList.map((item: Todo) => imprimirItem(item));
}
