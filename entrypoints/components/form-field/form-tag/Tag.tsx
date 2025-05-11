interface TagProps {
  tag: string;
  onClick: () => void;
}

function Tag({ tag, onClick }: TagProps) {
  return (
    <div className="px-2 py-1 flex items-center bg-red-400 rounded">
      <span>{tag}</span>
      <button type="button" className="ml-1 text-sm" onClick={onClick}>
        ×
      </button>
    </div>
  );
}

export default Tag;
