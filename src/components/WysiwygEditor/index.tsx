import { useState, useCallback, useEffect } from "react";
import {
  ContentState,
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { Lists, editorTools } from "./assets";
import { editorStyles } from "./classNames";
import clx from "clsx";
import type { WysiwygEditorProps } from "../../types/WysiwygEditor";

const WysiwygEditor = ({
  value,
  onChange,
  className,
  style,
  renderToolbar,
}: WysiwygEditorProps) => {
  const isControlled = value !== undefined && onChange !== undefined;

  // Internal editor state (used in both modes)
  const [editorState, setEditorState] = useState(() => {
    if (isControlled && value) {
      return EditorState.createWithContent(convertFromRaw(value));
    }
    return EditorState.createEmpty();
  });

  // Sync external value only if it actually changes
  useEffect(() => {
    if (isControlled && value) {
      const currentRaw = convertToRaw(editorState.getCurrentContent());
      const newRaw = value;
      const isSame = JSON.stringify(currentRaw) === JSON.stringify(newRaw);
      if (!isSame) {
        const newState = EditorState.createWithContent(convertFromRaw(value));
        setEditorState(newState);
      }
    }
  }, [value]);

  const handleChange = (newState: EditorState) => {
    setEditorState(newState); // Always update internal state with every change
    if (isControlled && onChange) {
      const raw = convertToRaw(newState.getCurrentContent());
      onChange(raw);
    }
  };

  const currentStyle = editorState.getCurrentInlineStyle();

  // apply affects to the text when change edit icon
  const toggleInlineStyle = useCallback(
    (style: string) => {
      const newState = RichUtils.toggleInlineStyle(editorState, style);
      handleChange(newState);
    },
    [editorState]
  );

  const resetEditor = () => {
    const empty = ContentState.createFromText("");
    const newState = EditorState.createWithContent(empty);
    handleChange(newState);
  };

  return (
    <div className={clx(editorStyles.editorContainer, className)} style={style}>
      {renderToolbar ? (
        renderToolbar({
          currentStyle,
          toggleStyle: toggleInlineStyle,
        })
      ) : (
        <div className="w-full">
          <div className={editorStyles.listsDiv}>
            {Lists?.map((item) => (
              <button key={item.id} className={editorStyles.ListStyle}>
                {item.label}
              </button>
            ))}
          </div>
          <div className={editorStyles.iconToolsDiv}>
            <div className="flexRow gap-2">
              {editorTools?.map((item) => {
                const isActive = currentStyle.has(item.style);
                return (
                  <button
                    key={item.id}
                    className={clx(
                      editorStyles.iconTool,
                      isActive &&
                        "bg-gray-20 border border-solid border-gray-40"
                    )}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      toggleInlineStyle(item.style);
                    }}
                  >
                    {item.toolIcon}
                  </button>
                );
              })}
            </div>
            <button className={editorStyles.ResetBtn} onClick={resetEditor}>
              Reset
            </button>
          </div>
        </div>
      )}

      {/* editor */}
      <div className={editorStyles.editorStyle}>
        <div className="min-h-[200px] max-h-[400px] w-full">
          <Editor editorState={editorState} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default WysiwygEditor;
