interface OnPressDeleteProps {
  onPressDelete: () => void;
}

export function Delete({ onPressDelete }: OnPressDeleteProps) {
  return (
    <button
      className="btn btn-sm"
      name="clear-completed"
      onClick={onPressDelete}
    >
      Clear completed
    </button>
  );
}
