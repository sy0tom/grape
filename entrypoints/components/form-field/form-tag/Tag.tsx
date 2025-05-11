interface Props {
  tag: string;
  onClick: () => void;
}

function Tag({ tag, onClick }: Props) {
  return (
    <div className="flex items-center bg-red-400 rounded p-0.5">
      <span>{tag}</span>
      <button type="button" className="ml-1 text-sm" onClick={onClick}>
        ×
      </button>
    </div>
  );
}

export default Tag;
