interface TodoCountProps {
  todoCount: number;
}
export function Contador({ todoCount }: TodoCountProps) {
  return <div className="basis-2/12">{todoCount} itens left </div>;
}
