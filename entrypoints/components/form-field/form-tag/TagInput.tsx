import { ChangeEvent, RefObject, useEffect, useRef, useState } from "react";
import Tag from "./Tag";

interface Props {
  initialValues?: string[];
  placeholder?: string;
  onChange: (value: string[]) => void;
  lastInputRef?: RefObject<HTMLInputElement | null>;
}

function TagInput({
  initialValues,
  placeholder,
  onChange,
  lastInputRef,
}: Props) {
  const tagRootRef = useRef<HTMLDivElement>(null);
  const minFocusIndex = -1;
  const [tags, setTags] = useState<string[]>(initialValues ?? []);
  const [inputValue, setInputValue] = useState("");
  const [focusIndex, setFocusIndex] = useState(minFocusIndex);
  const [inputWidth, setInputWidth] = useState("1ch");
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const getSpanRefIndex = (index: number) => index + 1;

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

  const handleOnBlur = () => {
    resetInputValue();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    const value = inputValue.trim();

    if (value !== "") {
      if (!tags.includes(value)) {
        if (
          isInputEnd(
            key,
            e.nativeEvent.isComposing,
            e.currentTarget.selectionStart,
          )
        ) {
          // 要素の追加
          e.preventDefault();
          addTag(focusIndex, value);
          if (isLeftKey(key)) {
            moveLeft(focusIndex, 1, true);
          } else if (isRightKey(key)) {
            if (focusIndex >= tags.length - 1) {
              moveRight(focusIndex, 1, true);
            } else {
              moveRight(focusIndex, 2, true);
            }
          } else {
            moveRight(focusIndex, 1, true);
          }
        }
      }
      return;
    }

    if (isRemoveKey(key)) {
      // 要素の削除
      e.preventDefault();
      removeTag(focusIndex);
      moveLeft(focusIndex, 1, true);
      return;
    }

    if (isLeftKey(key) && focusIndex > minFocusIndex) {
      // カーソルの左移動
      e.preventDefault();
      moveLeft(focusIndex, 1, false);
      return;
    }

    if (isRightKey(key) && focusIndex < tags.length - 1) {
      // カーソルの右移動
      e.preventDefault();
      moveRight(focusIndex, 1, false);
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

  const addTag = (index: number, value: string) => {
    const nextTags = [...tags];
    nextTags.splice(index + 1, 0, value);
    updateTag(nextTags);
  };

  const removeTag = (index: number) => {
    if (index === -1) {
      return;
    }
    const nextTags = [...tags];
    nextTags.splice(index, 1);
    updateTag(nextTags);
  };

  const updateTag = (nextTags: string[]) => {
    setTags(nextTags);
    onChange(nextTags);
    resetInputValue();
  };

  const resetInputValue = () => {
    setInputValue("");
  };

  const moveLeft = (index: number, next: number, shouldBeWait: boolean) => {
    const nextIndex = index - next;
    if (shouldBeWait) {
      // setTimeout(() => {
      moveFocus(nextIndex);
      // }, 50);
      return;
    }
    moveFocus(nextIndex);
  };

  const moveRight = (index: number, next: number, shouldBeWait: boolean) => {
    const nextIndex = index + next;
    if (shouldBeWait) {
      setTimeout(() => {
        moveFocus(nextIndex);
      }, 50);

      return;
    }
    moveFocus(nextIndex);
  };

  const moveFocus = (nextIndex: number) => {
    const elementId = `tag-input-${nextIndex}`;
    const nextElement = tagRootRef?.current?.querySelector(`#${elementId}`);
    if (nextElement) {
      (nextElement as HTMLElement).focus();
      return;
    }
    console.log(`element is not found. ${elementId}`);
    //setFocusIndex(nextIndex);
  };

  const renderInput = (index: number) => {
    const getValue = () => {
      return index === focusIndex ? inputValue : "";
    };
    return (
      <div className="relative">
        <input
          id={`tag-input-${index}`}
          type="text"
          value={getValue()}
          onFocus={() => handleFocus(index)}
          onBlur={handleOnBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="absolute top-0 left-0 bg-transparent outline-none"
          style={{ width: inputWidth }}
          ref={index === tags.length - 1 ? lastInputRef : undefined}
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
    <div
      ref={tagRootRef}
      className="flex items-center overflow-x-auto max-w-full"
    >
      {renderInput(minFocusIndex)}
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
