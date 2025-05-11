import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Tag from "./Tag";

interface Props {
  initialValues: string[];
  placeholder?: string;
  onChange: (value: string[]) => void;
}

export interface Handler {
  focus: () => void;
}

const TagInput = forwardRef<Handler, Props>(function TagInput(
  { initialValues, placeholder, onChange },
  ref,
) {
  const [tags, setTags] = useState<string[]>(initialValues);
  const [inputValue, setInputValue] = useState("");
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const getSpanRefIndex = (index: number) => index + 1;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focusedIndex !== null) {
      const span = spanRefs.current[getSpanRefIndex(focusedIndex)];
      const input = document.getElementById(
        `tag-input-${focusedIndex}`,
      ) as HTMLInputElement | null;
      if (input) {
        if (inputValue === "") {
          input.style.width = "0.25rem";
        } else if (span) {
          input.style.width = `${span.offsetWidth + 12}px`;
        }
      }
    }
  }, [inputValue, focusedIndex]);

  useEffect(() => {
    setTags(initialValues);
  }, [initialValues]);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  const isEndKey = (key: string, isComposing: boolean): boolean => {
    return (
      !isComposing &&
      (key === "Enter" || key === "Tab" || key === " " || key === ",")
    );
  };

  const isRemoveKey = (key: string): boolean => {
    return key === "Backspace";
  };

  const isLeftKey = (key: string): boolean => {
    return key === "ArrowLeft";
  };

  const isRightKey = (key: string): boolean => {
    return key === "ArrowRight";
  };

  const onKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const key = e.key;
    const isComposing = e.nativeEvent.isComposing;
    const value = inputValue ? inputValue.trim() : "";

    // 要素の追加
    if (value !== "") {
      if (isEndKey(key, isComposing)) {
        e.preventDefault();
        handleAdd(index, value);
      }
      return;
    }

    // 要素の削除
    if (isRemoveKey(key)) {
      e.preventDefault();
      handleRemove(index);
      return;
    }

    // カーソルの左移動
    if (isLeftKey(key) && index > -1) {
      e.preventDefault();
      handleMoveLeft(index);
      return;
    }

    // カーソルの右移動
    if (isRightKey(key) && index < tags.length - 1) {
      e.preventDefault();
      handleMoveRight(index);
      return;
    }
  };

  const onRemoveTag = (index: number) => {
    handleRemove(index);
  };

  const handleAdd = (index: number, value: string) => {
    if (!tags.includes(value)) {
      const newTag = [...tags];
      newTag.splice(index + 1, 0, value);
      updateTag(newTag);
    }
    setInputValue("");

    if (inputRef.current) {
      inputRef.current.style.width = "0px";
    }

    handleMoveRight(index);
  };

  const handleRemove = (index: number) => {
    updateTag(tags.filter((_, i) => i !== index));
    handleMoveLeft(index);
  };

  const handleMoveLeft = (index: number) => {
    moveFocus(index - 1);
  };

  const handleMoveRight = (index: number) => {
    moveFocus(index + 1);
  };

  const moveFocus = (index: number) => {
    setTimeout(() => {
      document.getElementById(`tag-input-${index}`)?.focus();
    }, 50);
  };

  const updateTag = (updatedTag: string[]) => {
    setTags(updatedTag);
    onChange(updatedTag);
  };

  return (
    <div
      className="w-full max-w-full px-2 flex items-center flex-nowrap gap-1 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-thin bg-transparent min-w-0"
      style={{ scrollbarColor: "#9CA3AF transparent" }}
    >
      <input
        id="tag-input--1"
        ref={(el) => {
          inputRef.current = el;
          spanRefs.current[getSpanRefIndex(-1)] = el;
        }}
        type="text"
        className="bg-transparent outline-none font-sans"
        value={focusedIndex === -1 ? inputValue : ""}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => onKeyDown(-1, e)}
        placeholder={placeholder}
        onFocus={() => setFocusedIndex(-1)}
        onBlur={(e) => {
          setFocusedIndex(null);
          if (e.currentTarget) {
            e.currentTarget.style.width = "0.25rem";
          }
        }}
        style={{
          width:
            focusedIndex === -1 && inputValue !== "" ? undefined : "0.25rem",
        }}
      />
      <span
        ref={(el) => (spanRefs.current[getSpanRefIndex(-1)] = el)}
        className="absolute top-0 left-0 invisible whitespace-pre px-2  font-sans"
      >
        {inputValue || placeholder || ""}
      </span>
      {tags.map((tag, index) => (
        <div key={`${tag}-${index}`} className="flex items-center">
          <Tag tag={tag} onClick={() => onRemoveTag(index)} />
          <div className="relative">
            <input
              id={`tag-input-${index}`}
              type="text"
              className="px-1 bg-transparent outline-none font-sans"
              value={focusedIndex === index ? inputValue : ""}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => onKeyDown(index, e)}
              placeholder={placeholder}
              onFocus={() => setFocusedIndex(index)}
              onBlur={(e) => {
                setFocusedIndex(null);
                if (e.currentTarget) {
                  e.currentTarget.style.width = "0.25rem";
                }
              }}
              style={{
                width:
                  focusedIndex === index && inputValue !== ""
                    ? undefined
                    : "0.25rem",
              }}
            />
            <span
              ref={(el) => (spanRefs.current[getSpanRefIndex(index)] = el)}
              className="absolute top-0 left-0 invisible whitespace-pre px-2  font-sans"
            >
              {inputValue || placeholder || ""}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
});

export default TagInput;
