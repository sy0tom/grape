// import {
//   forwardRef,
//   useEffect,
//   useImperativeHandle,
//   useRef,
//   useState,
// } from "react";
// import Tag from "./Tag";

import { ChangeEvent } from "react";
import Tag from "./Tag";

// interface Props {
//   initialValues: string[];
//   placeholder?: string;
//   onChange: (value: string[]) => void;
// }

// export interface Handler {
//   focus: () => void;
// }

// const TagInput = forwardRef<Handler, Props>(function TagInput(
//   { initialValues, placeholder, onChange },
//   ref,
// ) {
//   const [tags, setTags] = useState<string[]>(initialValues);
//   const [inputValues, setInputValues] = useState([""]);
//   const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

//   const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);
//   const getSpanRefIndex = (index: number) => index + 1;
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (focusedIndex !== null) {
//       const span = spanRefs.current[getSpanRefIndex(focusedIndex)];
//       const input = document.getElementById(
//         `tag-input-${focusedIndex}`,
//       ) as HTMLInputElement | null;
//       if (input) {
//         if (inputValues === "") {
//           input.style.width = "0.25rem";
//         } else if (span) {
//           input.style.width = `${span.offsetWidth + 12}px`;
//         }
//       }
//     }
//   }, [inputValues, focusedIndex]);

//   useEffect(() => {
//     setTags(initialValues);
//   }, [initialValues]);

//   useImperativeHandle(ref, () => ({
//     focus: () => inputRef.current?.focus(),
//   }));

//   const isEndKey = (key: string, isComposing: boolean): boolean => {
//     return (
//       !isComposing &&
//       (key === "Enter" || key === "Tab" || key === " " || key === ",")
//     );
//   };

//   const isRemoveKey = (key: string): boolean => {
//     return key === "Backspace";
//   };

//   const isLeftKey = (key: string): boolean => {
//     return key === "ArrowLeft";
//   };

//   const isRightKey = (key: string): boolean => {
//     return key === "ArrowRight";
//   };

//   const onKeyDown = (
//     index: number,
//     e: React.KeyboardEvent<HTMLInputElement>,
//   ) => {
//     const key = e.key;
//     const isComposing = e.nativeEvent.isComposing;
//     const value = inputValue ? inputValue.trim() : "";

//     // 要素の追加
//     if (value !== "") {
//       if (isEndKey(key, isComposing)) {
//         e.preventDefault();
//         handleAdd(index, value);
//       }
//       return;
//     }

//     // 要素の削除
//     if (isRemoveKey(key)) {
//       e.preventDefault();
//       handleRemove(index);
//       return;
//     }

//     // カーソルの左移動
//     if (isLeftKey(key) && index > -1) {
//       e.preventDefault();
//       handleMoveLeft(index);
//       return;
//     }

//     // カーソルの右移動
//     if (isRightKey(key) && index < tags.length - 1) {
//       e.preventDefault();
//       handleMoveRight(index);
//       return;
//     }
//   };

//   const onRemoveTag = (index: number) => {
//     handleRemove(index);
//   };

//   const handleAdd = (index: number, value: string) => {
//     if (!tags.includes(value)) {
//       const newTag = [...tags];
//       newTag.splice(index + 1, 0, value);
//       updateTag(newTag);
//     }
//     setInputValue("");

//     if (inputRef.current) {
//       inputRef.current.style.width = "0px";
//     }

//     handleMoveRight(index);
//   };

//   const handleRemove = (index: number) => {
//     updateTag(tags.filter((_, i) => i !== index));
//     handleMoveLeft(index);
//   };

//   const handleMoveLeft = (index: number) => {
//     moveFocus(index - 1);
//   };

//   const handleMoveRight = (index: number) => {
//     moveFocus(index + 1);
//   };

//   const moveFocus = (index: number) => {
//     setTimeout(() => {
//       document.getElementById(`tag-input-${index}`)?.focus();
//     }, 50);
//   };

//   const updateTag = (updatedTag: string[]) => {
//     setTags(updatedTag);
//     onChange(updatedTag);
//   };

//   return (
//     <div
//       className="w-full max-w-full px-2 flex items-center flex-nowrap gap-1 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-thin bg-transparent min-w-0"
//       style={{ scrollbarColor: "#9CA3AF transparent" }}
//     >
//       <input
//         id="tag-input--1"
//         ref={(el) => {
//           inputRef.current = el;
//           spanRefs.current[getSpanRefIndex(-1)] = el;
//         }}
//         type="text"
//         className="bg-transparent outline-none font-sans"
//         value={focusedIndex === -1 ? inputValue : ""}
//         onChange={(e) => setInputValue(e.target.value)}
//         onKeyDown={(e) => onKeyDown(-1, e)}
//         placeholder={placeholder}
//         onFocus={() => setFocusedIndex(-1)}
//         onBlur={(e) => {
//           setFocusedIndex(null);
//           if (e.currentTarget) {
//             e.currentTarget.style.width = "0.25rem";
//           }
//         }}
//         style={{
//           width:
//             focusedIndex === -1 && inputValue !== "" ? undefined : "0.25rem",
//         }}
//       />
//       <span
//         ref={(el) => (spanRefs.current[getSpanRefIndex(-1)] = el)}
//         className="absolute top-0 left-0 invisible whitespace-pre px-2  font-sans"
//       >
//         {inputValue || placeholder || ""}
//       </span>
//       {tags.map((tag, index) => (
//         <div key={`${tag}-${index}`} className="flex items-center">
//           <Tag tag={tag} onClick={() => onRemoveTag(index)} />
//           <div className="relative">
//             <input
//               id={`tag-input-${index}`}
//               type="text"
//               className="px-1 bg-transparent outline-none font-sans"
//               value={focusedIndex === index ? inputValue : ""}
//               onChange={(e) => setInputValue(e.target.value)}
//               onKeyDown={(e) => onKeyDown(index, e)}
//               placeholder={placeholder}
//               onFocus={() => setFocusedIndex(index)}
//               onBlur={(e) => {
//                 setFocusedIndex(null);
//                 if (e.currentTarget) {
//                   e.currentTarget.style.width = "0.25rem";
//                 }
//               }}
//               style={{
//                 width:
//                   focusedIndex === index && inputValue !== ""
//                     ? undefined
//                     : "0.25rem",
//               }}
//             />
//             <span
//               ref={(el) => (spanRefs.current[getSpanRefIndex(index)] = el)}
//               className="absolute top-0 left-0 invisible whitespace-pre px-2  font-sans"
//             >
//               {inputValue || placeholder || ""}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// });

// export default TagInput;

interface Props {
  initialValues: string[];
  placeholder?: string;
  onChange: (value: string[]) => void;
}

function TagInput({ initialValues, placeholder, onChange }: Props) {
  const [tags, setTags] = useState<string[]>(initialValues);
  const [inputValue, setInputValue] = useState("");
  const [focusIndex, setFocusIndex] = useState(-1);
  const [inputWidth, setInputWidth] = useState("1ch");
  const spanRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth + 4;
      setInputWidth(`${width}px`);
    }
  }, [inputValue]);

  useEffect(() => {
    setInputValue("");
  }, [focusIndex]);

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
      if (isEndKey(key, e.nativeEvent.isComposing)) {
        e.preventDefault();
        addTag(focusIndex, value);
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

  const isEndKey = (key: string, isComposing: boolean): boolean => {
    return (
      !isComposing &&
      (key === "Enter" || key === "Tab" || key === " " || key === ",")
    );
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
    if (tags.includes(value)) {
      return;
    }
    const nextTags = [...tags];
    nextTags.splice(index + 1, 0, value);
    updateTag(nextTags);
    moveRight(index, true);
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
          id={`tag-input-${index}`}
          type="text"
          placeholder={placeholder}
          value={getValue()}
          onFocus={() => handleFocus(index)}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e)}
          className="absolute top-0 left-0 bg-transparent outline-none"
          style={{ width: inputWidth }}
        />
        <span ref={spanRef} className="invisible whitespace-pre px-1">
          {getValue()}
        </span>
      </div>
    );
  };

  return (
    <div className="flex items-center p-1">
      {renderInput(-1)}
      {tags.map((tag, index) => (
        <div key={tag} className="flex items-center gap-0.5">
          <Tag tag={tag} onClick={() => handleRemove(index)} />
          {renderInput(index)}
        </div>
      ))}
    </div>
  );
}

export default TagInput;
