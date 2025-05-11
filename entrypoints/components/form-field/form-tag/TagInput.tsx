import { ChangeEvent } from "react";
import { v4 as uuid } from "uuid";
import Tag from "./Tag";

interface Props {
  initialValues?: string[];
  placeholder?: string;
  onChange: (value: string[]) => void;
}

function TagInput({ initialValues, placeholder, onChange }: Props) {
  const [tags, setTags] = useState<string[]>(initialValues ?? []);
  const [inputValue, setInputValue] = useState("");
  const [focusIndex, setFocusIndex] = useState(-1);
  const [inputWidth, setInputWidth] = useState("1ch");
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const getSpanRefIndex = (index: number) => index + 1;
  const id = uuid();

  useEffect(() => {
    setInputValue("");
  }, [focusIndex]);

  useEffect(() => {
    const span = spanRefs.current[getSpanRefIndex(focusIndex)];
    if (span) {
      const width = span.offsetWidth + 4;
      setInputWidth(`${width}px`);
    }
  }, [inputValue, focusIndex]);

  const handleFocus = (index: number) => {
    setFocusIndex(index);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    const value = inputValue.trim();

    if (value !== "") {
      // 要素の追加
      if (
        isInputEnd(
          key,
          e.nativeEvent.isComposing,
          e.currentTarget.selectionStart,
        )
      ) {
        e.preventDefault();
        addTag(focusIndex, value, isLeftKey(key));
      }
      return;
    }

    // 要素の削除
    if (isRemoveKey(key)) {
      e.preventDefault();
      removeTag(focusIndex);
      return;
    }

    // カーソルの左移動
    if (isLeftKey(key) && focusIndex > -1) {
      e.preventDefault();
      moveLeft(focusIndex);
      return;
    }
    // カーソルの右移動
    if (isRightKey(key) && focusIndex < tags.length - 1) {
      e.preventDefault();
      moveRight(focusIndex);
      return;
    }
  };

  const handleRemove = (index: number) => {
    removeTag(index);
  };

  const isInputEnd = (
    key: string,
    isComposing: boolean,
    pos: number | null,
  ) => {
    return (
      isEndKey(key, isComposing) ||
      isEndByLeft(key, pos) ||
      isEndByRight(key, pos)
    );
  };

  const isEndKey = (key: string, isComposing: boolean): boolean => {
    return (
      !isComposing &&
      (key === "Enter" || key === "Tab" || key === " " || key === ",")
    );
  };

  const isEndByLeft = (key: string, pos: number | null) => {
    return isLeftKey(key) && pos === 0;
  };

  const isEndByRight = (key: string, pos: number | null) => {
    return isRightKey(key) && pos === inputValue.length;
  };

  const isRemoveKey = (key: string) => {
    return key === "Backspace";
  };

  const isLeftKey = (key: string) => {
    return key === "ArrowLeft";
  };

  const isRightKey = (key: string) => {
    return key === "ArrowRight";
  };

  const addTag = (index: number, value: string, isLeftKey: boolean) => {
    if (tags.includes(value)) {
      return;
    }
    const nextTags = [...tags];
    nextTags.splice(index + 1, 0, value);
    updateTag(nextTags);
    if (isLeftKey) {
      moveLeft(index, true);
    } else {
      moveRight(index, true);
    }
  };

  const removeTag = (index: number) => {
    if (index === -1) {
      return;
    }
    const nextTags = [...tags];
    nextTags.splice(index, 1);
    updateTag(nextTags);
    moveLeft(index, true);
  };

  const updateTag = (nextTags: string[]) => {
    setTags(nextTags);
    onChange(nextTags);
  };

  const moveLeft = (index: number, shouldBeWait?: boolean) => {
    if (shouldBeWait) {
      setTimeout(() => {
        moveFocus(index - 1);
      }, 50);
      return;
    }
    moveFocus(index - 1);
  };

  const moveRight = (index: number, shouldBeWait?: boolean) => {
    if (shouldBeWait) {
      setTimeout(() => {
        moveFocus(index + 1);
      }, 50);

      return;
    }
    moveFocus(index + 1);
  };

  const moveFocus = (nextIndex: number) => {
    document.getElementById(`tag-input-${nextIndex}`)?.focus();
  };

  const renderInput = (index: number) => {
    const getValue = () => {
      return index === focusIndex ? inputValue : "";
    };
    return (
      <div className="relative">
        <input
          id={`${id}-tag-input-${index}`}
          type="text"
          value={getValue()}
          onFocus={() => handleFocus(index)}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e)}
          className="absolute top-0 left-0 bg-transparent outline-none"
          style={{ width: inputWidth }}
        />
        <span
          ref={(el) => {
            spanRefs.current[getSpanRefIndex(index)] = el;
          }}
          className="invisible whitespace-pre px-1"
        >
          {getValue()}
        </span>
      </div>
    );
  };

  return (
    <div className="flex items-center">
      {renderInput(-1)}
      {tags.length ? (
        tags.map((tag, index) => (
          <div key={tag} className="flex items-center gap-0.5">
            <Tag tag={tag} onClick={() => handleRemove(index)} />
            {renderInput(index)}
          </div>
        ))
      ) : (
        <span className="text-gray-600 font-sans">{placeholder}</span>
      )}
    </div>
  );
}

export default TagInput;
